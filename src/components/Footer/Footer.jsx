import React from "react";
import './footer.scss';

class Footer extends React.Component{

  render(){
    return(
      <div className="footer">
        <div className="footercontent">
          <div className="ayuda">
            <h6>¿Necesitas ayuda?</h6>
            <h6>0264 123 4567</h6>
            <h6>enquiry@geekshubstravels.com</h6>
            <h6><em>Lun-Vie: 9:30-19:00 Sab: 10:00-14:00</em></h6>
          </div>
          <div className="informacion">
            <h5>INFORMACION</h5>
            <p>
            <a href="#">Quienes somos</a>
            </p>
            <p>
            <a href="#">Preguntas frecuentes</a>
            </p>
            <p>
            <a href="#">Política de privacidad</a>
            </p>
            <p>
            <a href="#">Condiciones generales</a>
            </p>
            <p>
            <a href="#">Aviso Legal</a>
            </p>
            <p>
            <a href="#">Contacto</a>
            </p>
            <p>
            <a href="#">Programa de puntos</a>
            </p>
          </div>
          <div className="suscripcion">
            <h6>SUSCRIPBETE A LA NEWSLETTER</h6>
            <input type="mail" placeholder="E-mail"/>
            <br/>
            <button className="btn button btn-warning mt-3">
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