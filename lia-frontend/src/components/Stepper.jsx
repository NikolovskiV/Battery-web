import React from "react";

function Stepper(props) {
  return (
    <div className="stepper">
      <div
        className={`stepper-item 
        ${props.progress === "1" ? "active" : ""}
        ${parseInt(props.progress) > 1 ? "completed" : ""}
        `}
      >
        <div className="step-counter">{props.progress === "1" ? "1" : "✔"}</div>
        <div className="stepmark">Market</div>
      </div>
      <div
        className={`stepper-item 
        ${props.progress === "2" ? "active" : ""}
        ${parseInt(props.progress) > 2 ? "completed" : ""}
        `}
      >
        <div className="step-counter">
          {parseInt(props.progress) <= 2 ? "2" : "✔"}
        </div>
        <div className="stepmark">Application</div>
      </div>
      <div
        className={`stepper-item 
        ${props.progress === "3" ? "active" : ""}
        ${parseInt(props.progress) > 3 ? "completed" : ""}
        `}
      >
        <div className="step-counter">
          {parseInt(props.progress) <= 3 ? "3" : "✔"}
        </div>
        <div className="stepmark">Conditions</div>
      </div>
      <div
        className={`stepper-item 
        ${props.progress === "4" ? "active" : ""}
        ${parseInt(props.progress) > 4 ? "completed" : ""}
        `}
      >
        <div className="step-counter">
          {parseInt(props.progress) <= 4 ? "4" : "✔"}
        </div>
        <div className="stepmark">Service life</div>
      </div>
      <div
        className={`stepper-item 
        ${props.progress === "5" ? "active" : ""}
        ${parseInt(props.progress) > 5 ? "completed" : ""}
        `}
      >
        <div className="step-counter">
          {parseInt(props.progress) <= 5 ? "5" : "✔"}
        </div>
        <div className="stepmark">Power consumption</div>
      </div>
      <div
        className={`stepper-item 
        ${props.progress === "6" ? "active" : ""}
        ${parseInt(props.progress) > 6 ? "completed" : ""}
        `}
      >
        <div className="step-counter">
          {parseInt(props.progress) <= 6 ? "6" : "✔"}
        </div>
        <div className="stepmark">Selection</div>
      </div>
    </div>
  );
}

export default Stepper;
