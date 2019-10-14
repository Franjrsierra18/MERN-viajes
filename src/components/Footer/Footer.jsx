import React from "react";
import './footer.scss';

const headerStyle = {
  fontSize: '20px'
};

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
          <div className="icoSociale">
            <span>
              <a href="#" className="nav-link">
                <i className="fa fa-facebook-square" style={headerStyle}></i>
              </a>
            </span>
            <span>
              <a href="#" className="nav-link">
                <i className="fa fa-instagram" style={headerStyle}></i>
              </a>
            </span>
            <span>
              <a href="#" className="nav-link">
                <i className="fa fa-twitter-square" style={headerStyle}></i>
              </a>
            </span>
            <span>
              <a href="#" className="nav-link">
                <i className="fa fa-linkedin-square" style={headerStyle}></i>
              </a>
            </span>
            <span>
              <a href="#" className="nav-link">
                <i className="fa fa-whatsapp" style={headerStyle}></i>
              </a>
            </span>
            <span>
              <a href="#" className="nav-link">
                <i className="fa fa-youtube-play" style={headerStyle}></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;