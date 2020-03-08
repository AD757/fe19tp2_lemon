import React from 'react';
import './styles.css';
import fatAPI from '../API';
import { FaSearch } from "react-icons/fa";

const key = '0a656d2e1070441d81b256544a739083';
const secret = 'fb94850a73f9420793fe67bb98c77b41';
const myFatAPI = new fatAPI(key, secret);

class Search extends React.Component {
   constructor(props) {
      super(props);
      this.searchForFood = this.searchForFood.bind(this);
      this.searchRef = React.createRef();
      this.state = {
         resultsArray: []
      }
   }

   searchForFood(e) {
      e.preventDefault();
      //Skapar en temporär array för att lagra sökningarna i innan de ändras i state
      const searchValue = this.searchRef.current.value;

      //showComponent visar/"skapar" ul som returneras längre ner i App, food_search sätter värdet till det som står i text inputen
         myFatAPI.method('foods.search', {
            search_expression: searchValue,
            max_results: 10
         })
            .then(results => {
               console.log(results);
               if(!results.foods){
                  return;
               }
               else if(results.foods.food){
                  this.setState({ 
                     resultsArray: results.foods.food
                  })
               }})
            }

   render() {
      return (
         <div className="foodSearchDiv">
            <div className="searchBarDiv">
               <form onSubmit={this.searchForFood}>
                  <input type="text" id="foodSearchInput" ref={this.searchRef}></input>
                  <FaSearch type="submit" id="foodSearchBtn" onClick={this.searchForFood} />
               </form>
            </div>
            {this.state.resultsArray ?
               <ul className="foodList">{this.state.resultsArray.map((items, index) => <li
                  className="foodListItem"
                  value={index}
                  id={items.food_id}
                  key={items.food_id}
                  onClick={(e) => this.props.ItemClick(e)}>{items.food_name}
               </li>)}</ul> : null
            }
         </div>
      );
   }
}
export default Search;