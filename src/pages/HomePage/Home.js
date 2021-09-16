import React from "react";
import { homeObjOne, homeObjThree, homeObjFour } from "./Data";
import { InfoSection } from "../../components";
import About from "../About/About";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <About />
      {/* <Projects  /> */}
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
