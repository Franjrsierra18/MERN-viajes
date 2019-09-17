import React from "react";
import Header from '../Header/Header';

class Login extends React.Component{

  render(){
    return(
      <div className="container-fluid registro">
        <Header/>
        <div className="row">
          <form className="text-center border-light col-10 form-registro">
            <p className="h2 mb-4">
              Login
            </p>
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
            <button className="btn btn-info btn-block my-4 botonEnviar" type="submit">
              Enviar
            </button>
            <a href="#">¿No recuerdas tu contraseña?</a>
            <p>¿No tienes cuenta?<a href="#">Registrate</a></p>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;