import React from "react";
import { createRoot } from "react-dom/client";
import LoginModal from "../components/LoginModal";


const container = document.getElementById("LoginModal");
if (container) {
  const root = createRoot(container);
  root.render(<LoginModal />);
}

