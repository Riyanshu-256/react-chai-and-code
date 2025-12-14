function customRender(reactElement, container) {
  // Step 1: Create a real HTML element using the type
  // Example: if type is "a", it creates <a></a>
  const domElement = document.createElement(reactElement.type);

  // Step 2: Add text/content inside the element
  // children contains the text that will appear between opening and closing tags
  domElement.innerHTML = reactElement.children;

  // Step 3: Add all attributes to the element
  // props is an object like { href: "...", target: "..." }
  // This loop sets each key-value as an HTML attribute
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  // Step 4: Finally attach the created element to the container
  // This makes it visible on the webpage
  container.appendChild(domElement);
}

// This is a React-like object (React internally does something similar)
// It describes WHAT element to create, not how to create it
const reactElement = {
  type: "a", // HTML tag to create (<a>)
  props: {
    href: "https://google.com", // link address
    target: "_blank", // open link in new tab
  },
  children: "Click me to visit google", // text inside <a> tag
};

// Select the root container from HTML
const mainContainer = document.querySelector("#root");

// This line calls the customRender function
// reactElement: tells WHAT to create (tag, attributes, text)
// mainContainer: tells WHERE to add it (inside #root div)
// Result: an <a> tag is created and shown inside the root container

customRender(reactElement, mainContainer);
