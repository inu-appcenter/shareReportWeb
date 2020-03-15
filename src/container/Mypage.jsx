import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Message_board1 from '../components/message_board1';
import Message_board2 from '../components/message_board2';
import Home from '../routes/Home';
import Notice from '../routes/notice';
import Mypage_left from'../components/mypage/mypage_left';
import My_edit from '../components/My_edit';



const Mypage= () => {
    /*const {router}=context;*/
    return(
        <Router>
            <div className="board_container">
                <Switch>
                <div>
                    <Mypage_left/>
                    <Route exact path="/회원정보수정" component={My_edit}></Route>
                    
                </div>
                </Switch>
            </div>
        </Router>

    );
};


export default Mypage;