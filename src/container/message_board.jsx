
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Message_board1 from '../components/message_board1';
import Message_board2 from '../components/message_board2';
import Home from '../routes/Home';
import Notice from '../routes/notice';


const message_board= () => {
    /*const {router}=context;*/
    return(
        <Router>
            <div className="board_container">
                <Switch>
                <div>
                    <Message_board1/>
                    <Message_board2/>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/notice" component={Notice}></Route>
                </div>
                </Switch>
            </div>
        </Router>

    );
};


export default message_board;