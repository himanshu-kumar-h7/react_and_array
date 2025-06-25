import React, { useReducer, useState } from "react";

 const initialState = {count: 0}
    
    const reducer = (state, action) => {
        switch(action.type){
            case 'increment':
                return {count: state.count + 1};
                case 'decrement':
                return {count: state.count - 1};
                case 'reset':
                return {count: 0};
                default:
                    return state
        }
    }

    const CounterReducer = () => {
   
    const[state, dispatch] = useReducer(reducer, initialState)

return (
    <div>
<h1>This is Counter using USEREDUCER</h1>
<button onClick={() => dispatch({type: 'increment'})}>+</button>
<button onClick={() => dispatch({type: 'reset'})}>reset</button>
<button onClick={() => dispatch({type: 'decrement'})}>-</button>

<p>{state.count}</p>
</div>
);

}

export default CounterReducer