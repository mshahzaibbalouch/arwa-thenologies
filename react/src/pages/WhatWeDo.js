import React from "react";
import HeroSection from "../components/HeroSection";
import WhatSetsUsApart from "../components/WhatSetsUsApart.js";
import Rescue from "../components/Rescue";

const WhatWeDo = () => {
    
  return (
    <div>
      <HeroSection category={"home"} />
      <WhatSetsUsApart />
      <Rescue />
    </div>
  );
};

export default WhatWeDo;
