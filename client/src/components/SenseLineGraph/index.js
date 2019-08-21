import React from "react";
import { Bar } from "react-chartjs-2";
import regression from "regression";
// import './style.css'
import { parse } from "querystring";
function SenseLineGraph(props) {
  let senseData = props.senseData;
  console.log("SenseData",senseData);
  const data = {
    //line for the pricing data
    // fundamental: data.fundamental,
    //           overall_score: data.overall_score,
    //           technical: data.technical,
    //           news_sentiment: data.news_sentiment,
    //           twitter_sentiment: data.twitter_sentiment,
    //           reddit_sentiment: data.reddit_sentiment,
    //           buzz: data.buzz,
    datasets: [
      {
        label: "Overall Sense Score",
        type: "line",
        data: senseData.overall_score,
        fill: false,
        borderColor: "#cfbd18",
        // borderColor: '#55cbfa',
        backgroundColor: "#cfbd18",
        borderJoinStyle: "miter",
        // backgroundColor: '#f5f5f5',
        pointBorderColor: "#cfbd18",
        pointBackgroundColor: "#cfbd18",
        // pointHoverBackgroundColor: '#EC932F',
        // pointHoverBorderColor: '#EC932F',
        yAxisID: "y-axis-1"
      },
      {
        //bar??????? maybe replace this with another line graph to demonstrate volume
        type: "line",
        label: "Buzz",
        data: senseData.buzz,
        fill: false,
        backgroundColor: "#71B37C",
        borderColor: "#71B37C",
        hoverBackgroundColor: "#71B37C",
        hoverBorderColor: "#71B37C",
        yAxisID: "y-axis-2"
      },
      {
        //bar??????? maybe replace this with another line graph to demonstrate volume
        type: "line",
        label: "Reddit Sentiment",
        data: senseData.reddit_sentiment,
        fill: false,
        backgroundColor: "#4B0082",
        borderColor: "#4B0082",
        hoverBackgroundColor: "#4B0082",
        hoverBorderColor: "#4B0082",
        yAxisID: "y-axis-3"
      },
      {
        //bar??????? maybe replace this with another line graph to demonstrate volume
        type: "line",
        label: "News Sentiment",
        data: senseData.news_sentiment,
        fill: false,
        backgroundColor: "#0000FF",
        borderColor: "#0000FF",
        hoverBackgroundColor: "#0000FF",
        hoverBorderColor: "#0000FF",
        yAxisID: "y-axis-4"
      },
      {
        //bar??????? maybe replace this with another line graph to demonstrate volume
        type: "line",
        label: "Twitter Sentiment",
        data: senseData.twitter_sentiment,
        fill: false,
        backgroundColor: "#FF0000",
        borderColor: "#FF0000",
        hoverBackgroundColor: "#FF0000",
        hoverBorderColor: "#FF0000",
        yAxisID: "y-axis-5"
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    labels: props.labels,
    tooltips: {
      mode: "label"
    },
    elements: {
      line: {
        fill: false
      }
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            display: true,
            color: "#3a3a3aa4"
          },

          labels: props.labels
        }
      ],
      yAxes: [
        {
          type: "linear",
          display: true,
          position: "right",
          id: "y-axis-1",
          gridLines: {
            display: true,
            color: "#3a3a3aa4"
          },
          labels: {
            show: true
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 10
          }
        },
        {
          type: "linear",
          display: false,
          position: "right",
          id: "y-axis-2",
          gridLines: {
            display: false
          },
          labels: {
            show: false
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 10
          }
        },
        {
          type: "linear",
          display: false,
          id: "y-axis-3",
          gridLines: {
            display: false
          },
          labels: {
            show: false
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 10
          }
        },
        {
          type: "linear",
          display: false,
          position: "right",
          id: "y-axis-4",
          gridLines: {
            display: false
          },
          labels: {
            show: false
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 10
          }
        },
        {
          type: "linear",
          display: false,
          position: "right",
          id: "y-axis-5",
          gridLines: {
            display: false
          },
          labels: {
            show: false
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 10
          }
        }
      ]
    }
  };

  return (
    <div className="graphDiv">
      <h2 className="graphTitle">{props.title}</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default SenseLineGraph;
