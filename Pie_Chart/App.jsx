import React from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // add this line
import './global.css'


const data = {
  labels: ['Red', 'Blue', 'Yellow',"Green"],
  datasets: [
    {
      data: [300, 50, 100,150],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','green'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','green'],
    },
  ],
};

function MyPieChart() {
  return (
    <div className="pie-chart-container">
      <Pie data={data} />
    </div>
  );
}

export default MyPieChart;
