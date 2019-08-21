import React from 'react';
import {Bar} from 'react-chartjs-2';
import './styles/style.css';

function HistoricalGraph(props) {
  // console.log(props);
  const data = {
    //line for the pricing data
    datasets: [{
    label: 'Spot price in USD',
    type:'line',
    data: props.prices,
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
  },{
    //bar??????? maybe replace this with another line graph to demonstrate volume
    type: 'bar',
    label: 'Volume in USD',
    data: props.volume,
    fill: false,
    backgroundColor: '#667f94',
    borderColor: '#818181',
    hoverBackgroundColor: '#f4f4fd',
    hoverBorderColor: '#71B37C',
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
        <h4 className="graphTitle">Historical Data for {props.title}</h4>

  <Bar
          data={data}
          options={options}
        />
      
      </div>
    );
  }
  
  export default HistoricalGraph;