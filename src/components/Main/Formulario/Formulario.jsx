import React from "react";
import './formulario.scss'

class Formulario extends React.Component{

  render(){
    return(
      <div className="section pb-5 formulario" id="formulario">
        <div className="row">
          <div className="col-lg-5 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="form-header blue accent-1">
                  <p className="mb-1"> E: enquiry@artiotravel.com</p>
                  <p> P: 0264 123 4567</p>
                </div>
                <p>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.
                </p>
                <p>We are open from 8.30 AM -- 4.00 PM week days.</p>
                <hr/>
                <form>
                  <div className="row mb-3">
                    <div className="col md-form">
                      <input type="text" id="form-name" className="form-control" placeholder="Name*" required/>
                    </div>
                    <div className="col md-form">
                      <input type="text" id="form-email" className="form-control" placeholder="Email*" required/>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col md-form">
                      <input type="number" id="form-Phone" className="form-control" placeholder="Phone"/>
                    </div>
                    <div className="col md-form">
                      <input type="text" id="form-Country" className="form-control" placeholder="Country"/>
                    </div>
                  </div>
                  <div className="md-form">
                    <textarea id="form-text" className="form-control md-textarea" rows="3" placeholder="Message"></textarea>
                    <label htmlFor="form-text">* PLEASE COMPLETE ALL FIELDS CORRECTLY</label>
                  </div>
                  <div className="text-center mt-4">
                    <button type="button" className="btn btn-warning">Enviar mensaje</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div id="map-container-google-11" className="z-depth-1-half map-container-6" style={{height: "580px"}}>
              <iframe src="https://maps.google.com/maps?q=new%20delphi&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0"
                style={{border:"0"}} allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Formulario;