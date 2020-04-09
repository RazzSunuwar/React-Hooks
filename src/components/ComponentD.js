import React, { useContext } from 'react';
import { CountContext } from '../App';

function ComponentD() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Content D- {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Incement</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('Reset')}>Reset</button> 
        </div>
    )
}

export default ComponentD;
