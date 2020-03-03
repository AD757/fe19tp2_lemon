import React from 'react';
import {Pie} from 'react-chartjs-2';

const Charts = (props) => {
  /* const state = {
    labels: ['Calories', 'Protein', 'Fat',],
    datasets: 
      [{
        text: chartData.data.text, 
        label: 'Rainfall',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        ],
        data: chartData.data.data
        }]
      } */
    return(
      <div className="pieGraph">
        <Pie 
          data = {props.data}
          options={{ 
            title:{
              display:true,
              text: props.text,
              fontSize: 20,
            },
            legend:{
              display:true,
              position:'right',
            },
          }}
        />
      </div>
    )
}

export default Charts;