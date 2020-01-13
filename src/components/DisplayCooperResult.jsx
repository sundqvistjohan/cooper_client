import React from "react";
import cooperCalculator from "../modules/cooperCalculator";
import ProgressBar from "./ProgressBar";
import { saveData } from "../modules/performanceData";

const DisplayCooperResult = ({
  distance,
  gender,
  age,
  authenticated,
  entrySaved,
  entryHandler
}) => {
  const result = cooperCalculator(distance, gender, age);

  const propsPassed = distance && age ? true : false;
  let renderSaveEntry;

  if (authenticated && !entrySaved) {
    renderSaveEntry = (
      <button
        id="save-result"
        className="ui inverted large basic green button right floated bottom aligned"
        onClick={() => saveData(result[0], distance, entryHandler)}
      >
        Save result
      </button>
    );
  } else if (authenticated && entrySaved) {
    renderSaveEntry = <p id="response-message right" style={{ textAlign: "right"}}>Your result was saved</p>;
  }

  return (
    <>
      {propsPassed && (
        <>
          <div className="ui two column grid">
            <div className="column">
              <h3>Result</h3>
              <p id="cooper-message">
                Running {distance} meters in 12 minutes as a {age} year old{" "}
                {gender} is <strong>{result[0]}</strong>.
              </p>
            </div>
            <div className="column">
              {renderSaveEntry}
              </div>
          </div>
          <div>
            <ProgressBar percentOfMax={result[1]} distanceArray={result[2]} />
          </div>
        </>
      )}
    </>
  );
};

export default DisplayCooperResult;
