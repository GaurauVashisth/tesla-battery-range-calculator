import React from "react";
import "./TeslaBattery.css";
import TeslaNotice from "../components/TeslaNotice/TeslaNotice";
import TeslaCar from "../components/TeslaCar/TeslaCar.js";
import TeslaStats from "../components/TeslaStats/TeslaStats.js";
import { getModelData } from "../services/BatteryService.js";
import TeslaCounter from "../components/TeslaCounter/TeslaCounter.js";

class TeslaBattery extends React.Component {
  constructor(props) {
    super(props);
    this.calculateStats = this.calculateStats.bind(this);
    this.statsUpdate = this.statsUpdate.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.updateCounterState = this.updateCounterState.bind(this);
    this.state = {
      carstats: [],
      config: {
        speed: 55,
        temprature: 20,
        climate: true,
        wheels: 21,
      },
    };
  }

  increment(e, title) {
    e.preventDefault();
    let currentValue, maxValue, step;
    const { speed, temperature } = this.props.counterDefaultVal;
    if (title === "Speed") {
      currentValue = this.state.config.speed;
      maxValue = speed.max;
      step = speed.step;
    } else {
      currentValue = this.state.config.temperature;
      maxValue = temperature.max;
      step = temperature.step;
    }
    if (currentValue < maxValue) {
      const newValue = currentValue + step;
      this.updateCounterState(title, newValue);
    }
  }
  decrement(e, title) {
    e.preventDefault();
    let currentValue, minValue, step;
    const { speed, temperature } = this.props.counterDefaultVal;
    if (title === "Speed") {
      currentValue = this.state.config.speed;
      minValue = speed.min;
      step = speed.step;
    } else {
      currentValue = this.state.config.temperature;
      minValue = temperature.min;
      step = temperature.step;
    }
    if (currentValue > minValue) {
      const newValue = currentValue - step;
      this.updateCounterState(title, newValue);
    }
  }
  updateCounterState(title, newValue) {
    const config = { ...this.state.config };
    // update config state with new value
    title === "Speed"
      ? (config["speed"] = newValue)
      : (config["temperature"] = newValue);
    // update our state
    this.setState({ config });
  }
  calculateStats(models, value) {
    const dataModels = getModelData();
    return models.map((model) => {
      const { speed, temprature, climate, wheels } = value;
      const miles =
        dataModels[model][wheels][climate ? "on" : "off"].speed[speed][
          temprature
        ];
      return {
        model,
        miles,
      };
    });
  }
  statsUpdate() {
    const carModels = ["60", "60D", "75", "75D", "90D", "P100D"];
    this.setState({
      carstats: this.calculateStats(carModels, this.state.config),
    });
  }
  componentDidMount() {
    this.statsUpdate();
  }
  render() {
    const { config, carstats } = this.state;
    console.log("Car Stats", carstats);
    return (
      <form className="tesla-battery">
        <h1>Range Per Charge</h1>
        <TeslaCar wheelsze={config.wheels} />
        <TeslaStats carstats={carstats} />
        <div className="tesla-controls cf">
          <TeslaCounter
            currentValue={this.state.config.speed}
            initValues={this.props.counterDefaultVal.speed}
            increment={this.increment}
            decrement={this.decrement}
          />
          <div className="tesla-climate-container cf">
            <TeslaCounter
              currentValue={this.state.config.temperature}
              initValues={this.props.counterDefaultVal.temperature}
              increment={this.increment}
              decrement={this.decrement}
            />
          </div>
        </div>
        <TeslaNotice />
      </form>
    );
  }
}

export default TeslaBattery;
