import React from 'react';

// OtherDropMenuコンポーネント
export const OtherDropMenu = () => { 
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