import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filteredList = props.items.filter((obj) => {
    return new Date(obj.date).getFullYear().toString() === filteredYear;
  });

  const onExpenseFilterChangeListener = (year) => {
    setFilteredYear(year);
  };

  // Always add a key to the list item,
  // adding this will make the react to add a new element
  // rather than adding the element and refreshing whole list again n again degrading efficiency.

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          filteredYear={filteredYear}
          onFilterChange={onExpenseFilterChangeListener}
        />
        <ExpensesChart expenses={filteredList} />
        {/* {The javascript expression here} */}
        {filteredList.length === 0 ? (
          <p className="expenses-fallback__message">No Expense Items found</p>
        ) : (
          filteredList.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          ))
        )}
      </Card>
    </div>
  );
}

export default Expenses;
