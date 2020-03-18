import React from "react";
import APOD from './components/APOD';
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Take a look at the NASA Astronomy Picture of the Day</h1>
      <APOD />
    </div>
  );
}

export default App;



// https://api.nasa.gov/planetary/apod?api_key=Fxx4K3wvOl3k3rZ7xqXhJk3bCwLtfxbMXnbAbhLA