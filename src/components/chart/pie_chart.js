import React from 'react';
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
class PieChart extends React.Component {
    constructor(props) {
        super(props)
        let data_hash=[]
        let color=this.props.chartData.y.map(() => faker.commerce.color());
        // Set initial state 
      
        for(let i=0;i<this.props.chartData.y.length;i++)
        {
          data_hash.push({
            
                label: this.props.chartData.y[i].label,
                data: this.props.chartData.y[i].data,
                backgroundColor:this.props.chartData.y[i].data.map(() => faker.commerce.color()),
                borderColor: 'black',
                borderWidth: 1,

            // "data": this.props.chartData.y[i].data,
            // "label": this.props.chartData.y[i].label,
            // "fill": false,
            // "backgroundColor":color[i],
            // "borderColor":color[i]
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
                <Pie data={this.state.data} />
            </>
        )
    }
}
export default PieChart;

