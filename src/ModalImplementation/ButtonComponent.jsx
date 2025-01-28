import React, { useState } from "react";
import Modal from "./Modal";

const ButtonComponent = () =>{
    
     const [showModal, setShowModal] = useState(false)

     const handleClick = () => {
        setShowModal(true)
     }

     const handleCloseModal = () => {
        setShowModal(false);
      };

    return(
        <div>
         <button onClick={handleClick}>Click to win Something</button>
         {showModal && (
            <Modal onClose={handleCloseModal}>
            <p>You Won!</p>
          </Modal>
         )}
        </div>
    )
}

export default ButtonComponent