import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Building and Deploying a React Page</h1>
        <p>
          This page demonstrates how to install React, build a webpage, and deploy it on Vercel.
        </p>
        <h2>Steps to Create and Deploy</h2>
        <ol>
          <li>Install Node.js and create a React app using <code>npx create-react-app my-app</code>.</li>
          <li>Modify the <code>App.js</code> and <code>App.css</code> files to build your page.</li>
          <li>Deploy the app on Vercel by linking the repository or uploading the project folder.</li>
        </ol>
        <h2>Challenges Faced</h2>
        <p>
          - Managing state and structure in larger apps. <br />
          - Solved by breaking the page into smaller components.
        </p>
      </header>
    </div>
  );
}

export default App;
