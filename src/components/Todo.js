import './../styles/App.scss';
import iconCross from "../assets/icons/icon-cross.svg";
import { Draggable } from 'react-beautiful-dnd';

const Todo = ({ text, todo, todos, setTodos, id, index}) => {

    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, isCompleted: !item.isCompleted
                }
            }
            return item;
        }))
    }

    return ( 
        
            <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (
                <li className="todo-card__item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <div 
                        className={`todo-card__item-check ${todo.isCompleted ? "todo-card__item-check--checked" : ""}`}
                        onClick={completeHandler}>
                        {/* <img className="todo-card__icon-check" src={iconCheck} alt="check item" /> */}
                    </div>
                    <span className={`todo-card__item-text ${todo.isCompleted ? "todo-card__item-text--completed" : ""}`}>
                        {text}
                    </span>
                    <button className="todo-card__item-delete" onClick={deleteHandler}>
                        <img className="todo-card__icon-cross" src={iconCross} alt="delete item" />
                    </button>
                </li>
                )}
            </Draggable>
     );
}
 
export default Todo;