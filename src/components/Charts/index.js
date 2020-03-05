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
        <h3>Amount: {props.foodInfo.amount}{props.foodInfo.unit}</h3>
        <h3>Calories: {props.foodInfo.calories}kcal</h3>
        <h3>Carbohydrates: {props.foodInfo.carbohydrates}g</h3>
        <h3>Fat: {props.foodInfo.fat}g</h3>
        <h3>Protein: {props.foodInfo.protein}g</h3>
      </div>
    )
}

export default Charts;