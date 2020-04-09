import React, { useContext } from 'react';
import { CountContext } from '../App';

function ComponentA() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Comonent A - {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Incement</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('Reset')}>Reset</button> 
        </div>
    )
}

export default ComponentA;
