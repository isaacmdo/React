import React from 'react'

const ButtonModal = ({ setModal }) => {
  return (
    <button onClick={() => setModal(true)}>{texto}</button>
  ) 
}

export default ButtonModal;
