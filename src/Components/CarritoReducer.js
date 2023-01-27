import { TYPES } from './Actions';



export const carritoInitialState = {
   products: [
  //   { id: 1, 
  //     nombre: "Honda CG Titan 150", 
  //     precio: 500,
  //     cantidad: 1,
  //     src:"https://http2.mlstatic.com/D_NQ_NP_914539-MLA48011856924_102021-O.webp" },
    
  //     { id: 2, 
  //     nombre: "Suzuki GN 125", 
  //     precio: 800, 
  //     cantidad: 1,
  //     src:"https://http2.mlstatic.com/D_NQ_NP_833988-MLA50290184184_062022-O.webp" },
    
  //   { id: 3,
  //     nombre: "Yamaha YBR 125",
  //     precio: 950,
  //     cantidad: 1,
  //     src:"https://http2.mlstatic.com/D_NQ_NP_904712-MLA47447790930_092021-O.jpg" },
    
  //   { id: 4,
  //     nombre: "Honda XR 150", 
  //     precio: 150, 
  //     cantidad: 1,
  //     src:"https://http2.mlstatic.com/D_NQ_NP_815660-MLA46012209755_052021-O.webp"},

  //   { id: 5,
  //     nombre: "Suzuki AX 100",
  //     precio: 320,
  //     cantidad: 1,
  //     src:"https://http2.mlstatic.com/D_NQ_NP_917728-MLA50253605916_062022-O.webp" },

  //   { id: 6,
  //     nombre: "Yamaha XTZ 125",
  //     precio: 790,
  //     cantidad: 1,
  //     src:"https://http2.mlstatic.com/D_NQ_NP_985766-MLA29998521792_042019-O.webp" },
   ],
   carrito: [],
};

export function carritoReducer(state, action) {
  switch (action.type) {
    case TYPES.READ_STATE:{
      return {
        ...state,
        products: action.payload[0],
        carrito: action.payload[1],
      };

    }

    case TYPES.ADD_TO_CART: {
      let nuevoItem = state.products.find((producto) => producto.id === action.payload);

      let itemEnCarrito = state.carrito.find((item) => item.id === action.payload);

      return itemEnCarrito
          ? {
              ...state,
              carrito: state.carrito.map((item) => item.id === nuevoItem.id ? {
                  ...item, cantidad: item.cantidad + 1,
              } : item),
          }
          : {
              ...state, carrito: [...state.carrito, nuevoItem]
          };
  }

  case TYPES.REMOVE_ITEM: {
      let itemAEliminar = state.carrito.find((item) => item.id === action.payload);

      return itemAEliminar.cantidad > 1 ? {

          ...state,
          carrito: state.carrito.map((item) => item.id === action.payload ? { ...item, cantidad: item.cantidad - 1 } : item),
      } : {
          ...state,
          carrito: state.carrito.filter((item) => item.id !== action.payload)
      };
  }

  case TYPES.REMOVE_ALL_ITEMS: {
      let itemAEliminar = state.carrito.find(
          (item) => item.id === action.payload
      );
      return {
          ...state,
          carrito: state.carrito.filter((item) => item.id !== action.payload)
      }

  }
  case TYPES.CLEAR_CART: {
      return {
          ...state,
          carrito: []
      };
  }
  default:
      return state;
}


};
