import './../styles/App.sass';

import Filters from './Filters';
import Todo from './Todo';

const TodoCard = ({ todos, setTodos}) => {

    console.log(todos)

    return (

        // CARD
        <div className="todo-card">

            { todos.length === 0 && 
            <span className="todo-card__empty-list">Your todos go here</span>
            }

            {/* TODO-LIST */}
            { todos && 
            <ul className="todo-card__list">
                {todos.map(todo => (
                    <Todo 
                        key={todo.id} 
                        todo={todo}
                        text={todo.name} 
                        todos={todos}
                        setTodos={setTodos}

                    />
                    
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