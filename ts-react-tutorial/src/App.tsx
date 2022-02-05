import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greetings from "./Greetings";

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };

  return (
    <div className="App">
      <Greetings name="MinMo" onClick={onClick} />
    </div>
  );
};

export default App;
