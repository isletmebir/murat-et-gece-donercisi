import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function SocialMediaComponent(){

    return(
        <div>
            <div style={{ fontSize: '32px', display: 'flex', gap: '15px', alignItems: "center", justifyContent: "center" }}>
                <a href="https://www.instagram.com/gecedonercisi19/" target="_blank" rel="noopener noreferrer"><FaFacebook color="#fff" /></a>
                <a href="https://www.instagram.com/gecedonercisi19/" target="_blank" rel="noopener noreferrer"><FaInstagram color="#fff" /></a>
            </div>
        </div>
    )

}