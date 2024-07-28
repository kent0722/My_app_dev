import React, { useState } from 'react';

const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);   
  };

  return (
    <div>
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

export default DropDownMenu;