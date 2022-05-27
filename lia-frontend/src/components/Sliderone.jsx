import React from "react";
import { useState, useRef } from "react";
import $ from "jquery";
import "./Sliderone.scss";

function Sliderone(props) {
  const currentSliderRef = useRef();
  const [currentValue, setCurrentValue] = useState(props.value);
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(currentSliderRef.current.value);
  };
  const onChangeHandler = (e) => {
    setCurrentValue(e.target.value);
  };

  let sheet = document.createElement("style"),
    $rangeInput = $(".range input"),
    prefs = ["webkit-slider-runnable-track", "moz-range-track", "ms-track"];

  document.body.appendChild(sheet);

  let getTrackStyle = function (el) {
    let curVal = el.value,
      val = (curVal - 1) * 11,
      style = "";

    // Set active label
    $(".range-labels li").removeClass("active selected");

    let curLabel = $(".range-labels").find("li:nth-child(" + curVal + ")");

    curLabel.addClass("active selected");
    curLabel.prevAll().addClass("selected");

    // Change background gradient
    for (let i = 0; i < prefs.length; i++) {
      style +=
        ".range {background: linear-gradient(to right, 0%, " +
        val +
        "%, #fff " +
        val +
        "%, #fff 100%)}";
      style +=
        ".range input::-" +
        prefs[i] +
        "{background: linear-gradient(to right, 0%,  " +
        val +
        "%, #b2b2b2 " +
        val +
        "%, #b2b2b2 100%)}";
    }

    return style;
  };

  $rangeInput.on("input", function () {
    sheet.textContent = getTrackStyle(this);
  });

  // Change input value on label click
  $(".range-labels li").on("click", function () {
    let index = $(this).index();

    $rangeInput.val(index + 1).trigger("input");
  });

  return (
    <>
      <div className="stepper-one">
        <form onSubmit={submitHandler}>
          <div className="range">
            <input
              onChange={onChangeHandler}
              type="range"
              min={props.min}
              step={props.step}
              max={props.max}
              value={currentValue}
              ref={currentSliderRef}
            />
          </div>
          <ul className="range-labels">
            <li className="active selected">1A</li>
            <li>2A</li>
            <li>3A</li>
            <li>4A</li>
            <li>5A</li>
            <li>6A</li>
            <li>7A</li>
            <li>8A</li>
            <li>9A</li>
            <li>10A</li>
          </ul>
          <button className="big-button-two" type="submit">
            Next&rarr;
          </button>
          <div className="checkbox">
            <div className="checkbox-one">
              <div className="input-five">
                <input id="c1" type="checkbox" />
                <label id="c2" for="c1">
                  I am unsure of the required power consumption
                </label>
              </div>
              <div>
                <p>Explanation: How much power will your device require</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Sliderone;
