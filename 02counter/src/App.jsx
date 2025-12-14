/*
 useState is a React Hook that allows functional components to use state (data that can change over time).
When the state changes, React automatically updates (re-renders) the UI. 
*/

// Import the useState hook from React
import { useState } from "react";

// Import CSS file for styling
import "./App.css";

// Main App component
function App() {
  // Create a state variable called counter
  // counter → current value
  // setCounter → function to update the counter
  // Initial value is 15
  const [counter, setCounter] = useState(15);

  // This function runs when the "Add value" button is clicked
  const addValue = () => {
    // Log a message in the console (for debugging)
    console.log("clicked", Math.random());

    // Increase the counter value by 1
    setCounter(counter + 1);
  };

  // This function runs when the "Remove value" button is clicked
  const removeValue = () => {
    // Decrease the counter value by 1
    setCounter(counter - 1);
  };

  // JSX returned by the component (UI)
  return (
    <>
      {/* Main heading */}
      <h1>Chai aur React</h1>

      {/* Display current counter value */}
      <h2>Counter Value: {counter}</h2>

      {/* This button is responsible for counter increase */}
      <button onClick={addValue}>Add value {counter}</button>

      <br />

      {/* This button is responsible for counter decrease */}
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  );
}

// Export the App component so it can be used in other files
export default App;
