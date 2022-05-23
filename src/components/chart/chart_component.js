import React from 'react';
import { Bar } from "react-chartjs-2";
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
class ChartComponent extends React.Component {
    constructor(props) {
        super(props)
        let data_hash=[]
        let color=this.props.chartData.y.map(() => faker.commerce.color());
        // Set initial state 
        console.log("==========>>",this.props.chartData);
        for(let i=0;i<this.props.chartData.y.length;i++)
        {
          data_hash.push({
            "data": this.props.chartData.y[i].data,
            "label": this.props.chartData.y[i].label,
            "backgroundColor": color[i],
            "borderColor": "black",
            "borderWidth":1
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
        const options = {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Bar Chart',
              },
            },
          };
        return (

            <>
                <Bar options={options} data={this.state.data} />
            </>
        )
    }
}
export default ChartComponent;

