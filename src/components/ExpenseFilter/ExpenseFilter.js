import React from "react";

import "./ExpenseFilter.css";

function ExpenseFilter(props) {

  const valueChangeHandler = (event) => {

    props.onFilterChange(event.target.value);
  }


  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="">Filter by Year</label>
        <select value={props.filteredYear} onChange={valueChangeHandler}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
