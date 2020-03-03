import React, { Component } from 'react';
import Search from '../Search';
import Charts from '../Charts';

const dummyData = {
    labels: ['Calories', 'Protein', 'Fat',],
    datasets: 
      [{
        text: 'hej', 
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
        data: [23, 10, 5]
        }]
      }

class Main extends Component {
    state={hej: 'bla'}

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
        </div>
    );
}
}
export default Main;
