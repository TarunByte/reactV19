import { useContext } from "react";
import { BioContext } from ".";

export const Home = () => {
  const { myName, myAge } = useContext(BioContext);

  return (
    <h1>
      Hello Context API. My nam is {myName}. I am {myAge} yrs old
    </h1>
  );
};
