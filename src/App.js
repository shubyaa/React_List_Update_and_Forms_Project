// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const data = [
  {
    id: "e1",
    title: "Car Insurance",
    date: "8-07-2020",
    amount: 800.0,
  },
  {
    id: "e2",
    title: "Games",
    date: "2-07-2021",
    amount: 1500.0,
  },
  {
    id: "e3",
    title: "Gold Loan",
    date: "2-03-2022",
    amount: 950000.0,
  },
  {
    id: "e4",
    title: "Movies Charges",
    date: "2-07-2021",
    amount: 950000.0,
  },
];

function App() {
  const [listItems, setListItems] = useState(data);

  const addExpenseHandler = (expenseData) => {
    setListItems((prevList) => {
      console.log("the Data is : " + expenseData.date);
      return [expenseData, ...prevList];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={listItems}></Expenses>
    </div>
  );
}

export default App;
