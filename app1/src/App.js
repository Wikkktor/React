import React, {useState} from "react";

import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpenses/NewExpense";


const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "ala ma kota",
    amount: 300,
    date: new Date(2021, 2, 5),
  },
  {
    id: 2,
    title: "ala ma kota2",
    amount: 300,
    date: new Date(2021, 2, 5),
  },
  {
    id: 3,
    title: "ala ma kota3",
    amount: 30,
    date: new Date(2021, 2, 5),
  },
  {
    id: 4,
    title: "ala ma kota4",
    amount: 300,
    date: new Date(2021, 2, 5),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }


  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList items={expenses}/>
    </div>
  );
}

export default App;
