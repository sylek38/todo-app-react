import './../styles/App.sass';

import Filters from './Filters';
import Todo from './Todo';

const TodoCard = ({ todos, setTodos, filterStatus, setFilterStatus, filteredTodos }) => {

    const clearCompleted = () => {
        setTodos(todos.filter(item => !item.isCompleted));
    }

    return (

        // CARD
        <div className="todo-card">

            { todos.length === 0 && 
            <span className="todo-card__empty-list">Your todos go here</span>
            }

            {/* TODO-LIST */}
            { todos && 
            <ul className="todo-card__list">
                {filteredTodos.map(todo => (
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

            {/* TODO-FILTERS-BOTTOM */}
            <div className="todo-card__bottom">

                {/* LEFT */}
                <span className="todo-card__items-left">
                item(s) left 
                </span>

                {/* CENTER */}
                <Filters 
                    filterStatus={filterStatus}
                    setFilterStatus={setFilterStatus} 
                />

                {/* RIGHT */}
                <button 
                    onClick={clearCompleted}
                    className="todo-card__clear-items"
                >
                    Clear Completed</button>
            </div>

            

        </div>
        
     );
}
 
export default TodoCard;