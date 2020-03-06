
import Message_board from './container/message_board';
import Major_board from './container/Major_board';
import React from "react";
import "./App.scss";
import JoinComplete from "./container/JoinComplete";
import Home from './container/Home';
import Header from './container/Header';
import Footer from './container/Footer';
import My_edit from './components/My_edit';


function App() {
  return (
    <div className="App">
      <Header />

      <Message_board/>

      <Footer />
    </div>
  );
}

export default App;
