import { useState } from "react";
import { Greeting } from "./Greeting";

export const GreetingContainer = () => {
  const [name, setName] = useState("");

  const inputName = (event) => {
    setName(event.target.value);
  };

  const greet = (event) => {
    event.preventDefault();
    alert(`Hola ${name}`);
    console.log(name);
  };
  return <Greeting name={name} greet={greet} inputName={inputName} />;
};
