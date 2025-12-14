import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Simple custom component
function MyApp() {
  return (
    <div>
      <h1>Custom app</h1>
    </div>
  );
}

// JSX element (most common way)
// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     Visit Google
//   </a>
// );

// React.createElement version (what JSX converts into internally)
// const reactElement = React.createElement(
//   "a",
//   { href: "https://google.com", target: "_blank" },
//   "Click me to visit Google"
// );

// Render the App component (recommended)
// You can replace <App /> with <MyApp /> or anotherElement or reactElement
ReactDOM.createRoot(document.getElementById("root")).render(
  <MyApp />
  // anotherElement
  // reactElement
);
