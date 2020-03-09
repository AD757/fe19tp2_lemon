import React from 'react';
import "./styles.css";

class ConstructedMeal extends React.Component{
    constructor(props){
        super(props);
        this.addCurrentFood = this.addCurrentFood.bind(this);
        this.state = {
            mealPlan: []
        };
    }

    componentDidUpdate(){
        console.log(this.props);
        console.log("State mealplan: " + this.state.mealPlan)
    }

    addCurrentFood = () => {
        if(this.props.itemDetails){
            this.setState(state=>{
                const mealPlan = state.mealPlan.concat(this.props.itemDetails)
                return{
                    mealPlan
                };
            });
        }
    };

    returnFoodValue = (foodProperty) => {
        let tempValue = 0;
        this.state.mealPlan.forEach(item => {
            let parsedValue = parseFloat(item[foodProperty]);
            tempValue = tempValue + parsedValue;
        })
        return(tempValue);
    }

    render(){
        return(
            <div className="constructedMeal">
                <h4>Construct a meal</h4>
                <ul className="mealList">
                    {this.state.mealPlan.map((items, index) => <li
                        className="mealItem"
                        key={index}
                        >{items.food_name}</li>)
                    }
                </ul>
                <button onClick={this.addCurrentFood}>Add current food</button>
                <h5>Total calories: {this.returnFoodValue('calories')}kcal</h5>
                <h5>Total carbs: {this.returnFoodValue('carbohydrates')}g</h5>
                <h5>Total fat: {this.returnFoodValue('fat')}g</h5>
                <h5>Total protein: {this.returnFoodValue('protein')}g</h5>
            </div>
        )
    }
}

export default ConstructedMeal;