import './App.css';
import Titulo from './componentes/Titulo.js';
import Boton from "./componentes/Boton.js";
import { useState } from "react";
function App() {
  const[show,setShow]=useState(true);
  const mostrar=()=>{
      setShow(!show);
  }
  return (
    <div className="App">
      <Boton texto="Show/Hide" funcionClick={mostrar}/>
      <Titulo titulo="Buenas tardes usuario" mostrar={show}/>
    </div>
  );
}

export default App;
