import React from 'react';
import Symbol_logo from '../../image/header/그룹 520.svg';
import Eng_logo from '../../image/header/스플래시logo.svg';

const Header_logo = () => {
    return (
        < div className="head_logo_component" >
            <img src={Symbol_logo} alt="header symbol" id="head_symbol_logo" />
            <img src={Eng_logo} alt="header eng logo" id="head_eng_logo" />
        </div >

    );
};

export default Header_logo;