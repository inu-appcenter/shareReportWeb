import React from 'react';
import Header_my_icon from '../../image/header/패스1990.svg'

const Header_menu = () => {
    const isLogin = true;
    {/*드롭다운*/ }
    return (
        <div className="header_menu_component">
            <div className="fixed_menu">
                <p><a href="" id="maj">학과별자료</a></p>
                <p><a href="">교양자료</a></p>
                <p><a href="">게시판</a></p>
            </div>
            {isLogin ?
                <div className="member_menu">
                    <p><a href="">로그아웃</a></p>
                    <p id="mymy">
                        <a href="">ooooo님<img src={Header_my_icon} alt="" /></a>

                    </p>
                </div>
                :
                <div className="non_member_menu">
                    <p><a href="">회원가입</a></p>
                    <p><a href="">로그인</a></p>
                </div>
            }

        </div>
    );
};

export default Header_menu;