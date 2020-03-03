import React from 'react';
import Head_logo from '../image/header/스플래시logo.svg';

const Header = () => {
    return (
        <div className="head_container">
            <a href="">
                <img src={Head_logo} alt="상단로고" className="head_logo" />
            </a>

        </div>
    );
};

export default Header;