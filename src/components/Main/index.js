import React, { Component } from 'react';
import Search from '../Search';
import Charts from '../Charts';
import TopTenFoods from '../TopTenFoods';
import fatAPI from '../API';
import './styles.css';

const key = '0a656d2e1070441d81b256544a739083';
const secret = 'fb94850a73f9420793fe67bb98c77b41';
const myFatAPI = new fatAPI(key, secret);

const dummyData = {
    labels: ['Carbohydrates', 'Protein', 'Fat',],
    datasets:
        [{
            text: undefined,
            label: 'Rainfall',
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
            ],
            hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
            ],
            data: [undefined]
        }]
}

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pieData: {}
        }
        this.ItemClick = this.ItemClick.bind(this);
        this.saveFoodData = this.saveFoodData.bind(this);
    }

    saveFoodData = (foodData, itemDetails) => {
        console.log(itemDetails);
        this.setState({ foodData, itemDetails })
    }
    
    ItemClick = (e) => {
        const target = e.target;
        console.log("ID: " + e.target.id)
        myFatAPI.method('food.get', {
            food_id: target.id
        })
            .then(identifiedItem => {
                let servingsIdentifier = identifiedItem.food.servings.serving[0];
                if (!servingsIdentifier) {
                    servingsIdentifier = identifiedItem.food.servings.serving;
                }
                console.log(servingsIdentifier)
                this.setState(state => {
                    state.itemDetails = {
                        value: target.value,
                        food_name: identifiedItem.food.food_name,
                        calories: servingsIdentifier.calories,
                        carbohydrates: servingsIdentifier.carbohydrate,
                        fat: servingsIdentifier.fat, //grams
                        protein: servingsIdentifier.protein, //grams
                        amount: servingsIdentifier.metric_serving_amount,
                        unit: servingsIdentifier.metric_serving_unit
                    }
                    state.pieData = {
                        text: identifiedItem.food.food_name,
                        data: [servingsIdentifier.carbohydrate, servingsIdentifier.protein, servingsIdentifier.fat]
                    }
                })
                this.saveFoodData(this.state.pieData, this.state.itemDetails);
            })
        }



    render() {
        if (this.state.foodData) {
            dummyData.datasets[0].data = this.state.foodData.data;
        }

        return (
            <div className="mainContent">
                {this.state.foodData ? <div className="graphContainer">
                    <Charts data={dummyData} text={this.state.foodData.text} foodInfo={this.state.itemDetails} />
                </div> : null}
                <Search saveFoodData={this.saveFoodData} ItemClick={this.ItemClick} />
                <TopTenFoods ItemClick={this.ItemClick} />
            </div>
        );
    }
}

export default Main;