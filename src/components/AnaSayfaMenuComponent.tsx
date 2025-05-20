import { useNavigate } from "react-router";

export default function AnaSayfaMenuComponent(){

    const navigate = useNavigate();

    return(
        <div style={{display: "flex", flexDirection: "column", marginBottom: 32}}>
            <h2 style={{ fontFamily: "serif", color: "#ffc300", marginTop: 48, margin: 0}}>Menü'de Ne Var</h2>
            <span style={{  color: "#fff"}} >Dönerin en lezzetli hali: Et döner, dürüm, iskender, pilav üstü ve geceye özel porsiyonlar.
            Sıcacık, doyurucu ve tam kıvamında.</span>
            <button
      onClick={() => navigate('/fiyat-listesi')}
      style={{
        padding: '12px 24px',
        fontSize: '16px',
        borderRadius: '32px',
        backgroundColor: '#e53935',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        marginTop: 12,
        maxWidth: 350,
        minWidth: 300,
        alignSelf: "center"
      }}
    >
      Menüyü Göster
    </button>
        </div>
    )

}