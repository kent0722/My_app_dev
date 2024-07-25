import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#LoginModal");

const LoginModal = () => {
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
      maxWidth: '32%',
      width: '100%',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    }
  };


  return (
    <div className="text-base font-light hover:opacity-40">
      <button onClick={openModal}>Log In</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Login Modalc">
        <div className="container mx-auto text-gray-600">
          <div className="bg-gray-100 mx-auto">
            <div className="flex flex-col items-center space-y-4">
              <h1 className="pt-8 text-gray-900 text-2xl font-semibold">ログイン</h1>
              <form action="/login" method="post">
                <label htmlFor="email">メール</label>
                <input
                  type="email"
                  id="email"
                  className="block w-72 rounded-md mb-2"
                  placeholder="メール"
                />
                <label htmlFor="Password">パスワード</label>
                <input
                  type="Password"
                  id="Password"
                  className="block w-72 rounded-md mb-6"
                  placeholder="パスワード"
                />
                <button type="submit" className="w-full h-12 mb-8 text-white bg-indigo-500 hober:bg-indigo-600 rounded-3xl">ログイン</button>
                <div className="mb-8 border-b-2 border-gray-500/30"></div>
                <button type="button" className="w-full h-12 mb-8 bg-white border border-gray-500/70 hover:bg-sky-50 rounded-3xl">googleでログインする</button>
                <p className="mb-8">
                  初めて利用する場合：
                  <a href="/users/new" className="text-indigo-500 hover:text-indigo-600">
                    ユーザー登録
                  </a>
                </p>
              </form>
            </div> 
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoginModal;