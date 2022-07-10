import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const onSaveFormHandler = (finalData) => {
        const formData = {
            ...finalData,
            id : Math.random().toString()
        }
        // console.log(formData);
        props.onSaveNewExpense(formData);
    }

    return <div className='new-expense'>
        <ExpenseForm onSaveForm={onSaveFormHandler}/>
    </div>
}

export default NewExpense;