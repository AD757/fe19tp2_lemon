import React from "react";
import "./styles.css";

class ConstructedMeal extends React.Component {
  constructor(props) {
    super(props);
    this.addCurrentFood = this.addCurrentFood.bind(this);
    this.state = {
      mealPlan: [],
      totals: {
        totalCalories: 0,
        totalCarbs: 0,
        totalFat: 0,
        totalProtein: 0
      }
    };
  }

  addCurrentFood = () => {
    if (this.props.itemDetails) {
      this.setState(state => {
        const mealPlan = state.mealPlan.concat(this.props.itemDetails);
        state.totals.totalCalories = this.returnFoodValue("calories", mealPlan);
        state.totals.totalCarbs = this.returnFoodValue(
          "carbohydrates",
          mealPlan
        );
        state.totals.totalFat = this.returnFoodValue("fat", mealPlan);
        state.totals.totalProtein = this.returnFoodValue("protein", mealPlan);
        return {
          mealPlan
        };
      });
    }
  };

  returnFoodValue = (foodProperty, addMealPlan) => {
    let tempValue = 0;
    addMealPlan.forEach(item => {
      let parsedValue = parseFloat(item[foodProperty]);
      tempValue = tempValue + parsedValue;
    });
    return tempValue;
  };

  deleteFoodItem = value => {
    this.setState(state => {
      const mealPlan = state.mealPlan.filter((item, index) => index !== value);
      state.totals = {
        totalCalories:
          state.totals.totalCalories -
          parseFloat(state.mealPlan[value].calories),
        totalCarbs:
          state.totals.totalCarbs -
          parseFloat(state.mealPlan[value].carbohydrates),
        totalFat: state.totals.totalFat - parseFloat(state.mealPlan[value].fat),
        totalProtein:
          state.totals.totalProtein - parseFloat(state.mealPlan[value].protein)
      };
      return {
        mealPlan
      };
    });
  };

  render() {
    return (
      <div className="constructedMeal">
        <h2>Construct a meal</h2>
        <ul className="mealList">
          {this.state.mealPlan.map((items, index) => (
            <li className="mealItem" value={index} key={index}>
              <div className="mealName">{items.food_name}</div>
              <button
                class="btnDelete"
                type="button"
                onClick={() => this.deleteFoodItem(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <button className="btn" onClick={this.addCurrentFood}>
          Add current food
        </button>
        <div>Total calories: {this.state.totals.totalCalories}kcal</div>
        <div>Total carbs: {this.state.totals.totalCarbs}g</div>
        <div>Total fat: {this.state.totals.totalFat}g</div>
        <div>Total protein: {this.state.totals.totalProtein}g</div>
      </div>
    );
  }
}

export default ConstructedMeal;
