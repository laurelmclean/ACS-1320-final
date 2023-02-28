import data from '../../metal.json';
import React from 'react';
import './MetalMeta.css'

function MetalMeta() {
    let totalFans = 0;
    for (let i = 0; i < data.length; i++) {
        totalFans += data[i].fans;
    }
    const formattedTotalFans = (totalFans * 1000).toLocaleString();

    return (
        <div className='Metal-meta'>
            <h2>Metal Bands 🤘</h2>
            <h2>Bands: {data.length}</h2>
            <h2>Total Fans: {formattedTotalFans} </h2>
        </div>
    )
}

export default MetalMeta;