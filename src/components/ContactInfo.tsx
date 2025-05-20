import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
import SocialMediaComponent from './SocialMediaComponent';

const ContactInfo = () => (
  <div style={{
    backgroundColor: "#111111bb",
    justifyContent: "center",
    padding: '30px 20px',
    margin: '0',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  }} >
    <div style={{  justifyContent: "center",}} className="responsive-container-column-to-row" >

   
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <FaMapMarkerAlt style={{ marginRight: '10px', color: '#e53935' }} />
      <span style={{fontWeight: "bold", color: "white"}}>
        Çepni, İnönü Cd. 42/A
        19000 Çorum
      </span>
    </div>

    <div style={{ display: 'flex', alignItems: 'center' }}>
      <FaPhoneAlt style={{ marginRight: '10px', color: '#43a047' }} />
      <span>
        <a href="tel:+903643119192" style={{fontWeight: "bold", color: '#fff', textDecoration: 'none' }}>
          +90 (364) 311 91 92
        </a>
      </span>
    </div>

    <div style={{ display: 'flex', alignItems: 'center' }}>
      <FaClock style={{ marginRight: '10px', color: '#fff' }} />
      <span style={{fontWeight: "bold", color: "white"}}>Her gün: 15:00 - 03:00 (Gece)</span>
    </div>
    </div>
    <SocialMediaComponent />
  </div>
);

export default ContactInfo;
