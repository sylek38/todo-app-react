import './../styles/App.scss';
import iconCross from "../assets/icons/icon-cross.svg";
// import iconCheck from "../assets/icons/icon-check.svg";

const Todo = ({ text, todo, todos, setTodos}) => {

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
    

    // on click you toggle classes:
    // * "todo-card__item-check--checked"
    // * "todo-card__item-text--completed"

    return ( 
        <li className="todo-card__item">
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
     );
}
 
export default Todo;