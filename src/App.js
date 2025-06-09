import './App.css';
import React, { useEffect, useMemo, useState } from 'react';
import Counter from './Component/Counter';
import CurrencyConverter from './Component/CurrencyConverter';
import Stopwatch from './Component/Stopwatch';
import Memoize from './Component/Memoize';
import Debounce from './Component/Debounce';
import DomAccess from './Component/DomAccess';
import ButtonClickCountUsingUseRef from './Exercise/ButtonClickCountUsingUseRef'
import ButtonComponent from './ModalImplementation/ButtonComponent'
import Credentials from './Login Page/Credentials';
import Box from './Component/childrenProps';
import Todo from '../src/Todo/TodoList'
import TabbedComponent from './Component/TabbedComponent';
import FetchPosts from './Test/FetchPosts'
import MyComponent from './Test/MyComponent';
import Child from './Infosys/child';



function App() {

const[age, setAge] = useState("Loading...")

  const obj = useMemo(() => ({
    name: "himanshu",
    age: 25
  }),[])
 console.log("hello")
  

  return (
    <div className="App">
      
      <Child value ={obj} setter= {setAge}/>
      <p>Current Age for person is {age} </p>
      {/* <Counter/> */}

      {/* <CurrencyConverter/> */}

      {/* <Stopwatch/> */}

      {/* <Memoize name= "Himanshu" aadhar={34225}/> */}

      {/* <Debounce/> */}

      {/* <DomAccess/> */}

      {/* <ButtonClickCountUsingUseRef/> */}

      {/* <ButtonComponent/> */}

      {/* <Credentials/> */}

      {/* <Box>
      <h1>Hello, World!</h1>
      <p>This is some content inside the Box component.</p>
    </Box> */}
{/* <Todo/> */}
{/* <TabbedComponent/> */}
{/* <FetchPosts/> */}
{/* <MyComponent/> */}
    
    </div>
  );
}

export default App;
