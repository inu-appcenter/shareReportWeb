import React from 'react';
import Header_logo from '../components/header/Header_logo';
import Header_menu from '../components/header/Header_menu';

const Header = () => {
    return (
        <div className="header_container">
            <Header_logo />
            <Header_menu />
        </div>
    );
};

export default Header;
