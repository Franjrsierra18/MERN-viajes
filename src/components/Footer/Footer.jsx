import React from "react";

class Footer extends React.Component{

  render(){
    return(
      <div>
        <div className="footercontent">
          <div className="ayuda">
            <h6>¿Necesitas ayuda?</h6>
            <h6>0264 123 4567</h6>
            <h6>enquiry@geekshubstravels.com</h6>
            <h6><em>Lun-Vie: 9:30-19:00 Sab: 10:00-14:00</em></h6>
          </div>
          <div className="informacion">
            <h5>INFORMACION</h5>
            <br/>
            <h6>
            <a href="#">Quienes somos</a>
            </h6>
            <h6>
            <a href="#">Preguntas frecuentes</a>
            </h6>
            <h6>
            <a href="#">Política de privacidad</a>
            </h6>
            <h6>
            <a href="#">Condiciones generales</a>
            </h6>
            <h6>
            <a href="#">Aviso Legal</a>
            </h6>
            <h6>
            <a href="#">Contacto</a>
            </h6>
            <h6>
            <a href="#">Programa de puntos</a>
            </h6>
            <br/>
          </div>
          <div className="suscripcion">
            <h6>SUSCRIPBETE A LA NEWSLETTER</h6>
            <input type="mail" placeholder="E-mail"/>
            <br/>
            <button className="btn button btn-warning">
              Suscribirse
            </button>
            <br/>
          </div>
        </div>
        <div className="footerderechos">
          <p>GeeksHubs Travels 2018 Todos los derechos reservados.</p>
        </div>
      </div>
    )
  }
}

export default Footer;