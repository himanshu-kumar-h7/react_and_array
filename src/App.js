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
import MainComponent from './GenericComponet/mainComponent';
import Combine from '/Users/himanshu/Documents/MyProjects/react_and_array/src/GenericComponet/Combine.jsx'
import { ThemeProvider } from './Context/Provider';
import ThemeSwitcher from './Context/Consumer';


function App() {

  const fields = [
    {label: "name", name: "name"},
    {label: "email", name: "email"}
  ]

  const handleSubmit =(formData) => {
    console.log('Form Submitted:', formData);
  }
  const validate =(formData) => {
const error ={}
if(!formData.name){
  error.name = "Name is required"
}
if(!formData.email){
  error.email = "email is required"
}
return error
  }
   
  return (
    <div className="App">
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

    {/* Genric Component */}

     
     {/* <MainComponent fields={fields} onSubmit={handleSubmit} validate={validate}/> */}

     {/* <Combine/> */}
     <ThemeProvider>
      <ThemeSwitcher/>
     </ThemeProvider>
    

    
    </div>
  );
}

export default App;
