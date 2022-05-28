import React from "react";

function ProgressCounter({ width, step }) {
  const totalSteps = [1, 2, 3, 4];
  return (
    <div className="stepsCountContainer">
      <div
        style={{ width: width + "%" }}
        className="progress"
        id="progress"
      ></div>
      {totalSteps.map((val,index) => {
        return val <= step ? (
          <div key={index} className="selectedStep stepsCount">{val}</div>
        ) : (
          <div key={index} className="stepsCount">{val}</div>
        );
      })}
    </div>
  );
}

export default ProgressCounter;
