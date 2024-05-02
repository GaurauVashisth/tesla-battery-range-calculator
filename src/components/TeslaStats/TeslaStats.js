import React from "react";
import "./TeslaStats.css";
import Proptypes from "react";

const TeslaStats = (props) => {
  const listItems = props.carstats.map((stats) => (
    <l key={stats.model}>
      <div
        className={`tesla-stats-icon tesla-stats-icon--${stats.model.toLowerCase()}`}
      ></div>
      <p>{stats.miles}</p>
    </l>
  ));

  return (
    <div className="tesla-stats">
      <ul>{listItems}</ul>
    </div>
  );
};

TeslaStats.prototypes = {
  carstats: Proptypes.array,
};

export default TeslaStats;
