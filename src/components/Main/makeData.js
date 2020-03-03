const labels = ['Carbs', 'Protein', 'Fat'];

const dummyData = {
    labels: labels,
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

export const makeChartData = (foodData) => {
    //console.log("MakeChartData reached")
    if (!foodData) {
        console.log("Data needed bro")
        return;
    }
    //Object.assign(dummyData, { datasets: [{ data: foodData.data}]})
    const newData = { labels: labels.map((item, index) => item + ": " + foodData.data[index] + "%"), datasets: [{ data: foodData.data }] }
    //dummyData.datasets[0].data = this.state.foodData.data;
    //dummyData.labels = dummyData.labels.map((item, index) => item + ": " + this.state.foodData.data[index] + "%");
    //console.log(newData)
    //console.log(dummyData)
    const newDataset = Object.assign(dummyData.datasets[0], newData.datasets[0])
    //console.log(newData)
    newData.datasets[0] = newDataset;
    //console.log(Object.assign({}, dummyData, newData));
    return (newData);
} 