import React from 'react';
import './App.scss';
import Home from './container/Home';
import Header from './container/Header';
import Footer from './container/Footer';
import My_edit from './components/My_edit';


function App() {
  return (
    <div className="App">
      <Header />

      <Home />

      <Footer />
    </div>
  );
}

export default App;
