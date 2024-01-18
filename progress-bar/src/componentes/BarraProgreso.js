import React from 'react';
import { useState } from 'react';
import '../styles/BarraProgreso.css';
function BarraProgreso() {
    const [progreso, setProgreso] = useState(0);
    const carga = (e) => {
        let value = parseInt(e.target.value, 10);
        value = isNaN(value) ? 0 : Math.min(Math.max(value, 0), 100);
        setProgreso(value);
    };
    return (
        <div className="container-bar">
            <div className="bar-charge" style={{ width: `${progreso}%` }}>
                <div className="bar-text">{progreso}%</div>
            </div>
            <div className='entrada'>
            <label>input Porcentage</label>
            <input className='num'
                type="number"
                value={progreso}
                onChange={carga}
                min="0"
                max="100"
            />
            </div>
        </div>
    );
};
export default BarraProgreso;