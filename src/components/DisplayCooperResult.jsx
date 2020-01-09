import React from "react";
import cooperCalculator from "../modules/cooperCalculator";
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
      className="ui green button"
      onClick={() => saveData(result, entryHandler)}
      >
        Save entry
      </button>
    )
  } else if (authenticated && entrySaved) {
    renderSaveEntry = <p id="response-message">Your entry was saved</p>
  }

  return (
    <>
      {propsPassed && (
        <>
          <p id="cooper-message">
            {age} y/o {gender} running {distance} meters.
          </p>
          <p id="cooper-result">Result: {result}</p>
          {renderSaveEntry}
        </>
      )}
    </>
  )
};

export default DisplayCooperResult;