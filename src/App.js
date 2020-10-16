import React from "react";
// import here Radium from radium library


function App() {
  // create a variable styles and create a stylesheet for the following classes and apply the properties:
  // - list: display: flex; list-style-type: none; (tip: don't forget to camelCase the property!)
  // - title: color: #39424e;

  return (
    // add the correct attribute to your ul and h1 tags, and assign the correct values
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </nav>
      <h1>Radium!</h1>
      <p>This is an example of Radium</p>
    </div>
  );
}

// don't forget to wrap your component with the Radium function!
export default App;
