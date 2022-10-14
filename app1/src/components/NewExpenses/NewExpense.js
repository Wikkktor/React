import React, {useState} from "react"

import './NewExpense.css'
import ExpenseForm from "./ExpenseForm"


const NewExpense = (props) => {
    const [formToggle, setFormToggle] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
        }
        props.onAddExpense(expenseData);
        setFormToggle(false);
    }

    const handleFormToggle = () => {
        setFormToggle(true);
    }

    const HandleFormCancel = () => {
        setFormToggle(false);
    }
    

    return (
        <div className="new-expense">
            {formToggle && <ExpenseForm onCancelForm={HandleFormCancel} onSaveExpenseData={saveExpenseDataHandler} />}

            {!formToggle && <button type='button' onClick={handleFormToggle}>Add Expense</button>}
        </div>
    )
}
export default NewExpense