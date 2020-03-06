import React from 'react';
import {Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Major from '../container/Major_board';



const message_board2= () => {

    return(
        <div>
            <div className="right_top">
                <a href=""><div className="box1">학과</div></a>
                <a href=""><div className="box2">교양</div></a>
                <a href=""><div className="box3">게시판</div></a>
    
            </div>
            
        </div>
    );
};

export default message_board2;
