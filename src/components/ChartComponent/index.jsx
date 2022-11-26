import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


export const ChartComponent = ({ content, weekForecast, labels }) => {
  // console.log({
  //   content,
  //   weekForecast: weekForecast.list,
  //   labels
  // });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: content,
      },
    },
  };

  const dataForecast = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Temp ºC",
        data: weekForecast,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div style={{ height: "auto" }}>
      <Line options={options} data={dataForecast} />
    </div>
  );
};
