import React from "react";
import TrichyWebDesign from "../Services/TrichyWebDesign";
import TeknoSpotTimeline from "../Services/TeknoSpotTimeline";
import BusinessWebsite from "./BusinessWebsite";
import Specialized from "./Specialized";
import FaqAccordion from "./FaqAccordion";

const WebDesign = () => {
  return (
    <div>
      <TrichyWebDesign />
      <TeknoSpotTimeline />
      <BusinessWebsite />
      <Specialized />
      <FaqAccordion />
    </div>
  );
};

export default WebDesign;
