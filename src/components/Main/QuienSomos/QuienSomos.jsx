import React from "react";
import './quiensomos.scss'

class QuienSomos extends React.Component{

  render(){
    return(
      <div className="QuienSomos">
        <section className="quienes-somos mb-5">
          <div id="quienesSomos">
            <h1 className="text-dark">Quienes Somos</h1>
            <br/>
            <p>GeeksHubs Travels es una agencia de viajes online creada en 2009 por un equipo de viajeros entusiastas que deciden hacer de su pasión por conocer el mundo un modo de vida. Desde nuestros inicios hemos diseñado más de 500 viajes organizados a diferentes destinos de Europa, Norteamérica y Asia. Nuestro objetivo ahora es ir ampliando horizontes poco a poco.</p>
            <button className="btn btn-warning">Descubrir</button>
          </div>
        </section> 
      </div>
    )
  }
}

export default QuienSomos;