import "./App.css";
import ButtonAppBar from "./components/ButtonAppBar";
import React from "react";
import "../src/fonts/clod.TTF";
import GroupExample from './components/GroupExample'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <ButtonAppBar />
      <GroupExample />
      
    </div>
  );
}

export default App;
