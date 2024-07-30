import React, { useState } from 'react';

const AccountDropMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);   
  };

  return (
    <div className="bg-white">
      <button onClick={toggleMenu}>メニューを開く</button>
      {isOpen && (
        <ul>
          <li>オプション1</li>
          <li>オプション2</li>
          <li>オプション3</li>
        </ul>
      )}
    </div>
  );
}

export default AccountDropMenu;

