// const initialState = {
//     count: 0
// }

// const reducersCounter = (state = initialState, action) => {
//     switch(action.type) {
//         case 'INCREMENT':
//             return{
//                 ...state, 
//                 count: state.count + 1
//             };
//             case 'DECREMENT':
//                 return{
//                     ...state,
//                     count: state.count - 1
//                 }
//                 default:
//                     return state

//     }

// }

// const store = createStore(reducersCounter)


// store.dispatch({type: 'INCREMENT'})
// store.dispatch({type: 'DECREMENT'})

// console.log(state.getState())