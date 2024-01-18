import React from "react";
import '../styles/Titulo.css';
function Titulo({titulo,mostrar}){
    return(
        mostrar ? <div className="mensaje"> 
            <h2>{titulo}</h2> 
        </div> : null
    );
}
export default Titulo;