import React from 'react';
import "./styles.css";

class ConstructedMeal extends React.Component{
    constructor(props){
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
        if(this.props.itemDetails){
            this.setState(state=>{
                const mealPlan = state.mealPlan.concat(this.props.itemDetails)
                state.totals.totalCalories = this.returnFoodValue('calories', mealPlan)
                state.totals.totalCarbs = this.returnFoodValue('carbohydrates', mealPlan)
                state.totals.totalFat = this.returnFoodValue('fat', mealPlan)
                state.totals.totalProtein = this.returnFoodValue('protein', mealPlan)
                return{
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
        })
        return(tempValue);
    } 

    deleteFoodItem = (value) => {
        this.setState(state =>{
            const mealPlan = state.mealPlan.filter((item, index) => index !== value);
            state.totals = {
                totalCalories: state.totals.totalCalories - parseFloat(state.mealPlan[value].calories),
                totalCarbs: state.totals.totalCarbs - parseFloat(state.mealPlan[value].carbohydrates),
                totalFat: state.totals.totalFat - parseFloat(state.mealPlan[value].fat),
                totalProtein: state.totals.totalProtein - parseFloat(state.mealPlan[value].protein)
            }
            return{
                mealPlan
            }
        })
    }

    render(){
        return(
            <div className="constructedMeal">
                <h4>Construct a meal</h4>
                <ul className="mealList">
                    {this.state.mealPlan.map((items, index) => <li
                        className="mealItem"
                        value={index}
                        key={index}
                        >{items.food_name}
                        <button type = "button" onClick={() => this.deleteFoodItem(index)}>Delete</button>
                        </li>)
                    }
                </ul>
                <button onClick={this.addCurrentFood}>Add current food</button>
                <h5>Total calories: {this.state.totals.totalCalories}kcal</h5>
                <h5>Total carbs: {this.state.totals.totalCarbs}g</h5>
                <h5>Total fat: {this.state.totals.totalFat}g</h5>
                <h5>Total protein: {this.state.totals.totalProtein}g</h5>
            </div>
        )
    }
}

export default ConstructedMeal;