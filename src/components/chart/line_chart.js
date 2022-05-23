import React from 'react';
import { Line } from "react-chartjs-2";
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
class LineChart extends React.Component {
    constructor(props) {
        super(props)
        let data_hash=[]
        let color=this.props.chartData.y.map(() => faker.commerce.color());
        // Set initial state 
      
        for(let i=0;i<this.props.chartData.y.length;i++)
        {
          data_hash.push({
            "data": this.props.chartData.y[i].data,
            "label": this.props.chartData.y[i].label,
            "fill": false,
            "backgroundColor":color[i],
            "borderColor":color[i]
        })
        }
        this.state = {
            data: {
                "labels": this.props.chartData.x,
                "datasets": data_hash
            }
        }

    }

    render() {
        
        const options ={
            responsive: true,
            plugins: {
              legend: {
                position: 'top' ,
              },
              title: {
                display: true,
                text: 'Chart.js Line Chart',
              },
            },
          };
        return (

            <>
                <Line options={options} data={this.state.data} />
            </>
        )
    }
}
export default LineChart;

