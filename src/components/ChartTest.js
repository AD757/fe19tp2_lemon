import React from 'react';

import { Doughnut } from 'react-chartjs-2';


const Graph = (props) => (
    <Doughnut data={props.data} />  
);

export default Graph;
