import React from "react";
import { Chart } from "react-charts";

export const ChartComponent = ({ content, weekForecast }) => {
  console.log({
    content,
    weekForecast: weekForecast.list,
  });

  const data = weekForecast.list.map((day) => {
    return {
      label: day.main.temp,
      data: [
        {
          date: new Date(day.dt),
          temp: day.main.temp
        },
      ],
    };
  });

  const primaryAxis = React.useMemo(
    () => ({
      getValue: (datum) => datum.date,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: (datum) => datum.temp,
        stacked: true,
        elementType: "area",
      },
    ],
    []
  );

  return (
    <div style={{ height: "50rem" }}>
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
        }}
      />
    </div>
  );
};
