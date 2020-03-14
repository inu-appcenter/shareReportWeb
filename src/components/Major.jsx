import React from 'react';
import {Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Major_board from '../container/Major_board';

const colege=()=>{
    var MajorArray=new Array('인문대학', '자연과학대학','사회과학대학');
    var i=0;
    for(i=0; i<MajorArray.length; i++){
        var a=0;
        var b=0;
        return b;
    };
    
}

const Major= () => {
    var MajorArray=['인문대학', '자연과학대학','사회과학대학'];
    var i=0;
    for(i=0; i<MajorArray.length; i++){
    
    return(
        <div className="left">
            <div className="board">학과별자료</div>
            <div className="menu">
                <div><NavLink to="/major" exact activeClassName="active" className="m_board">{MajorArray[i]}</NavLink></div>
                <div><NavLink to="/major2" activeClassName="active" className="m_board">{MajorArray[1]}</NavLink></div>
            </div>
        </div>
    );
    }
};

export default Major;
