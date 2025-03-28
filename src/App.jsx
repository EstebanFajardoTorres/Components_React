import { useState } from "react";
import "./App.css";
import Lista from "./Lista";
import Estado from "./Estado";
import String from "./String";
import Booleano from "./Booleano";
import Objeto from "./Objeto";
import Clase from "./Clase";

function App() {
  return (
    <>
      <Lista />
      <Estado />
      <String />
      <Booleano />
      <Objeto />
      <Clase />
    </>
  );
}

export default App;
