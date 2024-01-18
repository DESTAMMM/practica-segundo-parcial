import React from 'react';
import'../styles/Tarea.css';
function Tarea({task,onDelete}){
    return(
            <ul>
                <li className='task'>
                    <p className='tarea'>·  {task.texto}</p>
                    <button className='boton' onClick={()=> onDelete(task.id)}>X</button>
                </li>
            </ul>
    );
}
export default Tarea;