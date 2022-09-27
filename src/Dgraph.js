import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {

            label: "# of Votes",
            data: [12, 19, 33, 51, 22, 13],
            backgroundColor: [
                'red',
                'blue',
                'yellow',
                'green',
                'Purple',
                'gray',
            ],
            borderColor: [
                'black',
                'black',
                'black',
                'black','black',
                'black',
            ],
            borderWidth: 1,
        },
    ],
};


export default function Dgraph() {
    return (


        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "250px",
            height: "250px",

        }}>


            <div>
                <Doughnut
                    options={{ plugins: { legend: { display: false } } }}
                    data={data}
                ></Doughnut>
            </div>

        </div>
    );


   //<Doughnut data={data} />;
       // );
}


