import { useContext } from "react";
import { BioContext } from ".";

export const About = () => {
  const { myName, myAge } = useContext(BioContext);

  return (
    <h1>
      Hello Context API (About). My nam is {myName}. I am {myAge} yrs old
    </h1>
  );
};
