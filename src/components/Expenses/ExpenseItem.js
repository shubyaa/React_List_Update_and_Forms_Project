import React from "react";
import Card from "../UI/Card";
import ExpenseData from "./ExpenseData";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const dateObj = new Date(props.date);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Card className="expense-item">
      <ExpenseDate
        day={dateObj.getDate()}
        month={months[dateObj.getMonth()]}
        year={dateObj.getFullYear()}
      ></ExpenseDate>
      <ExpenseData title={props.title} amount={props.amount}></ExpenseData>
    </Card>
  );
}

export default ExpenseItem;
