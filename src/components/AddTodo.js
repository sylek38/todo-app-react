import './../styles/App.sass';
import { useState } from "react";

const AddTodo = () => {

    const [todoText, setTodoText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();


        // addTodo func
    }


    return ( 
        <form 
            class="add-todo"
            onSubmit={onSubmit}
            >
            <div className="add-todo__wrapper">

                <button
                    type="submit" className="add-todo__btn">
                </button>

                <input
                    className="add-todo__input"
                    type="text" 
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    placeholder="Create a new todo..."
                />
            </div>
        </form>
     );
}
 
export default AddTodo;