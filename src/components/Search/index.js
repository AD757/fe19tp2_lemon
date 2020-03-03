import React from 'react';
import './styles.css';
import fatAPI from '../API';

const key = '0a656d2e1070441d81b256544a739083';
const secret = 'fb94850a73f9420793fe67bb98c77b41';
const myFatAPI = new fatAPI(key, secret);

class Search extends React.Component {
   constructor (props) {
      super(props);
      this.searchForFood = this.searchForFood.bind(this);
      this.searchRef = React.createRef();
      this.state = {
         data: null,
         food_list: [],
         resultsArray: [],
         showFoodList: false,
         food_search: '',
         itemDetails: [],
         pieData: {
            text: "hello",
            data: [1,1,1]
         }
      }
   }

   ItemClick (e) {
      const target = e.target;
      console.log(target);
      myFatAPI.method('food.get', {
          food_id: target.id
      })
      .then(identifiedItem => {
         console.log(identifiedItem);
         console.log(this.state);
         let servingsIdentifier = identifiedItem.food.servings.serving[0];
         if(!servingsIdentifier){
            servingsIdentifier = identifiedItem.food.servings.serving;
         }
         this.setState(state => {
            const itemDetails = state.itemDetails.concat({
               value: target.value,
               food_name: identifiedItem.food.food_name,
               carbohydrates: servingsIdentifier.carbohydrate,
               fat: servingsIdentifier.fat, //grams
               protein: servingsIdentifier.protein //grams
            });

            state.pieData.text = identifiedItem.food.food_name;
            state.pieData.data = [servingsIdentifier.carbohydrate, servingsIdentifier.protein, servingsIdentifier.fat];

            return{
               itemDetails
            }
         })
         this.props.saveFoodData(this.state.pieData);
      })
   }


   searchForFood () {

      //Skapar en temporär array för att lagra sökningarna i innan de ändras i state
      let tempArray = [];
      const searchValue = this.searchRef.current.value;

      //showComponent visar/"skapar" ul som returneras längre ner i App, food_search sätter värdet till det som står i text inputen
      this.setState({
         showFoodList: true,
         food_search: searchValue
      }, () => {
         console.log(this.state.showFoodList);
         myFatAPI.method('foods.search', {
            search_expression: this.state.food_search,
            max_results: 10,
         })
         .then(results => this.setState({resultsArray: results.foods.food}, () => {
            console.log(this.state.resultsArray);
            if(this.state.resultsArray !== undefined){ 
               tempArray = this.state.resultsArray.map((items, index) => <li 
                  className = "foodListItem"
                  value = {index} 
                  id = {items.food_id} 
                  key = {items.food_id} 
                  onClick = {this.ItemClick.bind(this)}>{items.food_name}{/* <button>Add</button> */}
                  </li>)
               console.log(tempArray);
            }
         
         if(this.state.food_list.length === 0){
            this.setState(state=>{
               const food_list = state.food_list.concat(tempArray);
               console.log(food_list);
               return {
                  food_list
               }
         })}
         else if(this.state.food_list.length <= 10){
            this.setState(state=>{
               const food_list = state.food_list.map((x, i) => x = tempArray[i])
               console.log(food_list);
               return{
                  food_list
               }
            })
         }
         }))
      })
   }

   render () {
      return (
         <div className="foodSearchDiv">
               <input id="foodSearchInput" ref={this.searchRef}></input>
               <button id="foodSearchBtn" onClick={this.searchForFood}>Search for food</button>
               {this.state.showFoodList ?
                  <ul className = "foodList">{this.state.food_list}</ul>: null
               }  
         </div>
      );
   }
}
export default Search;