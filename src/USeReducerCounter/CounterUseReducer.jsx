// import React, { useReducer, useState } from "react";

//  const initialState = {count: 0}
    
//     const reducer = (state, action) => {
//         switch(action.type){
//             case 'increment':
//                 return {count: state.count + 1};
//                 case 'decrement':
//                 return {count: state.count - 1};
//                 case 'reset':
//                 return {count: 0};
//                 default:
//                     return state
//         }
//     }

//     const CounterReducer = () => {
   
//     const[state, dispatch] = useReducer(reducer, initialState)

// return (
//     <div>
// <h1>This is Counter using USEREDUCER</h1>
// <button onClick={() => dispatch({type: 'increment'})}>+</button>
// <button onClick={() => dispatch({type: 'reset'})}>reset</button>
// <button onClick={() => dispatch({type: 'decrement'})}>-</button>

// <p>{state.count}</p>
// </div>
// );

// }

// export default CounterReducer

import React, { useReducer } from "react";

let initialState ={
    count: 0
   }

   const reducer = (state, action) => {
   switch(action.type){
    case 'Increment':
        return { count: state.count + 1}
        case 'Decrement':
            return {count: state.count - 1}
            case 'Reset':
                return {count: 0}
                default:
                    return state
   }
   }

const CounterReducer = () => {
    const[state, dispatch] = useReducer(reducer, initialState)

   
    return(
        <div>
            <p>{state.count}</p>
            <button onClick={() => dispatch({type: 'Increment'})}>Increase</button>
            <button onClick={() => {dispatch({type: 'Reset'})}}>Reset</button>
            <button onClick={() => {dispatch({type: 'Decrement'})}}>Decrease</button>
        </div>
    )
}

export default CounterReducer