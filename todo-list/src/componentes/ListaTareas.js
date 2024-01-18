import React from 'react';
import Tarea from './Tarea';
import '../styles/ListaTareas.css';
import { useState } from 'react';
function ListaTareas(){
    const [tareas, setTareas]=useState([]);
    const [nuevaTarea,setNuevaTarea]= useState('');
    const agregarTarea=()=>{
        if(nuevaTarea.trim()==='') return;
        setTareas([...tareas,{id:Date.now(), texto: nuevaTarea}]);
        setNuevaTarea('');
    };
    const eliminarTarea = (id)=>{
        setTareas((tareasAnteriores) => tareasAnteriores.filter((tarea)=>tarea.id !==id));
    };
    return(
        <div className='container'>
            <div className='add-task'>
                <input className='input' type='text'value={nuevaTarea} 
                onChange={(e)=>setNuevaTarea(e.target.value)}/>
                <button className='boton' onClick={agregarTarea}>add</button>
            </div>
            <div className='container-task'>
                <ul>
                    {tareas.map((tarea)=>(
                        <Tarea
                        key={tarea.id}
                        task={tarea}
                        onDelete={eliminarTarea}
                        />
                    ))}        
                </ul>
            </div>
        </div>
    );
}
export default ListaTareas;