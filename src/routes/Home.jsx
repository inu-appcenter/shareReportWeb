import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Board from '../components/board';
import Message_board from '../container/message_board';



const Home= (match) => {
    /*const {router}=context;*/
    return(
        <div>
            <div className="board2">
                자유게시판
                <div className="box_1">게시판>자유게시판</div>
                <br/>
                <a href=""><div className="button">글쓰기</div></a>
            </div>
            <div> 
                <Board/>
            </div>
        </div>
    );
};

export default Home;
