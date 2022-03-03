import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react/cjs/react.development';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChange = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });  

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onFilterChange={filterChange}/>

                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items = {filteredExpenses}/>
                
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