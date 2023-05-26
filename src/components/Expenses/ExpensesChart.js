import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    {
      label: "Jan",
      value: 50,
    },
    {
      label: "Feb",
      value: 50,
    },
    {
      label: "Mar",
      value: 50,
    },
    {
      label: "Apr",
      value: 50,
    },
    {
      label: "May",
      value: 50,
    },
    {
      label: "Jun",
      value: 50,
    },
    {
      label: "Jul",
      value: 50,
    },
    {
      label: "Aug",
      value: 50,
    },
    {
      label: "Sep",
      value: 50,
    },
    {
      label: "Oct",
      value: 50,
    },
    {
      label: "Nov",
      value: 50,
    },
    {
      label: "Dec",
      value: 50,
    },
  ];

  for (const expense of props.expenses){
    const month = parseInt(expense.date.split("-")[1]);
    chartDataPoints[month].value += expense.amount; 
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
