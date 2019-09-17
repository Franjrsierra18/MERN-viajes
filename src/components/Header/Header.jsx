import React from 'react';
import Logo from './logo.png';
import './header.scss';

const headerStyle = {
  fontSize: '20px'
};

class Header extends React.Component {

  render(){
    return(
      <div className="header">
        <section className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12-sm">
              <nav className="navbar navbar-expand-lg navbar-dark primary-color">
                <div>
                  <a href="#" className="navbar-brand">
                    <img src={Logo} alt="Logo GeeksHub Travels" className="img-fluid"/>
                  </a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menuBurguer" aria-controls="menuBurguer" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menuBurguer">
                  <ul className="navbar-nav mr-auto menu">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Destinos <span className="sr-only"></span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Quienes Somos</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Donde Estamos</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Registro</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Login</a>
                    </li>
                  </ul>
                </div>
                <div className="icoSociale">
                  <ul className="navbar-nav sociale">
                    <li className="nav-sociale active">
                      <a href="#" className="nav-link">
                        <i className="fa fa-facebook-square" style={headerStyle}></i>
                      </a>
                    </li>
                    <li className="nav-sociale active">
                      <a href="#" className="nav-link">
                        <i className="fa fa-instagram" style={headerStyle}></i>
                      </a>
                    </li>
                    <li className="nav-sociale active">
                      <a href="#" className="nav-link">
                        <i className="fa fa-twitter-square" style={headerStyle}></i>
                      </a>
                    </li>
                    <li className="nav-sociale active">
                      <a href="#" className="nav-link">
                        <i className="fa fa-linkedin-square" style={headerStyle}></i>
                      </a>
                    </li>
                    <li className="nav-sociale active">
                      <a href="#" className="nav-link">
                        <i className="fa fa-whatsapp" style={headerStyle}></i>
                      </a>
                    </li>
                    <li className="nav-sociale active">
                      <a href="#" className="nav-link">
                        <i className="fa fa-youtube-play" style={headerStyle}></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Header;