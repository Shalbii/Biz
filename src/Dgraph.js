import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
        {

            label: "# of Votes",
            data: [12, 19, 3, 51, 22, 13],
            backgroundColor: [
                'red',
                'blue',
                'yellow',
                'green',
                'Purple',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                "white",
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};


export default function Dgraph() {
    return (

        <div style={{
display : "flex",
flexDirection:"column",
justifyContent:"center"
        
        }}></div>
    )
    
    
    
   // <Doughnut data={data} />;
}


