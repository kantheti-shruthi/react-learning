import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import React, {useState} from 'react';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setShowForm(false);
    };

    const showAddNewExpenseForm = () => {
        setShowForm(true);
    };

    const closeAddNewExpenseForm = () => {
        setShowForm(false);
    }

    return (
        <div className='new-expense'>
            {!showForm && <button onClick={showAddNewExpenseForm}>Add New Expense</button>}
            {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCloseForm={closeAddNewExpenseForm}/>}
        </div>
    );
};

export default NewExpense;