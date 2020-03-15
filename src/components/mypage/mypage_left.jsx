import React from 'react';

import { NavLink } from 'react-router-dom';


const mypage_left= () => {

    return(
        <div className="left">
            <div className="username">
                <div className="point_view">
                    <div className="point_view1">12</div>
                    <div className="point_view2">point</div>
                </div>
            youshare
            <p className="nim"> 님</p></div>
            <div className="menu">
            <div><NavLink to="/대시보드" ctiveClassName="active" className="my_menu1">대시보드</NavLink></div>
                <div><NavLink to="/내가받은자료" ctiveClassName="active" className="my_menu1">내가받은자료</NavLink></div>
                <div><NavLink to="/내가올린자료" ctiveClassName="active" className="my_menu1">내가올린자료</NavLink></div>
                <div><NavLink to="/포인트내역" ctiveClassName="active" className="my_menu1">포인트내역</NavLink></div>
                <div><NavLink to="/회원정보수정" ctiveClassName="active" className="my_menu1">회원정보수정</NavLink></div>
            </div>
        </div>
    );
};

export default mypage_left;


