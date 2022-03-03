import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react/cjs/react.development';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChange = selectedYear => {
        setFilteredYear(selectedYear);
    };

    let expensesContent = <p>No expenses found.</p>;

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    if(filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => {
            return (
                <ExpenseItem key={expense.id} item = {expense}/>
            );
        });
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onFilterChange={filterChange}/>

                {expensesContent}
                
                {/* {filteredExpenses.length === 0 ? (
                    <p>Expenses not found.</p>
                ) : (filteredExpenses.map((expense) => {
                    return (
                        <ExpenseItem key={expense.id} item = {expense}/>
                    );
                }))} */}
            </Card>
        </div>
      );
}

export default Expenses;