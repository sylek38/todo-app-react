import './../styles/App.scss';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ inputText, setInputText, todos, setTodos }) => {

    const inputTextHandler = e => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();

        if (!inputText || /^\s*$/.test(inputText)) {
            return
        }
        
        setTodos([
            ...todos, { id: uuidv4(), name: inputText, isCompleted: false }
        ])

        setInputText("");

    }

    return ( 
        <form 
            className="add-todo"
            onSubmit={submitTodoHandler}
            >
            <div className="add-todo__wrapper">

                <button
                    type="submit" className="add-todo__btn">
                </button>

                <input
                    className="add-todo__input"
                    type="text"
                    value={inputText}
                    onChange={inputTextHandler}
                    placeholder="Create a new todo..."
                />
            </div>
        </form>
     );
}
 
export default Form;