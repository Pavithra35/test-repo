import React from 'react';
import "../../main.css"
import { Chart } from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Card from '../../common/Card';
import { headingContent, barData, lineData, donutData, barOptions, lineOptions, donutOptions } from '../../common/data';
import TableView from './TableView';
Chart.register(ChartDataLabels);

const Dashboard = () => {
  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart) {
      const { ctx, width, height } = chart;
      const dataset = chart.data.datasets[0];
      const total = dataset.data.reduce((sum, value) => sum + value, 0);

      ctx.save();
      ctx.font = 'bolder 30px sans-serif';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center'; // Center align the text
      ctx.textBaseline = 'middle'; // Middle align the text

      const text =` ${Math.round((dataset.data[0] + dataset.data[1] * 100) / total)}%`;
      const textX = Math.round(width / 2);
      const textY = Math.round((height + chart.chartArea.top) / 2); // Adjust to center vertically

      ctx.fillText(text, textX, textY);
      ctx.restore();
    }
  };
  return (
    <div>
      <div className='heading-content'>
        {
          headingContent.map((item, index) =>
            <Card key={index} title={item.title} info={item.info} />
          )
        }
      </div>
      <div className='row-content'>
        <div className='bar-chart-layout'>
          <div className='bar-heading-filter'>
            <h3>Heading for Bar chart</h3>
            <select className='filter-button'>
              <option>Filter</option>
              <option>Filter1</option>
            </select>
          </div>
          <Bar width={400} height={130} data={barData} options={barOptions} />
        </div>
        <div style={{ width: "49%"}}>
          <TableView />
        </div>
      </div>
      <div className='row-content'>
        <div className='bar-chart-layout line-chart-layout'>
          <div className='bar-heading-filter'>
            <h3 >Heading for Line chart</h3>
            <select className='filter-button'>
              <option>Filter</option>
              <option>Filter1</option>
            </select>
          </div>
          <Line width={400} height={100} data={lineData} options={lineOptions} />
        </div>
        <div className='bar-chart-layout donut-chart-layout'>
          <div  className='bar-heading-filter'>
            <h3>Heading for Donut chart</h3>
            <select className='filter-button'>
              <option>Filter</option>
              <option>Filter1</option>
            </select>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Doughnut width={400} height={200} data={donutData} options={{
              ...donutOptions, maintainAspectRatio: false,
            
            }}
            plugins = {[textCenter]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
