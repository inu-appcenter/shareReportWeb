import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Board from '../components/board';


var b=[ ['국어국문학과', '영어영문학과', '독어독문학과'],
        ['수학과', '물리학과','화학과'],
        ['사회복지학과'] ];


const Major_b = ({match}) => {
    
    return(
        <div>
            <div className="board2">
                {match.params.index}
                <div className="box_1">
                    <div>{match.params.index}</div>
                </div>


                <br/>
                <a href=""><div className="button">글쓰기</div></a>
            </div> 
            <Board/>
        </div>
    );
};

export default Major_b;
        