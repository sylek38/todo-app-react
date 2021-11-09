import { useState } from 'react/cjs/react.development';
import './../styles/App.sass';

const Filters = ({ setStatus }) => {

    const statusHandler = (e) => {
        if (e.target.className === "todo-filters__btn") {
            setStatus(e.target.value);
            e.target.className.add("todo-filters__btn--selected");
        }
    }

    return ( 
    <div className="todo-filters" onClick={statusHandler}>
        <button
        // todo-filters__btn--selected
            className="todo-filters__btn"
            value="all" 
            aria-label="All"
        >
                All
        </button>
            
        <button
            className="todo-filters__btn"
            value="active"
            aria-label="Active"
        >
                Active
        </button>
        
        <button
            className="todo-filters__btn"
            value="completed" 
            aria-label="Completed">
                Completed
        </button>
    </div>
     );
}
 
export default Filters;