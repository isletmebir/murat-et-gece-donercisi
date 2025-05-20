import React, { useEffect, useRef } from "react";
import "../css/MusteriYorumlari.css"

interface Product {
  id: number;
  name: string;
  noImage: boolean;
  image: string;
  date: string;
  star: number;
  body: string;
}

const products: Product[] = [
  { id: 1, name: "Azra Aslan", noImage: true, image: "/ana2.jpg", date: "2025-05-07", star: 5, body: "Herşey çok güzeldi hizmet de gayet güzel memnun kaldık"},
  { id: 2, name: "EMRAH Ozturk", noImage: true,image: "/ana2.jpg", date: "2025-05-08", star: 5, body: "Çorumda döner yenılecek tek adres derim"},
  { id: 3, name: "Tahir Çenesiz", noImage: false, image: "/murat-et-gece-donercisi/musteri_rtc.png", date: "2025-05-14", star: 5, body: "Açılış günü ve takip eden 2 gün döner yemeğe arkadaşlarımla gittim. Döner gerçekten harika 👏🏻👏🏻👏🏻"},
  { id: 4, name: "Sami Aslaan", noImage: true ,image: "/ana2.jpg", date: "2025-05-08", star: 5, body: ""},
];

const MusteriYorumlari: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    const scrollAmount = 1;
    const interval = setInterval(() => {
      if (container) {
        container.scrollLeft += scrollAmount;
        // Reset to start when reaching end
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
    }, 20); // smaller = faster
    return () => clearInterval(interval);
  }, []);

  // Duplicate the list to make it "infinite"
  const infiniteProducts = [...products, ...products];

  return (
    <div>
    <div>
      <h2 style={{ fontFamily: "serif", color: "#ffc300", marginTop: 18, margin: 0 }}> Müşteri Yorumları</h2>
      <h4 style={{ fontWeight: "400", color: "#eee", paddingLeft: 12, paddingRight: 12 }}> Dönerimiz hakkında müşterilerimizin söylediği her şey bizim için önemli! Siz de gece boyunca sunduğumuz lezzetler hakkında ne düşündüklerini keşfedin.</h4>
    </div>
    <div style={{width: "100vw"}} className="product-slider-container">
      <div className="product-slider" ref={scrollRef}>
        {infiniteProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: 8, paddingTop: 8}}>
              {product.noImage ? 
                <h2 style={{fontSize: 30, backgroundColor: "red", borderRadius: 32, width: 48, height: 48, margin: 0, alignItems: "center", justifyContent: "center"}}>{product.name.charAt(0)}</h2>
               : <img src={product.image} style={{borderRadius: 32, width: 48, height: 48}}/>
                }
              <div style={{marginLeft: 12, alignItems: "center"}}>
                <h3 style={{margin: 0,color: "black", textAlign: "left"}}>{product.name}</h3>
                <h5 style={{margin: 0,color: "grey", textAlign: "left"}}>{product.date}</h5>
              </div>
            <div/>
            </div>
            <img src={"/murat-et-gece-donercisi/google-logo.png"} style={{borderRadius: 32, width: 32, height: 32}}  />
          </div>
          <div style={{display: "flex", flexDirection: "row", paddingTop: 12, paddingLeft: 12}}>
          {[...Array(product.star)].map(_ => <img src="/murat-et-gece-donercisi/star.svg" style={{width: 24, height: 24, paddingLeft: 4}} />)}
          </div>
          <h3 style={{color: "#333", fontSize: 14, textAlign: "left", paddingLeft: 12, paddingRight: 12}}>{product.body}</h3>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
export default MusteriYorumlari;