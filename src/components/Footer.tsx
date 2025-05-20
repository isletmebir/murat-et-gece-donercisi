
export default function Footer(){

    return(
        <footer style={{backgroundColor: "#111111bb", paddingBottom: 25}}>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <span style={{color: "white", fontWeight: "bold", fontSize: 18, paddingTop: 12}}>&copy; {new Date().getFullYear()} Murat Et</span>
            
            <span className='header-primary-text' style={{fontSize: 42, margin: 0}}>GECE</span>
            <span className='header-secondary-text' style={{fontSize: 36, marginTop: -32, }}>Dönercisi</span>
            </div>
          
        </footer>
    )

}