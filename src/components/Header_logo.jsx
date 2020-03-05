import React from 'react';
import Eng_logo from '../image/header/스플래시logo.svg';
import Symbol_logo from '../image/header/그룹 520.svg';

const Header_logo = () => {
    return (
        <div className="head_logo_component">
            <img src={Symbol_logo} alt="header symbol logo" className="symbol" />
            <img src={Eng_logo} alt="header Eng logo" className="Eng_logo" />
        </div>
    );
};
export default Header_logo;