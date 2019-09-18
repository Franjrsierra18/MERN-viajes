import React from "react";
import './destinos.scss'

class Destinos extends React.Component{

  render(){
    return(
      <div className="grid-section" id="destinos">
        <div className="container-fluid bg-3 text-center visibleT">
          <div className="row">
            <div className="col-md-4">
              <div className="card border-light mb-3">
                <div className="card-body toptitle bg-dark">
                  <h4 className="card-title text-white">Save 75$ pay only</h4>
                  <span className="bg-warning">729$</span>
                </div>
                <img className="card-img-top"
                  src="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/United%20Kingdom/London/london-aerial-thames-guide-xlarge.jpg"
                  alt="Card image cap"/>
                <div className="card-body">
                  <h4 className="card-title text-dark">London</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-light mb-3">
                <div className="card-body toptitle bg-dark">
                  <h4 className="card-title text-white">Save 35$ pay only</h4>
                  <span className="bg-warning">519$</span>
                </div>
                <img className="card-img-top"
                  src="https://media-cdn.tripadvisor.com/media/photo-s/13/91/4b/da/the-quats-temple-bar.jpg" alt="Card image cap"/>
                <div className="card-body">
                  <h4 className="card-title text-dark">Dublin</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-light mb-3">
                <div className="card-body toptitle bg-dark">
                  <h4 className="card-title text-white">Save 90$ pay only</h4>
                  <span className="bg-warning">359$</span>
                </div>
                <img className="card-img-top" src="https://www.atrapalo.com/common/photo/dh/519/0/si_560_460.jpg"
                  alt="Card image cap"/>
                <div className="card-body">
                  <h4 className="card-title text-dark">Mykonos</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-light mb-3">
                <div className="card-body toptitle bg-dark">
                  <h4 className="card-title text-white">Save 50$ pay only</h4>
                  <span className="bg-warning">659$</span>
                </div>
                <img className="card-img-top" src="https://cdn.pixabay.com/photo/2019/08/16/16/45/colosseum-4410637_960_720.jpg"
                  alt="Card image cap"/>
                <div className="card-body">
                  <h4 className="card-title text-dark">Roma</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-light mb-3">
                <div className="card-body toptitle bg-dark">
                  <h4 className="card-title text-white">Save 95$ pay only</h4>
                  <span className="bg-warning">199$</span>
                </div>
                <img className="card-img-top"
                  src="https://cadenaser00.epimg.net/ser/imagenes/2018/12/04/internacional/1543942817_107745_1543944283_noticia_normal.jpg"
                  alt="Card image cap"/>
                <div className="card-body">
                  <h4 className="card-title text-dark">Amsterdam</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-light mb-3">
                <div className="card-body toptitle bg-dark">
                  <h4 className="card-title text-white">Save 65$ pay only</h4>
                  <span className="bg-warning">329$</span>
                </div>
                <img className="card-img-top" src="https://www.cremadescalvosotelo.com/sites/default/files/paris.png"
                  alt="Card image cap"/>
                <div className="card-body">
                  <h4 className="card-title text-dark">Paris</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container bg-3 text-center visibleCarr">
          <div className="row">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="col-md-4">
                    <div className="card border-light mb-3">
                      <div className="card-body toptitle bg-dark">
                        <h4 className="card-title text-white-carr">Save 90$ pay only</h4>
                        <span className="bg-warning">359$</span>
                      </div>
                      <img className="card-img-top" src="https://www.atrapalo.com/common/photo/dh/519/0/si_560_460.jpg"
                        alt="Card image cap"/>
                      <div className="card-body">
                        <h4 className="card-title text-dark">Mikonos</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-md-4">
                    <div className="card border-light mb-3">
                      <div className="card-body toptitle bg-dark">
                        <h4 className="card-title text-white-carr">Save 75$ pay only</h4>
                        <span className="bg-warning">729$</span>
                      </div>
                      <img className="card-img-top"
                        src="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/United%20Kingdom/London/london-aerial-thames-guide-xlarge.jpg"
                        alt="Card image cap"/>
                      <div className="card-body">
                        <h4 className="card-title text-dark">London</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-md-4">
                    <div className="card border-light mb-3">
                      <div className="card-body toptitle bg-dark">
                        <h4 className="card-title text-white-carr">Save 65$ pay only</h4>
                        <span className="bg-warning">329$</span>
                      </div>
                      <img className="card-img-top" src="https://www.cremadescalvosotelo.com/sites/default/files/paris.png" alt="Card image cap"/>
                      <div className="card-body">
                        <h4 className="card-title text-dark">Paris</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-md-4">
                    <div className="card border-light mb-3">
                      <div className="card-body toptitle bg-dark">
                        <h4 className="card-title text-white-carr">Save 50$ pay only</h4>
                        <span className="bg-warning">659$</span>
                      </div>
                      <img className="card-img-top"
                        src="https://cdn.pixabay.com/photo/2019/08/16/16/45/colosseum-4410637_960_720.jpg"
                        alt="Card image cap"/>
                      <div className="card-body">
                        <h4 className="card-title text-dark">Rome</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-md-4">
                    <div className="card border-light mb-3">
                      <div className="card-body toptitle bg-dark">
                        <h4 className="card-title text-white-carr">Save 95$ pay only</h4>
                        <span className="bg-warning">199$</span>
                      </div>
                      <img className="card-img-top"
                        src="https://cadenaser00.epimg.net/ser/imagenes/2018/12/04/internacional/1543942817_107745_1543944283_noticia_normal.jpg"
                        alt="Card image cap"/>
                      <div className="card-body">
                        <h4 className="card-title text-dark">Amsterdam</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-md-4">
                  <div className="card border-light mb-3">
                    <div className="card-body toptitle bg-dark">
                      <h4 className="card-title text-white-carr">Save 35$ pay only</h4>
                      <span className="bg-warning">519$</span>
                    </div>
                    <img className="card-img-top" src="https://media-cdn.tripadvisor.com/media/photo-s/13/91/4b/da/the-quats-temple-bar.jpg" alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title text-dark">Dublin</h4>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Destinos;