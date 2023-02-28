import React from 'react';
import { useState } from 'react';
import Band from '../Band/Band';
import data from '../../metal.json';
import Like from '../Like/Like'
import './BandList.css';

function BandList() {
    const [query, setQuery] = useState('')
    const bands = data.filter((obj) => {
        // true if query is in title
        const inName = obj.band_name.toLowerCase().includes(query.toLowerCase())
        // return true if either is true
        return inName
    }).map(({ band_name, formed, origin, fans, split, style }) => {
        return (
            <div className='Band'>
            <Band
                band_name={band_name}
                formed={formed}
                origin={origin}
                fans={fans}
                split={split}
                style={style}
                key={band_name} 
            />
                {split === '-' ? <Like /> : ""} 
            </div>
        )
    })
    return (
    <div className="BandSearch">
        <form>
          <input
            value={query}
            placeholder="search bands"
            onChange={(evt) => setQuery(evt.target.value)}
          />
        </form>
      <div className="BandList">
        { bands.length > 0 ? bands : "No results match your search" } 
      </div>
    </div>
    )
}

export default BandList;