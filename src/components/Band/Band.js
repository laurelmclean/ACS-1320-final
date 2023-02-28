import React from 'react';
import './Band.css';

function Band(props) {
    const { band_name, formed, origin, fans, split, style } = props
    const styles = style.split(',');
    const styleItems = styles.map(style => <li key={style}>{style}</li>);

    return (
        <div>
            <h1>{band_name}</h1>
            <p>{origin}</p>
            <p><strong>Fans:</strong> {(fans * 1000).toLocaleString('en')}</p>
            <p><strong>Formed:</strong> {formed}</p>
            <p><strong>Split:</strong> {split}</p>
            <p><strong>Style:</strong></p>
            <ul>{styleItems}</ul>
        </div>
    )
}

export default Band;