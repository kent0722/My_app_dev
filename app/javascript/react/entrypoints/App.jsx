import React from "react";
import { createRoot } from "react-dom/client";


const EditModal = () => {
  const testClick = () => {
    return alert('test');
  }

  return (
    <>
      <button onClick={testClick} className="block px-4 py-2 w-28 hover:bg-gray-600 rounded-lg">test</button>
    </>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const renderReactComponents = () => {

    const editModalContainer = document.getElementById('editModal');
    if (editModalContainer) {
      const editModalRoot = createRoot(editModalContainer);
      editModalRoot.render(<EditModal />);
    }

    const otherDropContainer = document.getElementById("OtherDrop");
    if (otherDropContainer) {
      const otherDropRoot = createRoot(otherDropContainer);
      otherDropRoot.render(<OtherDropMenu />);
    }
  };
  document.addEventListener('turbo:load', renderReactComponents);
});