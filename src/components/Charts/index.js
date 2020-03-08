import React from 'react';
import {Pie} from 'react-chartjs-2';

import './style.css';

const Charts = (props) => {
  let amountOfFood = props.foodInfo.amount;
  console.log(amountOfFood);
  if(amountOfFood.endsWith(".000")){
    amountOfFood = amountOfFood.substring(0, amountOfFood.length - 4)
  }
  console.log(amountOfFood);
    return(
      <div className="pieGraph">
        <Pie 
          data = {props.data}
          width={300}
          height={300}
          options={{ 
            maintainAspectRatio: false,
            responsive: false,
            title:{
              display:true,
              text: props.text,
              fontSize: 40,
              fontColor: 'brown',
            },
            legend:{
              labels: {
                fontColor: 'brown' //set your desired color
             },
              display:true,
              position:'bottom',
            },
          }}
        />
        <h3>Amount: {amountOfFood}{props.foodInfo.unit}</h3>
        <h3>Calories: {props.foodInfo.calories}kcal</h3>
        <h3>Carbohydrates: {props.foodInfo.carbohydrates}g</h3>
        <h3>Fat: {props.foodInfo.fat}g</h3>
        <h3>Protein: {props.foodInfo.protein}g</h3>
      </div>
    )
}

export default Charts;