import React from "react";
import Header from '../Header/Header';
import './register.scss'

class Register extends React.Component{

  render(){
    return(
      <div className="container-fluid registro">
        <Header/>
        <div className="row">
          <form className="text-center border-light col-10 form-registro">
            <h2 className="mb-4">
              Registro
            </h2>
            <p id="estasregistrado">¿Ya Estas Registrado?</p>
            <input 
              type="text"
              id="name"
              className="form-control mb-4"
              name="name"
              placeholder="Usuario"
            />
            <input 
              type="email"
              id="defaultLoginFormUsuario"
              className="form-control mb-4"
              name="email"
              placeholder="E-mail"
            />
            <input 
              type="password"
              id="LoginFormPassword"
              className="form-control mb-4"
              name="password"
              placeholder="Contraseña"
            />
            <input 
              type="password"
              id="repitPassword"
              className="form-control mb-4"
              name="repitPassword"
              placeholder="Repetir contraseña"
            />
            <div className="d-flex justify-content-around">
              <div>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" required/>
                  <label htmlFor="defaultLoginFormRemember" className="custom-control-label">Acepto los términos y condiciones, así como la politica de privacidad.</label>
                </div>
              </div>
            </div>
            <button className="btn btn-info btn-block my-4 botonEnviar" type="submit">
              Enviar
            </button>
            <a href="#">¿Tienes una cuenta?</a>
          </form>
        </div>
      </div>
    )
  }
}

export default Register;