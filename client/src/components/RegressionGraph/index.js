import React from 'react';
import {Bar} from 'react-chartjs-2';
import regression from 'regression';
// import './style.css'
import { parse } from 'querystring';
function RegressionGraph(props) {
  // console.log(props);
  // console.log(props.prices);
  let parsedData = [];
  let parsedCoords = [];
  let x = "";
  let y = 0;
  for(let i = 0; i < props.prices.length; i++){
    y = parseFloat(props.prices[i]);
    x = props.labels[i];
    parsedData.push(y);
    parsedCoords.push([i+1,y]);
  }
  // console.log(parsedData);
  const result = regression.linear(parsedCoords);
  // console.log("THIS IS THE RESULT", result.points[0][1]);

  // y data points for the regression data
  let regressionLine = [];
  for(let i = 0; i < result.points.length; i++){
    regressionLine.push(result.points[i][1]);
    console.log(result.points[i][1]);
  }
  
  const data = {
    //line for the pricing data
    datasets: [{
    label: 'Spot price in USD',
    type:'line',
    data: parsedData,
    fill: false,
    borderColor: '#a2d4ff', 
    // borderColor: '#55cbfa',   
    backgroundColor: '#a2d4ff',
    borderJoinStyle: 'miter',
    // backgroundColor: '#f5f5f5',
    pointBorderColor: '#a2d4ff',
    pointBackgroundColor: '#a2d4ff',
    pointHoverBackgroundColor: 'white',
    // pointHoverBorderColor: '#EC932F',
    yAxisID: 'y-axis-1',
    defaultFontColor: 'white',
  },{
    //bar??????? maybe replace this with another line graph to demonstrate volume
    type: 'line',
    label: 'Regression Analysis',
    data: regressionLine,
    fill: false,
    backgroundColor: '#667f94',
    borderColor: '#667f94',
    hoverBackgroundColor: '#f4f4fd',
    hoverBorderColor: '#334CB3',
    yAxisID: 'y-axis-2'
    }]
    };
    
    const options = {
    responsive: true,
    maintainAspectRatio: true,
    labels: props.labels,
    tooltips: {
    mode: 'label'
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
          color: '#3a3a3aa4'
        },
    
        labels: props.labels,
      }
    ],
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
        gridLines: {
          display: true,
          color: '#3a3a3aa4'
        },
        labels: {
          show: true
        }
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          display: false
        },
        labels: {
          show: true
        }
      }
    ]
    }
    };

    return (
      <div className="graphDiv">
        <h4 className="graphTitle">Regression Data for {props.title}</h4>
        <Bar
          data={data}
          options={options}
        />
      </div>
    );
  }
  
  export default RegressionGraph;