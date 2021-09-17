import React from "react";
import { useState } from "react";
import { homeObjOne } from "./Data";
import { InfoSection } from "../../components";
import About from "../About/About";
import Technologies from "../Technologies/Technologies";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <InfoSection {...homeObjOne} />
      <About />
      <Technologies />
    </>
  );
};

export default Home;
