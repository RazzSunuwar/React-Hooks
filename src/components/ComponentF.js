import React, { useContext } from 'react';
import { CountContext } from '../../src/App';

function ComponentF() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Comonent F - {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Incement</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('Reset')}>Reset</button> 
        </div>
    )
}

export default ComponentF;
