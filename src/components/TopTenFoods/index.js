import React from 'react';
import topTenFoodsList from './topTenFoodsList';
import './styles.css';


const topTenFoods = (props) => {
    let tempArray = [];
    topTenFoodsList.map((item, index) => tempArray[index] = item);
    return(
        <div className="topTenFoods">
            <h2>Most eaten foods</h2>
            <ol>
                {tempArray.map((item) =>{  
                    return <li 
                    onClick={props.ItemClick}
                    key={item.food.food_id}
                    className="topTenFoodListItem"
                    id={item.food.food_id}
                    >{item.food.food_name}</li>;
                    })}
            </ol>
        </div>
    )
}

export default topTenFoods;