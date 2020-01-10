import React from "react";
import { Line } from "react-chartjs-2";

const PerformanceChart = ({ performanceData }) => {
  let renderChart;
  let dates = [];
  let distances = [];
  let ratings = [];

  if (performanceData !== null) {
    dates = performanceData.map(item => item.updated_at.split("T")[0]);
    distances = performanceData.map(item => item.data.distance);
    ratings = performanceData.map(item => item.updated_at);
  }

  const data = {
    labels: dates,
    datasets: [
      {
        label: "",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(34,186,69,0.4)",
        borderColor: "rgba(34,186,69,1)",
        borderCapStyle: "butt",
        pointBorderColor: "rgb(169,169,169,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 5,
        pointHoverRadius: 10,
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: distances
      }
    ]
  };

  let options={
    legend: {
        display: false,
    },
  };

  if (performanceData) {
    renderChart = (
      <>
        <h2>Chart</h2>
        <Line data={data} options={options} />
      </>
    );
  } else {
    renderChart = (
      <p>You have no saved performances</p>
    )
  }
  return (
    <>
    {renderChart}
    </>
  )
};

export default PerformanceChart;
