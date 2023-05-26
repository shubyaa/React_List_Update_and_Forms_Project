import React from "react";

import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const onSaveDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random(), //to just generate id
    };

    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm onSaveData={onSaveDataHandler} />
    </div>
  );
};

export default NewExpense;
