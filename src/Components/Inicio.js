import React from 'react';

const Inicio = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
             <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" 
          className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://http2.mlstatic.com/D_NQ_NP_815660-MLA46012209755_052021-O.webp" class="d-block w-100 img-fluid" alt="Honda XR 150"/>
          </div>
          <div className="carousel-item">
            <img src="https://http2.mlstatic.com/D_NQ_NP_833988-MLA50290184184_062022-O.webp" class="d-block w-100 img-fluid" alt="Suzuki GN"/>
          </div>
          <div className="carousel-item">
            <img src="https://http2.mlstatic.com/D_NQ_NP_904712-MLA47447790930_092021-O.jpg" class="d-block w-100" alt="Yamaha YBR"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
}

export default Inicio;
