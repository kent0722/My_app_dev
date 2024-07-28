import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#SignModal");

const SignModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  

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
    <div className="p-1 px-3 mx-12  text-black bg-white transition hover:opacity-40 text-xs font-bold rounded-sm">
      <button onClick={openModal}>Sign Up</button>
      <Modal isOpen={showModal} onRequestClose={closeModal} style={customStyles} contentLabel="SignModal">
      <div className="container mx-auto text-gray-600">
          <div className="bg-gray-100 mx-auto">
            <div className="flex flex-col items-center space-y-4">
              <h1 className="pt-8 text-gray-900 text-2xl font-semibold">ユーザー登録</h1>
              <form action="/users" method="post">
                <label htmlFor="name">ユーザー名</label>
                <input
                  type="text"
                  id="name"
                  name="user[name]"
                  className="block w-72 rounded-md mb-2"
                  placeholder="ユーザーネーム"
                />
                <label htmlFor="email">メールアドレス</label>
                <input
                  type="email"
                  id="email"
                  name="user[email]"
                  className="block w-72 rounded-md mb-2"
                  placeholder="メール"
                />
                <label htmlFor="password">パスワード</label>
                <input
                  type="password"
                  id="password"
                  name="user[password]" 
                  className="block w-72 rounded-md mb-2"
                  placeholder="パスワード"
                />
                <label htmlFor="password_confirmation">パスワード(確認用)</label>
                <input
                  type="password"
                  id="password_confirmation"
                  name="user[password_confirmation]"
                  className="block w-72 rounded-md mb-6"
                  placeholder="パスワード(確認用)"
                />
                <button type="submit" className="w-full h-12 mb-8 text-white bg-indigo-500 hober:bg-indigo-600 rounded-3xl">登録する</button>
                <div className="mb-8 border-b-2 border-gray-500/30"></div>
                <button type="button" className="w-full h-12 mb-8 bg-white border border-gray-500/70 hover:bg-sky-50 rounded-3xl">googleで登録する</button>
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

export default SignModal;