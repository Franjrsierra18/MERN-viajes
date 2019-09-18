import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Main from './components/Main/Main';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/register/" component={Register} />
            <Route path="/login/" component={Login} />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
