import { React, useState } from 'react'
import './Like.css';
 
function Like() {
    const [count, setCount] = useState(0);

    let increase = () => {
        setCount(count + 1)}

    let decrease = () => {
        setCount(count - 1)}

    return (
        <div className="counter">
            <button className="counter-btn" onClick={decrease}>👎 </button>
            <p className='counter-text'>{count}</p>
            <button className="counter-btn" onClick={increase}>👍</button>
        </div>
    )
    }

export default Like;