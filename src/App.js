import './App.css';
import {Curiosidades} from "./data"  // se importa el array

function App() {

  const bienvenida = "Bienvenidos a React!";



  return (
    //JSX
    <div className = "App">
    <header className = "App-header" >

    <h1 > {bienvenida} </h1>   
    <h2>Curiosidades</h2>
    <ul>
      {Curiosidades.map(curiosidad=>{
        return <li key={curiosidad.id}>{curiosidad.descripcion}</li>  // Las key son un requerimiento de js para distinguir a cada elemento de la lista
      })}
    </ul> 

    <h2>Caracteristicas</h2>

    <ul>
    <li>Es componible (hecho por componentes)</li>
    <li>Es declarativo a diferencia de JS</li>
    <li>Es una habilidad laboral dentro del IT</li>
    <li>Es mantenido por un equipo competente</li>
    </ul>
    
    
    <p>
      <button onClick={alert("Hola!")}> Hola </button>
    </p>
    </header> 
    </div>
  );
}

export default App;