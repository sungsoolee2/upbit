import React from 'react';
import {Bar} from 'react-chartjs-2';
import './style.css'
function PricingGraph(props) {
  // console.log(props);
  const data = {
    //line for the pricing data
    datasets: [{
    label: 'Spot price in USD',
    type:'line',
    data: props.prices,
    fill: false,
    borderColor: '#EC932F',
    backgroundColor: '#EC932F',
    pointBorderColor: '#EC932F',
    pointBackgroundColor: '#EC932F',
    pointHoverBackgroundColor: '#EC932F',
    pointHoverBorderColor: '#EC932F',
    yAxisID: 'y-axis-1'
    }]
  }
    // },{
    // //bar??????? maybe replace this with another line graph to demonstrate volume
    // type: 'bar',
    // label: 'Visitor',
    // data: [200, 185, 590, 621, 250, 400, 95],
    // fill: false,
    // backgroundColor: '#71B37C',
    // borderColor: '#71B37C',
    // hoverBackgroundColor: '#71B37C',
    // hoverBorderColor: '#71B37C',
    // yAxisID: 'y-axis-1'
    // }]
    // };
    
    const options = {
    responsive: true,
    maintainAspectRatio: false,
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
          display: false
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
          display: false
        },
        labels: {
          show: true
        }
      },
      // {
      //   type: 'linear',
      //   display: true,
      //   position: 'right',
      //   id: 'y-axis-2',
      //   gridLines: {
      //     display: false
      //   },
      //   labels: {
      //     show: true
      //   }
      // }
    ]
    }
    };
    
    // const plugins = [{
    // afterDraw: (chartInstance, easing) => {
    // const ctx = chartInstance.chart.ctx;
    // ctx.fillText("This text drawn by a plugin", 100, 100);
    // }
    // }];
    return (
      <div>
        <h2>Pricing Data for Different Crytocurrencies</h2>
        <Bar
          data={data}
          options={options}
          // plugins={plugins}
        />
      </div>
    );
  }
  
  export default PricingGraph;