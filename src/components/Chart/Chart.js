import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataValues = props.dataPoints.map((point) => point.value);
  const totalMax = Math.max(...dataValues);
  return (
    <div className="chart">
      {props.dataPoints.map((points) => (
        <ChartBar
          value={points.value}
          maxValue={totalMax}
          label={points.label}
          key={points.key}
        />
      ))}
    </div>
  );
};

export default Chart;
