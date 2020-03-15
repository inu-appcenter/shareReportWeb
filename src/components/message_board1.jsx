import React from 'react';
import { NavLink } from 'react-router-dom';


const message_board1 = () => {
    /*const {router}=context;*/
    return (
        <div className="left">
            <div className="board">게시판</div>
            <div className="menu">
                <div><NavLink to="/" exact activeClassName="active" className="m_board">자유게시판</NavLink></div>
                <div><NavLink to="/notice" activeClassName="active" className="m_board">공지사항</NavLink></div>
            </div>
        </div>

    );
};


export default message_board1;
