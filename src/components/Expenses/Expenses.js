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
      
      {filteredExpenses.map(item => <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />)}
      
    </Card>
  );
}

export default Expenses;