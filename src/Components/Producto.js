import React from 'react';


const Producto = (props) => {
  const { data, addToCart } = props;

  return (
    <div className="col-sm-6 col-md-4 border border-primary">
      <h4>{data.nombre}</h4>
      <img src={data.src} style={{maxwidth:80, height:80}}/>
      <h5>$ {data.precio}</h5>
      <button
        onClick={() => addToCart(data.id)}
        className="btn btn-primary btn-sm m-3">

        Agregar Articulo
        
      </button>
    </div>
  );
};

export default Producto;