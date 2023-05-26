import "./ExpenseItem.css"

function ExpenseData(props) {
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">Rs. {props.amount}</div>
    </div>
  );
}


export default ExpenseData;