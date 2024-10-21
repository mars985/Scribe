import React from "react";
import CalendarHeatmap from "react-native-calendar-heatmap";

const data = [
  { date: "2024-10-01", count: 1 },
  { date: "2024-10-02", count: 2 },
  { date: "2024-10-03", count: 3 },
  { date: "2024-10-04", count: 4 },
  { date: "2024-10-05", count: 0 },
  { date: "2024-10-06", count: 2 },
  // Add more data points as needed
];

const heat = () => {
  return (
    <CalendarHeatmap
      endDate={new Date("2024-10-21")}
      numDays={100}
      values={data}
    />
  );
};

export default heat;
