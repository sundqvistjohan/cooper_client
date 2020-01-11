import React from "react";
import { Line, Pie } from "react-chartjs-2";

const PerformanceChart = ({ performanceData }) => {
  let renderChart;
  let dates = [];
  let distances = [];
  let ratings = [];
  let ratingsCount = [];
  let ratingsLabel = [];
  let ratingsLabelValid = [];
  let ratingsCountValid = [];

  if (performanceData !== null) {
    dates = performanceData.map(item => item.updated_at.split("T")[0]);
    distances = performanceData.map(item => item.data.distance);
    ratings = performanceData.map(item => item.data.message);
    ratingsCount = [
      ratings.filter(rating => rating.match("Poor")).length,
      ratings.filter(rating => rating.match("Below average")).length,
      ratings.filter(rating => rating.match("Average")).length,
      ratings.filter(rating => rating.match("Above average")).length,
      ratings.filter(rating => rating.match("Excellent")).length
    ].reverse();
    ratingsLabel = ["Poor", "Below average", "Average", "Above Average", "Excellent"].reverse()

    

    ratingsCount.forEach((item, index) => {
      if (item !== 0) {
        ratingsLabelValid.push(ratingsLabel[index])
        ratingsCountValid.push(ratingsCount[index])
      }
    })

  }

  const lineChartData = {
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
  const pieChartData = {
    labels: ratingsLabelValid,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: [
          'green',
          'lime',
          'yellow',
          'orange',
          'red'
          ],
        data: ratingsCountValid
      }
    ]
  };

  const lineChartOptions = {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Date'
        },
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Distance'
        },
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        }
      }]
    }
  };

  if (performanceData) {
    renderChart = (
      <div className="ui stackable two column grid">
        <div className="column">
          <h2>Your progress</h2>
          <Line data={lineChartData} options={lineChartOptions} />
        </div>
        <div className="column">
          <h2>Your fitness ratings</h2>
          <Pie data={pieChartData} />
        </div>
      </div>
    );
  } else {
    renderChart = <p>You have no saved performances</p>;
  }
  return <>{renderChart}</>;
};

export default PerformanceChart;
