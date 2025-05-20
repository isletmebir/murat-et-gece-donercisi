
function LocationViewer() {

  return (
    <div>
      <div>
        <h2 style={{fontFamily: "serif", color: "#ffc300", marginTop: 48, margin: 0}}>
          📍 Lezzet Durağımız - İnönü Caddesinde!
        </h2>
        <h4 style={{fontWeight: "400", color: "#eee", paddingLeft: 12, paddingRight: 12}}>
          Şehrin kalbinde, İnönü Caddesi üzerinde yer alan Murat Et Gece Dönercisi, 100% dana etinden hazırlanan enfes dönerleriyle damaklarda iz bırakıyor.
        </h4>
      </div>
      <iframe
        style={{
          alignSelf: "center",
          borderRadius: 12,
          marginTop: 10,
          marginBottom: 32,
          minWidth: 300,
          minHeight: 300,
        }}
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.378722576887!2d34.94848521224258!3d40.545996871299884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40872b99d647ca71%3A0xaf2de60f9949add2!2zTVVSQVQgRVQgR0VDRSBEw5ZORVJDxLBTxLA!5e1!3m2!1str!2sus!4v1747306355371!5m2!1str!2sus'
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );

}
export default LocationViewer;