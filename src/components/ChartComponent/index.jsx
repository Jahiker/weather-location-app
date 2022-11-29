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


export const ChartComponent = ({ content, weekForecast, labels, unit }) => {

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
        label: unit,
        data: weekForecast,
        borderColor: "#826ED7",
        backgroundColor: "rgba(87,89,186,0.6)",
      },
    ],
  };

  return (
    <div style={{ height: "auto" }}>
      <Line options={options} data={dataForecast} />
    </div>
  );
};
