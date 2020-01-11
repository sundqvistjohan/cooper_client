import React from "react";
import "./progressbar.css";

const ProgressBar = ({ percentOfMax, distanceArray }) => {
  let progressBarRating = (
    <>
      <div
        id="rating"
        style={{ width: `${(distanceArray[3] / distanceArray[0]) * 100}%` }}
      >
        {distanceArray[3]} m
        <br></br>
        Below Average
      </div>
      <div
        id="rating"
        style={{ width: `${(distanceArray[2] / distanceArray[0]) * 100}%` }}
      >
        {distanceArray[2]} m
        <br></br>
        Average
      </div>
      <div
        id="rating"
        style={{ width: `${(distanceArray[1] / distanceArray[0]) * 100}%` }}
      >
        {distanceArray[1]} m
        <br></br>
        Above Average
      </div>
      <div id="rating" style={{ width: "100%" }}>
        {distanceArray[0]} m
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
