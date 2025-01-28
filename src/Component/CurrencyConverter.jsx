import React, { useEffect, useState } from "react";

const CurrencyConverter = () => {
  const [data, setData] = useState("");
  const [convertedValue, setConvertedValue] = useState(null);
  const handleChange = (event) => {
    setData(event.target.value)
  }
  const handleConvert = () =>{
    const numericValue = parseFloat(data); // Convert to number
    if (!isNaN(numericValue)) {
      setConvertedValue(numericValue + 120); // Perform addition
    } else {
      setConvertedValue("Invalid input. Please enter a valid number.");
    }


  }
  

  return (
    <div>
      <p>Input an amount to convert your Currency</p>
      <input
        type="text"
        value={data}
        onChange={handleChange}
        placeholder="Enter amount"
      />
      <button onClick={handleConvert}>Convert Currency</button>
      <p>Your Converted amount is {convertedValue}</p>
    </div>
  );
};

export default CurrencyConverter;
