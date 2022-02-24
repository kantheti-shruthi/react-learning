import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    var expenses = props.expenses;
    return (
        <Card className='expenses'>
            {expenses.map((expense) => {
                return (
                    <ExpenseItem item = {expense}/>
                );
            })}
        </Card>
      );
}

export default Expenses;