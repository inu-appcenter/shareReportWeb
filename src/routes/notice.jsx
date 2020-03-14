import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Board from '../components/board';

const notice= () => {

    return(
        <div>
            <div className="board2">
                공지사항
                <div className="box_1">게시판>공지사항</div>
                <br/>
                <a href=""><div className="button">글쓰기</div></a>
            </div> 
            <Board/>
        </div>
    );
};

export default notice;