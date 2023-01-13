import React from 'react';


const ItemCarrito = ({ data, deleteFromCart }) => {
  const { id, nombre, precio, cantidad } = data;

  return (
    <div className="col-md-12 d-flex flex-row justify-content-between mb-3">
      <h4>{nombre}</h4>
      <h5>$ {precio} x {cantidad} = $ {precio*cantidad}</h5>
      <button onClick={()=>deleteFromCart(id, false)}  className="btn btn-dark btn-sm">Eliminar uno</button>
      <button onClick={()=>deleteFromCart(id, true)} className="btn btn-dark btn-sm">Eliminar todos</button>
    </div>
  );
};

export default ItemCarrito;
