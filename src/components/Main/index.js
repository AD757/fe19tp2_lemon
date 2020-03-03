import React, { Component } from 'react';
import Search from '../Search';
import Charts from '../Charts';

import { makeChartData } from './makeData';

const dummyData = {
    labels: ['Carbs', 'Protein', 'Fat'],
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
    state = {}

    saveFoodData = (foodData) => {

        this.setState({ foodData })

    }

    render() {


        if (this.state.foodData) {
            console.log(makeChartData(this.state.foodData));
            dummyData.datasets[0].data = this.state.foodData.data;
            dummyData.labels = dummyData.labels.map((item, index) => item + ": " + this.state.foodData.data[index] + "%");

        }
        return (
            <div>
                <Search saveFoodData={this.saveFoodData} />
                {this.state.foodData ? <Charts data={makeChartData(this.state.foodData)} text={this.state.foodData.text} /> : null}
            </div>
        );
    }
}
export default Main;
