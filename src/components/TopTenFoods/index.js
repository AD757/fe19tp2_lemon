import React from 'react';
import topTenFoodsList from './topTenFoodsList';

const topTenFoods = () => {
    let tempArray = [];
    topTenFoodsList.map((item, index) => tempArray[index] = item)
    console.log(tempArray);
    return(
        <div className="topTenFoods">
            <ul>
                {tempArray.map((item) =>{  
                    return <li key={item.food.food_id}>{item.food.food_name}</li>;
                    })}
            </ul>
        </div>
    )
}

export default topTenFoods;