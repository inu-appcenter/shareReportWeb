import React from 'react';
import Head_icon from '.../image/header/패스1990.svg';

const Header_menu = () => {
    const isLogin = false
    return (
        <div className="head_menu_component">
            <div className="head_menu">   {/* 드롭다운 */}
                <div>학과별자료</div>
                <div href="">교양자료</div>
            </div>
            {isLogin ? <div className="head_menu">
                <a href="">회원가입</a>
                <a href="">로그인</a>
            </div>
                :
                <div className="head_menu">
                    <p>로그아웃</p>
                    <p className="head_icon" >
                        ididid
                        <img src={Head_icon} alt="마이페이지 아이콘" > </img>
                    </p>   {/* 드롭다운 */}
                </div>
            }
        </div>
    );
};

export default Header_menu;
