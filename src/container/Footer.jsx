import React from 'react'
import Footer_tap from '../image/footer/하단탭.png';

const Footer = () => {
    return (
        <div className="foot_container">
               <img src={Footer_tap} alt="하단탭"
               srcset="../image/footer/하단탭@2x.png 2x,
               ../image/footer/하단탭@3x.png 3x"
               />
        </div>
    );
};
export default Footer;