import React from 'react';

const Contacto = () => {
    return (
        <form className="row h-90 g-3 m-3">
  <div className="col-md-12">
    <label for="inputEmail4" className="form-label fw-bolder">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="Firstname" className="form-label fw-bolder">Nombre</label>
    <input type="text" className="form-control" id="Firstname"/>
  </div>
  <div class="col-6">
    <label for="LastName" className="form-label fw-bolder">Apellido</label>
    <input type="text" className="form-control text-center" id="LastName"/>
  </div>
  <div class="col-6">
    <label for="inputAddress2" className="form-label fw-bolder">Direccion</label>
    <input type="text" className="form-control text-center" id="inputAddress2" placeholder="Av II nro 311 depto 3c"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label fw-bolder">Ciudad</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-8">
    <div className="form-check d-flex">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label fst-italic ms-2" for="gridCheck">
        Acepto los terminos y condiciones
      </label>
    </div>
  </div>
  <div className="col-6">
    <button type="submit" className="btn btn-primary">Enviar</button>
  </div>
</form>
    );
}

export default Contacto;
