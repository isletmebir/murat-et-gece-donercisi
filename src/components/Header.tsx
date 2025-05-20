
import { useState, useEffect, useRef } from 'react';
import './../App.css';
import { useNavigate } from 'react-router';

const Header = ({onLayout} : {onLayout? : (height : number) => void}) => {

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  

  const navigate = useNavigate()
  const divRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (divRef.current) {
      if (onLayout)
        onLayout(divRef.current?.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // aşağı kayıyor
        setShowHeader(false);
      } else {
        // yukarı kayıyor
        setShowHeader(true);
      }
      console.log(showHeader);      
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // className={`header ${showHeader ? 'show' : 'hide'}`}
  return (
    <div 
    ref={divRef}  
    className={`header show`}
        style={{
            backgroundImage : "url('/murat-et-gece-donercisi/header_background_image.jpg')", // url('https://www.corumbeltur.com.tr/wp-content/uploads/2024/09/breadcrumb-sonn-scaled.jpg')
                backgroundSize:  "cover",
                maxWidth: "100vw",
                backgroundPosition: "center",
         }}  
    >
        <div className="overlay" />
        <div 
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                onClick={() => {
                  navigate("/")
                 }}
            >
          
          <h1 className='header-primary-text'>
        GECE
        </h1>
        <h1 className='header-secondary-text'>
        Dönercisi
        </h1 >
        </div>
    </div>
  );
};
export default Header;