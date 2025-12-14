function customRender(reactElement, container) {
  // Create HTML element (like <a>)
  const domElement = document.createElement(reactElement.type);

  // Add text inside element
  domElement.innerHTML = reactElement.children;

  // Add all attributes (href, target, etc.)
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  // Add element to the page
  container.appendChild(domElement);
}

// React-like object
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

// Get root div
const mainContainer = document.querySelector("#root");

// Render on screen
customRender(reactElement, mainContainer);
