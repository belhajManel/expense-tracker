import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import {useState} from 'react';

const NewExpense = (props) => {
    const [addNewExpense, setAddNewExpense] = useState(false);

    const onSaveFormHandler = (finalData) => {
        const formData = {
            ...finalData,
            id : Math.random().toString()
        }
        // console.log(formData);
        props.onSaveNewExpense(formData);
    }

    const startOnAddExpense = () => {
        setAddNewExpense(true);
    }
    const stopOnAddExpense = () => {
        setAddNewExpense(false);
    }

    return <div className='new-expense'>
        {!addNewExpense &&  <button onClick={startOnAddExpense}>Add New Expense</button> }
        {addNewExpense && <ExpenseForm onSaveForm={onSaveFormHandler} onCancel={stopOnAddExpense}/>}
        
    </div>
}

export default NewExpense;