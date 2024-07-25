import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#SignUpModal");

const SignupModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      border: 'none',
      borderRadius: '0.75rem',
      maxWidth: '33.333333%',
      width: '100%',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    }
  };


  return (
    <div className="text-base font-light hover:opacity-40">
      <button onClick={openModal}>Log In</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} ontentLabel="Login Modalc">
      <h1> Hello React!</h1>
      </Modal>
    </div>
  );
};

export default SignupModal;