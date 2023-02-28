import data from '../../metal.json';
import React from 'react';
import './MetalMeta.css'

function MetalMeta() {
    return (
        <div className='Metal-meta'>
            <h2>Metal Bands 🤘</h2>
            <h2>Bands: {data.length}</h2>
        </div>
    )
}

export default MetalMeta;