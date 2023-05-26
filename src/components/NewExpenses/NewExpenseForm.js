import { useState } from "react";
import "./NewExpenseForm.css";
import React from "react";

const NewExpenseForm = (props) => {
  // Approach to use multiple useState for multiple inputs.
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [formVisibility, setFormVisibility] = useState(0);

  // Using single useState for all inputs.
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // ... is an sepreator operator which repeats the values of the mentioned object.
  // If a state depends on previous states executed by react then a function can be passed in a new
  // state with the param pof previous state. This can be given by :
  //
  // setUserInput((prevState) => {
  //     return {...prevState,
  //             enteredTitle : event.target.value};
  //   })

  const onTitleChangeListener = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
  };

  const onAmountChangeListener = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const onDateChangeListener = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  const changeVisibility = () => {
    if (formVisibility === 1) {
      setFormVisibility(0);
    } else {
      setFormVisibility(1);
    }
  };

  const onFormSumitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };

    props.onSaveData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    setFormVisibility(0);
  };

  return (
    <div>
      {formVisibility === 1 ? (
        <form action="" onSubmit={onFormSumitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={onTitleChangeListener}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                value={enteredAmount}
                onChange={onAmountChangeListener}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2018-01-10"
                max="2023-9-31"
                value={enteredDate}
                onChange={onDateChangeListener}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={changeVisibility}>Cancel</button>
            <button type="submit">Add expense</button>
          </div>
        </form>
      ) : (
        <div className="new-expense__actions">
          <button onClick={changeVisibility}>
            Add new expense
          </button>
        </div>
      )}
    </div>
  );
};

export default NewExpenseForm;
