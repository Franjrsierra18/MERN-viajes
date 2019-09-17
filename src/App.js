import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Main/>
      {/* <Register/> */}
      {/* <Login/> */}
      <Footer/>
    </div>
  );
}

export default App;
