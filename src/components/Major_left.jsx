import React from 'react';
import {Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Major_board from '../container/Major_board';





const Major= () => {
    let i=-1;
    var College=[
        '인문대학',
        '자연과학대학',
        '사회과학대학',
        '글로벌법정경대학',
        '공과대학',
        '정보기술대학',
         '경영대학',
         '예술제육대학',
         '사범대학',
         '도시과학대학',
         '생명과학기술대학',
         '동북아국제통상대학'
    ];
    const majorName="dkdk";

    return(
        <div className="left">
            <div className="board">학과별자료</div>
            
            <div className="menu">
                {
                    College.map((college, index)=>(
                        <div key={index}>
                            <NavLink to={'/major/'+college} exact activeClassName="active" id={college} className="m_board">{college}</NavLink>
                        </div>
                    ))
                }

            </div>
            
        </div>
    );
};


export default Major;
