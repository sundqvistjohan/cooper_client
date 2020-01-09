import React from "react";
import "./progressbar.css";

const ProgressBar = ({ percentOfMax, distanceArray }) => {

  let progressBarRating = (
    <>
      <div
        id="below-average"
        style={{
          position: "absolute",
          width: `${(distanceArray[3] / distanceArray[0])*100}%`,
          textAlign: "right"
        }}
      >
        {distanceArray[3]}
        <br></br>
        Below Average
      </div>
      <div
        id="average"
        style={{
          position: "absolute",
          width: `${(distanceArray[2] / distanceArray[0])*100}%`,
          textAlign: "right"
        }}
      >
        {distanceArray[2]}
        <br></br>
        Average
      </div>
      <div
        id="above-average"
        style={{
          position: "absolute",
          width: `${(distanceArray[1] / distanceArray[0])*100}%`,
          textAlign: "right"
        }}
      >
        {distanceArray[1]}
        <br></br>
        Above Average
      </div>
      <div id="excellent" style={{ width: "100%", textAlign: "right" }}>
        {distanceArray[0]}
        <br></br>
        Excellent
      </div>
    </>
  );

  return (
    <div id="progress-bar">
      <div id="filler" style={{ width: `${percentOfMax}%` }}></div>
      {progressBarRating}
    </div>
  );
};

export default ProgressBar;
