import React from "react";
import Header from '../Header/Header';
import './main.scss'
import Destinos from "./Destinos/Destinos";

class Main extends React.Component{

  render(){
    return(
      <div className="main">
        <Header/>
        <section id="Slide">
          <div id="textSlide" class="col-sm-6">
            <h1>Viaja!</h1>
            <h3>Descubre lugares maravillosos!</h3>
            <button className="btn btn-warning">ver destinos</button>
          </div>
        </section>
        <Destinos/>
      </div>
    )
  }
}

export default Main;