import "./App.css";
import React from "react";
import PetitionCard from "./components/petition-card";

function App() {
  return (
    <React.Fragment>
      <h1>Petition Management </h1>
      <PetitionCard></PetitionCard>
    </React.Fragment>
  );
}

export default App;
