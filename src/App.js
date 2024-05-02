import "./App.css";
import Header from "./components/Headers/Header";
import TeslaBattery from "./containers/TeslaBattery";

const counterDefaultVal = {
  speed: {
    title: "Speed",
    unit: "mph",
    step: 5,
    min: 45,
    max: 70,
  },
  temperature: {
    title: "Outside Temperature",
    unit: "°",
    step: 10,
    min: -10,
    max: 40,
  },
};
function App() {
  console.log("inside app file");

  return (
    <div>
      <Header />
      <TeslaBattery counterDefaultVal={counterDefaultVal}></TeslaBattery>
    </div>
  );
}

export default App;
