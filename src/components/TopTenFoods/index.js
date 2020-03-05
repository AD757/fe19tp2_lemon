import React from 'react';
import topTenFoodsList from './topTenFoodsList';
import './styles.css';

const topTenFoods = () => {
    let tempArray = [];
    topTenFoodsList.map((item, index) => tempArray[index] = item)
    console.log(tempArray);
    return(
        <div className="topTenFoods">
            <h2>Most eaten foods</h2>
            <ol>
                {tempArray.map((item) =>{  
                    return <li key={item.food.food_id}>{item.food.food_name}</li>;
                    })}
            </ol>
        </div>
    )
}

export default topTenFoods;