/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import Header_my_icon from '../../../image/header/패스1990.svg';
import Header_mypage_btn from '../header_menu/Header_mypage_btn';

const Header_menu = () => {
    const isLogin = true;
    {/*링크, 드롭다운*/ }
    const [open, setOpen] = useState(false);

    return (
        <div className="header_menu_component">
            <div className="fixed_menu">
                <a href="." id="header_maj">학과별자료</a>
                <a href="." id="header_lib">교양자료</a>
                <a href=".">게시판</a>
            </div>
            {isLogin ?
                <div className="member_menu">
                    <a href=".">로그아웃</a>
                    <div className="dropdown_mypage">
                        <a href="." id="header_mypage" onClick={function (e) {
                            e.preventDefault();
                            setOpen(!open);
                        }}>
                            ooooo님
                            < img src={Header_my_icon} alt="" />
                        </a>
                        {open &&
                            <ul id="item_mypage">
                                <li><Header_mypage_btn name="마이페이지" /></li>
                                <li><Header_mypage_btn name="내가받은자료" /></li>
                                <li><Header_mypage_btn name="내가올린자료" /></li>
                                <li><Header_mypage_btn name="포인트내역" /></li>
                                <li><Header_mypage_btn name="로그아웃" /></li>
                            </ul>}
                    </div>

                </div>

                :
                <div className="non_member_menu">
                    <a href=".">회원가입</a>
                    <a href=".">로그인</a>
                </div>
            }

        </div >
    );
};

export default Header_menu;