import React from "react";
import "./App.css";
import Card from "./components/card/Card";
import cardImage from "./assets/spacejoy-YqFz7UMm8qE-unsplash.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Card
          img={cardImage}
          tags={["Interior"]}
          header="Top 5 Living Room Inspirations"
          description="Curated vibrants colors for your living, make it pop & calm in the same time."
        />
      </div>
    </div>
  );
}

export default App;
