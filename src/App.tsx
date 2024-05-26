import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Card 
          tags={["Interior"]}
          header="Top 5 Living Room Inspirations"
          description="Curated vibrants colors for your living, make it pop & calm in the same time."
        />
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
