import React from "react";
import { createRoot } from "react-dom/client";

// AccountUserAiconコンポーネント
const AccountUserAicon = () => {
  return(
    <div className="p-2 hover:bg-gray-700 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
      </svg>
    </div>
  );
};

// AccountDropMenuコンポーネント
const AccountDropMenu = () => {
  
  return (
    <div className="mx-6 p-2 hover:bg-gray-700 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </div>
  );
};

// OtherDropMenuコンポーネント
const OtherDropMenu = () => { 
  return (
    <div class="flex items-center w-56 ml-2">
      <div class="flex items-center w-full h-16 px-3 mt-2 hover:bg-gray-700 rounded-lg" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
        </svg>
        <span class="ml-2 text-sm font-medium">その他</span>
      </div>
    </div>  
  );
};

// DOM要素の取得とレンダリング
document.addEventListener('DOMContentLoaded', () => {
  const renderReactComponents = () => {
    const userAiconContainer = document.getElementById("UserAicon");
    if (userAiconContainer) {
      const userAiconRoot = createRoot(userAiconContainer);
      userAiconRoot.render(<AccountUserAicon />);
    }

    const accountDropContainer = document.getElementById("AccountDrop");
    if (accountDropContainer) {
      const accountDropRoot = createRoot(accountDropContainer);
      accountDropRoot.render(<AccountDropMenu />);
    }

    const otherDropContainer = document.getElementById("OtherDrop");
    if (otherDropContainer) {
      const otherDropRoot = createRoot(otherDropContainer);
      otherDropRoot.render(<OtherDropMenu />);
    }
  };
  document.addEventListener('turbo:load', renderReactComponents);
});