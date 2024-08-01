import React from "react";
import { createRoot } from "react-dom/client";
import { AccountDropMenu } from "../components/AccountDropMenu";
import { AccountUserAicon } from "../components/AccountUserAicon";
import { OtherDropMenu } from "../components/OtherDropMenu";





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