import React, { useState, useEffect, useRef } from 'react';


export const AccountDropMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);   
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef}>
      <div className="mx-6 p-3 hover:bg-gray-700 rounded-full cursor-pointer" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      {isOpen && (
        <ul className="absolute text-center bg-[#353539] rounded-lg">
          <li className="px-4 py-2 hover:bg-gray-600 rounded-md">プロフィール</li>
          <li className="px-4 py-2 hover:bg-gray-600 rounded-md">
            <button type="button">Log out</button>
          </li>
        </ul>
      )}
    </div>
  );
};



// const AccountDropMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);   
//   };

//   return (
//     <div className="relative">
//       <div className="mx-6 p-2 hover:bg-gray-700 rounded-full cursor-pointer" onClick={toggleMenu}>
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
//           <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
//         </svg>
//       </div>
//       {isOpen && (
//         <ul className="absolute -right-6 top-full mt-2 w-32 z-10 bg-[#353539] rounded-lg">
//           <li className="block px-4 py-2 hover:bg-gray-600 rounded-lg">プロフィール</li>
//           <li className="block px-4 py-2 hover:bg-gray-600 rounded-lg">ログアウト</li>
//         </ul>
//       )}
//     </div>
//   );
// };




// ログアウト実装版
// const AccountDropMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef(null);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);   
//   };

//   const handleLogout = async () => {
//     try {
//       const response = await fetch('/logout', {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//           'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
//         }
//       });
//       if (response.ok) {
//         window.location.href = '/'; // ログアウト後にリダイレクト
//       } else {
//         console.error('Logout failed');
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div ref={menuRef}>
//       <div className="mx-6 p-3 hover:bg-gray-700 rounded-full cursor-pointer" onClick={toggleMenu}>
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
//           <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
//         </svg>
//       </div>
//       {isOpen && (
//         <ul className="absolute text-center bg-[#353539] rounded-lg">
//           <li className="px-4 py-2 hover:bg-gray-600 rounded-md">プロフィール</li>
//           <li className="px-4 py-2 hover:bg-gray-600 rounded-md">
//             <button type="button" onClick={handleLogout}>Log out</button>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };