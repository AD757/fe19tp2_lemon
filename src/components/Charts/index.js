import React from "react";
import { Pie } from "react-chartjs-2";

import "./style.css";
import { FaCentercode } from "react-icons/fa";

const Charts = props => {
  let amountOfFood = props.foodInfo.amount;
  console.log(amountOfFood);
  if (amountOfFood) {
    if (amountOfFood.endsWith(".000")) {
      amountOfFood = amountOfFood.substring(0, amountOfFood.length - 4);
    }
  } else if (!amountOfFood) {
    amountOfFood = props.foodInfo.description;
  }
  console.log(amountOfFood);
  return (
    <div className="pieGraph">
      <Pie
        data={props.data}
        width={350}
        height={350}
        options={{
          maintainAspectRatio: false,
          responsive: false,
          title: {
            display: true,
            text: props.text,
            fontSize: 22,
            fontColor: "#2cb84a",
            fontStyle: "normal"
          },
          legend: {
            labels: {
              fontColor: "black", //set your desired color
              fontSize: 12
            },
            display: true,
            position: "bottom"
          }
        }}
      />

      <div className="factsInfo">
        <h2>
          Amount: {amountOfFood}
          {props.foodInfo.unit}
        </h2>
        <p>Calories: {props.foodInfo.calories}kcal</p>
        <p>Carbohydrates: {props.foodInfo.carbohydrates}g</p>
        <p>Fat: {props.foodInfo.fat}g</p>
        <p>Protein: {props.foodInfo.protein}g</p>
      </div>
    </div>
  );
};

export default Charts;
