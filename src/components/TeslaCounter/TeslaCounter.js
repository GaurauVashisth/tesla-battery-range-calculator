import React from "react";
import "./TeslaCounter.css";
import PropTypes from "react";

const TeslaCounter = (props) => (
  <div className="tesls-counter">
    <p className="tesla-counter_title">{props.initValues.title}</p>
    <div className="tesla-counter_container cf">
      <div className="tesla-counter_item">
        <p className="tesla-counter_number">
          {props.currentValue}
          <span>{props.initValues.unit}</span>
        </p>
        <div className="tesla-counter_controls">
          <button
            onClick={(e) => console.log(e)}
            disabled={props.currentValue >= props.initValues.max}
          >
            B1
          </button>
          <button
            onClick={(e) => console.log(e)}
            disabled={props.currentValue <= props.initValues.max}
          >
            B2
          </button>
        </div>
      </div>
    </div>
  </div>
);
TeslaCounter.propTypes = {
  currentValue: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  initValues: PropTypes.object,
};
export default TeslaCounter;
