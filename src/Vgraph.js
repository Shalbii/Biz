import React from 'react';
import {
    Chart as ChartJS, CategoryScale, LinearScale, BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement,
    Title,
    Tooltip,
    Legend
);
export default function Vgraph() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Chart.js Bar Chart",
            },
        },
    };


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => 25),
            backgroundColor: 'green',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => 40),
            backgroundColor: 'black',
        },
    ],
};

return (
    <>
        Test
        <Bar options={options} data={data} />
    </>
);
}
