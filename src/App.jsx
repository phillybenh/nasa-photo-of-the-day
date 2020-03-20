import React from "react";
import APOD from './components/APOD';
import styled from "styled-components";
import "./index.scss";

const AppContainer = styled.div`
text-align: center;
color: lightgrey;
`


function App() {
  return (
    <AppContainer>
      <h1>Take a look at the NASA Astronomy Picture of the Day</h1>
      <APOD />
    </AppContainer>
  );
}

export default App;



// https://api.nasa.gov/planetary/apod?api_key=Fxx4K3wvOl3k3rZ7xqXhJk3bCwLtfxbMXnbAbhLA