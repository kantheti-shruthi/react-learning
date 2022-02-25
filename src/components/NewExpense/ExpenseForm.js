import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        // approach 1
        // setEnteredTitle(event.target.value); 

        // approach 2
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // }); 

        // React schedules state updates, it doesn't perform them instantly, therefore theoritically 
        // if you schedule lot of state updates at the same time, you could be depending on the outdated
        // or incorrect state snapshots if we use the above approach 2. In the below approach, React will
        // gaurantee that the state snapshot that gives you here in the inner function will always be the
        // latest snapshot keeping all schedule state updates in mind. This is the safer way to ensure you
        // are always operating on the latest state snapshot. Use below approach whenever state updates are
        // dependent on the previous state.
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value
            };
        });
    };

    const amountChangeHandler = (event) => {
        // setEnteredAmount(event.target.value);
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        });
    }

    const dateChangeHandler = (event) => {
        // setEnteredDate(event.target.value);
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        });
    };

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;