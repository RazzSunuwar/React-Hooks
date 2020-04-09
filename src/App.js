import React, { useReducer } from 'react';
import './App.css';

// import ComponentA from './components/ComponentA';
// import ComponentB from './components/ComponentB';
// import ComponentC from './components/ComponentC';
import DataFetchingOne from './components/DataFetchingOne';


// const initialState = 0;
// const reducer = (state, action) => {
//   switch(action) {
//     case 'increment':
//       return state + 1;
//     case 'decrement':
//       return state - 1;
//     case 'Reset':
//       return initialState
//     default:
//       return state
//   }
// }

// export const CountContext = React.createContext()

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)

  return (
    // <CountContext.Provider 
    // value={{ countState: count, countDispatch: dispatch}}>

    <div className="App">
      {/* Coutn - {count} */}
        {/* <ComponentA /> */}
        {/* <ComponentB /> */}
        {/* <ComponentC /> */}
        <DataFetchingOne />

    </div>
    // </CountContext.Provider>

  );
}

export default App;
