// import React from "react";
// import { useState } from "react";
// import Form from "./form";
// import Button from "./Button";

// const MainComponent = ({fields, onSubmit, validate}) => {
//     const[form, setFormDate] = useState(
//         fields.reduce((acc, field) => {
//  acc[field.name] = ''
//  return acc;
//         },{})
//     )

//     const [formErrors, setFormErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         setIsSubmitting(true)
//         const errors = validate{formSa}

//     }
//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input></input>
//                 <button></button>
//             </form>

//         </div>
//     )
// }

// export default MainComponent