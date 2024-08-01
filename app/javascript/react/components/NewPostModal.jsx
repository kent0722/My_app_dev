import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#NewPostModal');

export const NewPostModal = () => {
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
      maxWidth: '60%',
      width: '100%',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  }


  return(
    <div className="text-lg hover:opacity-40">  
      <div onClick={openModal} className="flex items-center w-56 ml-2"> 
        <a className="flex items-center w-full h-16 px-3 mt-2 hover:bg-gray-700 rounded-lg" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span className="ml-2 text-sm font-medium">投稿</span>
        </a>
      </div>
      <Modal isOpen={showModal} onRequestClose={closeModal} style={customStyles} contentLabel="NewPostModal">
        <div className="container bg-gray-100">
          <div className="w-full mx-auto px-4">
            <form action="/posts" method="post" className="max-w-md mx-auto">
            
            <div className="mx-auto text-center">
              <h1 className="border border-red-300 pt-8 text-2xl font-semibold">新規投稿</h1>
            </div>
            <div className="border border-red-300 left-0 top-0 right-">
              {/* Brand / Category */}
              <div class="grid md:grid-cols-2 mt-16">
                  <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="brand" id="brand" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500/70 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                    <label for="brand" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Brand:</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="category" id="category" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500/70 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="category" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category:</label>
                </div>
              </div>

              {/* Model */}
              <div class="relative z-0 w-full mb-5 group">
                  <input type="text" name="model" id="model" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500/70 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="model" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Model:</label>
              </div>
              
              {/* Year / Tags */}
              <div class="grid md:grid-cols-2">
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="year" id="year" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500/70 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="year" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Year:</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="tags" id="tags" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500/70 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="tags" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tags:</label>
                </div>
              </div>

              {/* Text */}
              <div class="relative z-0 w-full mb-5 group">
                  <textarea type="text" name="text" id="text" rows="10" class="block px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2  border-gray-500/70 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required></textarea>
                  <label for="text" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Text:</label>
              </div>
            </div>
            <div>
              <input type="file"></input>
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">投稿する</button>
            </div>
            </form>
          </div> 
        </div>
      </Modal>
    </div>
  );
}