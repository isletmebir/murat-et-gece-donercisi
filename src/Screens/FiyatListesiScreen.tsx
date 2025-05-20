import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FiyatListesiScreen(){
    
    const [headerHeight, setHeaderHeight] = useState(0);
    
    function FoodCard({src, name, description, price} : {src: string, name: string, description: string, price: number}) {
      return (
        <div 
          style={{
            display: "flex",
            flexDirection: "row",
            padding: 12,
            alignItems: "center",
            borderRadius: 12,
            borderWidth: 1,
            backgroundColor: "white",
            marginTop: 12,
            marginLeft: 12,
            marginRight: 12
          }}
        >
          <img src={src} style={{width: 128, height: 128, borderRadius: 16}} />
          <div style={{display: "flex", flexDirection: "column", paddingLeft: 24}}>
            <span style={{color: "black", textAlign: "left", fontWeight: "bold", fontSize: 24,  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'}}>{name}</span>
            <span style={{color: "grey", textAlign: "left", fontWeight: "400", fontSize: 12}} >{description}</span>
            <span style={{color: "red", textAlign: "left", fontWeight: "bold", fontSize: 24, textShadow: '2px 2px 4px rgba(151, 0, 0, 0.25)'}}>{price}₺</span>
          </div>
        </div>
      )
    }

    function DrinkCard({name, description, price} : {name : string, description: string, price: number}){
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 24,
            paddingBottom: 24,
            borderRadius: 12,
            borderWidth: 1,
            backgroundColor: "white",
            marginTop: 12,
            marginLeft: 12,
            marginRight: 12
          }}
        >
          <div style={{display: "flex", flexDirection: "row", }}>
          <span style={{color: "black", fontWeight: "bold", fontSize: 24, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'}}>{name}</span>
          <span style={{color: "grey", textAlign: "left", fontWeight: "bold", fontSize: 12, marginLeft: 4,}}>{description}</span>
          </div>
          <span style={{color:   "red", textAlign: "left", fontWeight: "bold", fontSize: 24, margin: 0, textShadow: '2px 2px 4px rgba(151, 0, 0, 0.25)'}}>{price}₺</span>
        </div>
      )
    }

    return(
      <div style={{width: "100vw", alignItems: "center"}}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          alignItems: "center",
        }}>
          <Header 
            onLayout={(height) => { setHeaderHeight(height); }}
          />
          <div style={{height: headerHeight}} />
            </div>
            <div style={{paddingLeft: 12, paddingRight: 12}}>
            <h1 style={{fontWeight: "bold", fontSize: 24, paddingTop: 32, paddingBottom: 8, color: "white"}} >Dönerler</h1>
              <div>
                <FoodCard src="/murat-et-gece-donercisi/et_durum_hd.png" name="Döner Et Dürüm" description="100 gr et dönerimiz dürüm arasında servis edilmektedir." price={220} />
                <FoodCard src="/murat-et-gece-donercisi/servis_doner_hd.png" name="Servis Döner" description="130 gr porsiyon olarak servis edilen ince kesim meşhur yaprak dönerimiz." price={290} />
                <FoodCard src="/murat-et-gece-donercisi/iskender_hd.png" name="İskender" description="100 gr iskenderimiz, döner, tereyağı, domates sosu ve ince kesilmiş pide üzerinde yoğurt ve bulgur pilavı eşliğinde sunulur." price={350} />
                <h1 style={{fontWeight: "bold", fontSize: 24, paddingTop: 32, paddingBottom: 8, color: "white"}} >Kilo İşi Dönerler</h1>
                <FoodCard src="/murat-et-gece-donercisi/servis_doner_hd.png" name="250 gr Döner" description="250 gr" price={500} />
                <FoodCard src="/murat-et-gece-donercisi/servis_doner_hd.png" name="500 gr Döner" description="500 gr" price={1000} />
                <FoodCard src="/murat-et-gece-donercisi/servis_doner_hd.png" name="750 gr Döner" description="750 gr" price={1500} />
                <FoodCard src="/murat-et-gece-donercisi/servis_doner_hd.png" name="1000 gr Döner" description="1000 gr" price={1900} />
                <h1 style={{fontWeight: "bold", fontSize: 24, paddingTop: 32, paddingBottom: 8, color: "white"}} >İçecekler</h1>
                <DrinkCard name="Coca Cola" description="330ml" price={40} />
                <DrinkCard name="Fanta" description="330ml" price={40} />
                <DrinkCard name="Ayran" description="300ml" price={30} />
                <DrinkCard name="Su" description="500ml" price={10} />
                <DrinkCard name="Maden Suyu" description="200ml" price={15} />
                <DrinkCard name="Limonlu Maden Suyu" description="200ml" price={20} />
                <DrinkCard name="Şalgam Suyu" description="330ml" price={20} />
                <div style={{height: 50}} />
              </div>
            </div>
            <Footer />
      </div>
    )
}