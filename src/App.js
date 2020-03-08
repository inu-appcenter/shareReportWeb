import React from "react";
import "./App.scss";
import Message_board from './container/message_board';
import Major_board from './container/Major_board';
import JoinComplete from "./container/JoinComplete";
import Home from './container/Home';
import Header from './container/Header';
import Footer from './container/Footer';
import My_edit from './components/My_edit';
import Write from './container/Write';


function App() {
  return (
    <div className="App">
      <Header />

      <Write />

      <Footer />
    </div>
  );
}

export default App;
