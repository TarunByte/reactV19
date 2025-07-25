import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Profile from "./components/Profile.jsx";
import { App } from "./App.jsx";
// import { Practices } from "./Practices.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Practices /> */}
    {/* <Profile /> */}
  </StrictMode>
);
