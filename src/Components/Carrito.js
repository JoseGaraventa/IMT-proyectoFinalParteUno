import React from 'react';
import { useReducer, useEffect } from 'react';
import Producto from './Producto';
import {carritoReducer, carritoInitialState} from "./CarritoReducer" 
import { TYPES } from './Actions';
import ItemCarrito from './ItemCarrito';
import axios from "axios"


const Carrito = () => {
    const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);

    const actualizarEstado= async () => {
    const productosURL="http://localhost:8080/products";
    const carritoURL="http://localhost:8080/carrito";

    const listaProductos = await axios.get(productosURL);
    const carrito = await axios.get(carritoURL);

    const nuevosProductos= listaProductos.data;
    const nuevoCarrito= carrito.data;

    dispatch ({type: TYPES.READ_STATE, payload:[nuevosProductos, nuevoCarrito]});

  };

useEffect(() => {
  actualizarEstado();
  }, []);

    const { products, carrito } = state;
  
    const addToCart = (id) => {
      dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    };

    const deleteFromCart = (id, eliminarTodos) => {
      if (eliminarTodos){
        dispatch({type: TYPES.REMOVE_ALL_ITEMS, payload: id})
      }

      else{
        dispatch({type: TYPES.REMOVE_ITEM, payload: id})
      }
      };


    const clearCart = () => {dispatch({type: TYPES.CLEAR_CART})
  };
  
  
  
    return (
      <div className="container-fluid">
        <h1 className='text-center text-capitalize m-2'>Nuestros Productos</h1>
        
        <div className="row p-2">
          {products.map((producto) => {
            return (
              <Producto key={producto.id} data={producto} addToCart={addToCart} />
            );
          })}
        </div>
        <h2>Carrito</h2>
        <div className="row">
          {carrito.map((item, index) => {
            return <ItemCarrito key={index} data={item} deleteFromCart={deleteFromCart}/>;
          })}
        </div>
        <button onClick={()=>clearCart()} className="btn btn-danger m-3">Limpiar</button>
      </div>
    );
  };
  
  export default Carrito;