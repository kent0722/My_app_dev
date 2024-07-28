import React from "react";
import { createRoot } from "react-dom/client";
import LoginModal from "../components/LoginModal";
import SignModal from "../components/SignModal";
import DropDownMenu from "../components/DropMenu";



const loginContainer = document.getElementById("LoginModal");
if (loginContainer) {
  const loginRoot = createRoot(loginContainer);
  loginRoot.render(<LoginModal />);
}

const signContainer = document.getElementById("SignModal"); 
if (signContainer) {
  const signRoot = createRoot(signContainer);
  signRoot.render(<SignModal />);
}

const dropContainer = document.getElementById("DropMenu"); 
if (dropContainer) {
  const dropMenuRoot = createRoot(dropContainer);
  dropMenuRoot.render(<DropDownMenu />)
}