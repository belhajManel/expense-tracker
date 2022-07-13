import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import Filter from './Filter';
import {useState} from 'react';

function Expenses(props) {
  const [selectedyear, setSelectedYear] = useState("2021");

  const filterChangeHandler = (filteredYear) => {
    setSelectedYear(filteredYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedyear;
  }); 


  return (
    <Card className="expenses">
      <Filter selected = {selectedyear} onChangeFilter={filterChangeHandler}/>
      {filteredExpenses.length > 0 && filteredExpenses.map(item => <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />) }
      {!(filteredExpenses.length > 0) && <h2 className='expenses-list__fallback'>No Expenses Found.</h2> }
      
    </Card>
  );
}

export default Expenses;