import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react/cjs/react.development';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const expenses = props.expenses;
    const filterChange = selectedYear => {
        setFilteredYear(selectedYear);
    };

    return (
        <div>
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChange}/>
            <Card className='expenses'>
                {expenses.map((expense) => {
                    return (
                        <ExpenseItem item = {expense}/>
                    );
                })}
            </Card>
        </div>
      );
}

export default Expenses;