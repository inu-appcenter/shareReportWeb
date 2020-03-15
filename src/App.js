import React from "react";
import "./App.scss";

import JoinComplete from "./container/JoinComplete";
import Home from './container/Home';
import Header from './container/Header';
import Footer from './container/Footer';
import My_edit from './components/My_edit';
import Message_board from './container/message_board';
import Major_board from './container/Major_board';


function App() {
  return (
    <div>
      <Major_board/>
    </div>
  );
}

export default App;
