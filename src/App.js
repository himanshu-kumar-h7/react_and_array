import './App.css';
import React from 'react';
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


function App() {
  return (
    <div className="App">
      <Counter/>

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

    
    </div>
  );
}

export default App;
