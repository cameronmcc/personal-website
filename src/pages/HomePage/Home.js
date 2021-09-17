import React from "react";
import { useState } from "react";
import { homeObjOne, homeObjThree, homeObjFour } from "./Data";
import { InfoSection } from "../../components";
import About from "../About/About";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <InfoSection {...homeObjOne} />
      <About />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
