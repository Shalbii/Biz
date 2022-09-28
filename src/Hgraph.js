import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function Hgraph() {

const options = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 1,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'Chart.js Horizontal Bar Chart',
        },
    },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [10, 50, 26, 30, 99, 10, 5],
            //data: labels.map(() => 10),
            borderColor: 'gray',
            backgroundColor: 'blue',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => 30),
            borderColor: 'gray',
            backgroundColor: 'lightblue',
          
        },
    ],
};

return (
    <>
        Test
        < Bar options={options} data={data} />
    </>
);
}
