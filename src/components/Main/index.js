import React, { Component } from 'react';
import Search from '../Search';
import Charts from '../Charts';
import TopTenFoods from '../TopTenFoods';

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
    state={
        
    }

    saveFoodData = (foodData) => {
        this.setState({ foodData })
    }

render() {
    if (this.state.foodData) {
    dummyData.datasets[0].data = this.state.foodData.data;
}
    return (
        <div>
            <Search saveFoodData={this.saveFoodData} />
            {this.state.foodData ? <Charts data={dummyData} text={this.state.foodData.text}/> : null }
            <TopTenFoods />
        </div>
    );
}
}
export default Main;
