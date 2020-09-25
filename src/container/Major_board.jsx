import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Message_board1 from '../components/message_board1';
import Message_board2 from '../components/message_board2';
import Home from '../routes/Home';
import Notice from '../routes/notice';
import Major_left from '../components/Major_left';
import Board from '../components/board';
import Major_b from '../routes/Major_b';


const Major_board= () => {
    /*const {router}=context;*/
    return(
        <Router>
            <div className="board_container">
                <Switch>
                <div>
                    <Major_left/>
                    <Message_board2/>
                   
                    <Route path={"/major/:index"} component={Major_b}></Route>
                    <Route exact path="/major" component={Major_b}></Route>

                    <Redirect path="*" to="/major/인문대학"></Redirect>
                </div>
                </Switch>
            </div>
        </Router>

    );
};


export default Major_board;