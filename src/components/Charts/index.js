import React from 'react';
import {Pie} from 'react-chartjs-2';

const Charts = (props) => {
    return(
      <div className="pieGraph">
        <Pie 
          data = {props.data}
          width={300}
          height={300}
          options={{ 
            maintainAspectRatio: false,
            title:{
              display:true,
              text: props.text,
              fontSize: 40,
            },
            legend:{
              display:false,
              position:'bottom',
            },
          }}
        />
      </div>
    )
}

export default Charts;