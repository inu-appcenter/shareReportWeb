import React from 'react';
import Btn_arrow from '../../../image/header/그룹 428.svg';

const Header_mypage_btn = ({ name }) => {
    return (
        < div className="header_mypage_btn_component" >
            <a href=".">
                <p>{name}</p>
                <img src={Btn_arrow} alt="" />
            </a>
        </div >

    );
};

export default Header_mypage_btn;