import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Board from '../components/board';

var a=['인문대학', '자연과학대학','사회과학대학'];
var b=[ ['국어국문학과', '영어영문학과', '독어독문학과'],
        ['수학과', '물리학과','화학과'],
        ['사회복지학과'] ];



const Major_b= () => {
    
    return(
        <div>
            <div className="board2">
                {b[0][0]}
                <div className="box_1">게시판>{a[0]}</div>
                <br/>
                <a href=""><div className="button">글쓰기</div></a>
            </div> 
            <Board/>
        </div>
    );
};

export default Major_b;