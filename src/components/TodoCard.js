import './../styles/App.sass';

import Filters from './Filters';
import Todo from './Todo';

const TodoCard = ({ todos, deleteItem }) => {

    console.log(todos)

    return (

        // CARD
        <div className="todo-card">

            { todos.length === 0 && <div>Your todos go here</div> }

            {/* TODO-LIST */}
            { todos && 
            <ul className="todo-card__list">
                {todos.map(todo => (
                    <Todo text={todo.name} key={todo.id} id={todo.id} deleteItem={deleteItem} />
                ))}
            </ul>
            }

            {/* TODO-FILTER-BOTTOM */}
            <div className="todo-card__bottom">

                {/* LEFT */}
                <span className="todo-card__items-left">
                    item(s) left
                </span>

                {/* CENTER */}
                <Filters />

                {/* RIGHT */}
                <button className="todo-card__clear-items">Clear Completed</button>

            </div>

            

        </div>
        
     );
}
 
export default TodoCard;