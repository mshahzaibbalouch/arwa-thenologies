import React from "react";
import HeroSection from "../components/HeroSection";
import CoreTeam from "../components/CoreTeam";
import Rescue from "../components/Rescue";

const Team = () => {
  return (
    <div>
      <HeroSection category={"home"} />
      <CoreTeam />
      <Rescue />
    </div>
  );
};

export default Team;
