import "./App.css";
import ButtonAppBar from "./components/ButtonAppBar";
import React from "react";
import "../src/fonts/clod.TTF";
import Cards from "./components/Cards";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <ButtonAppBar />
      <Cards />
    </div>
  );
}

export default App;
