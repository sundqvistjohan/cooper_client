import React from "react";
import { Line, Pie } from "react-chartjs-2";
import { findRenderedComponentWithType } from "react-dom/test-utils";

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
    ratingsLabel = ["Poor", "Below average", "Average", "Above Average", "Excellent"].reverse();

    

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
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(244,164,96,0.5)",
        borderColor: "rgba(244,164,96,1)",
        pointHoverRadius: 5,
        data: distances
      }
    ]
  };
  const pieChartData = {
    labels: ratingsLabelValid,
    datasets: [
      {
        backgroundColor: [
          'MediumSeaGreen',
          'DeepSkyBlue',
          'rgba(237, 243, 175)',
          'SandyBrown',
          'rgba(255, 127, 80, 1)',
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
          labelString: 'Date',
          fontColor: 'white',
          fontSize: 16,
        },
        ticks: {
          fontColor: 'white',
          fontSize: 12,
          maxRotation: 30,
          minRotation: 30
        },
        gridLines: {
          color: 'rgba(255, 255, 255, 0.1)',
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Distance',
          fontColor: 'white',
          fontSize: 16,
        },
        ticks: {
          fontColor: 'white',
          fontSize: 12,
        },
        gridLines: {
          color: 'rgba(255, 255, 255, 0.1)',
        }
      }],
    }
  };

  const pieChartOptions = {
    legend: {
      labels: {
          fontColor: "white",
          fontSize: 14
      },
      scales: {
        yAxes: [{
            ticks: {
                fontColor: "white",
                fontSize: 14,
            }
        }],

    }
  },
  }

  if (performanceData) {
    renderChart = (
      <div className="ui stackable two column grid">
        <div className="column" id="chart">
          <h2>Your progress</h2>
          <Line data={lineChartData} options={lineChartOptions} />
        </div>
        <div className="column" id="chart">
          <h2>Your fitness ratings</h2>
          <Pie data={pieChartData} options={pieChartOptions} />
        </div>
      </div>
    );
  } else {
    renderChart = <p>You have no saved performances</p>;
  }
  return <>{renderChart}</>;
};

export default PerformanceChart;
