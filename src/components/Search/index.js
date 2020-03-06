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
         data: null,
         food_list: [],
         resultsArray: [],
         showFoodList: false,
         food_search: '',
         itemDetails: [],
         pieData: {
            text: "hello",
            data: [1, 1, 1]
         }
      }
   }

   searchForFood(e) {
      e.preventDefault();
      //Skapar en temporär array för att lagra sökningarna i innan de ändras i state
      let tempArray = [];
      const searchValue = this.searchRef.current.value;

      //showComponent visar/"skapar" ul som returneras längre ner i App, food_search sätter värdet till det som står i text inputen
      this.setState({
         showFoodList: true,
         food_search: searchValue
      }, () => {
         myFatAPI.method('foods.search', {
            search_expression: this.state.food_search,
            max_results: 10,
         })
            .then(results => this.setState({ resultsArray: results.foods.food }, () => {
               console.log(this.state.resultsArray);
               if (this.state.resultsArray !== undefined) {
                  tempArray = this.state.resultsArray.map((items, index) => <li
                     className="foodListItem"
                     value={index}
                     id={items.food_id}
                     key={items.food_id}
                     onClick={(e) => this.props.ItemClick(e)}>{items.food_name}{/* <button>Add</button> */}
                  </li>)
                  console.log(tempArray);
               }

               if (this.state.food_list.length === 0) {
                  this.setState(state => {
                     const food_list = state.food_list.concat(tempArray);
                     console.log(food_list);
                     return {
                        food_list
                     }
                  })
               }
               else if (this.state.food_list.length <= 10) {
                  this.setState(state => {
                     const food_list = state.food_list.map((x, i) => x = tempArray[i])
                     console.log(food_list);
                     return {
                        food_list
                     }
                  })
               }
            }))
      })
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
            {this.state.showFoodList ?
               <ul className="foodList">{this.state.food_list}</ul> : null
            }
         </div>
      );
   }
}
export default Search;