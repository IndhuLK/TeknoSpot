import React from "react";
import TrichyWebDesign from "../Services/TrichyWebDesign";
import TeknoSpotTimeline from "../Services/TeknoSpotTimeline";
import BusinessWebsite from "./BusinessWebsite";
import Specialized from "./Specialized";

const WebDesign = () => {
  return (
    <div>
      <TrichyWebDesign />
      <TeknoSpotTimeline />
      <BusinessWebsite />
      <Specialized />
    </div>
  );
};

export default WebDesign;
