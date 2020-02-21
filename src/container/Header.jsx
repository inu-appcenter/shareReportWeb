import React from 'react'
import Logo_svg from '../스플래시logo.svg';
import Head_icon_svg from '../패스 1990.svg'

const Header = () => {
    const isLogin = false
    return (
        <div className="head_container">
            <a href="">
                <img src={Logo_svg} alt="로고" className="logo"> </img>
            </a>

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
                    <p>
                        ididid
                        <img src={Head_icon_svg} alt="마이페이지 아이콘" className="head_icon"> </img>
                    </p>   {/* 드롭다운 */}
                </div>
            }
        </div>
    );
};

export default Header;