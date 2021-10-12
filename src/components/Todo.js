import './../styles/App.sass';
import iconCross from "../assets/icons/icon-cross.svg";

const Todo = ({ text, id, deleteItem }) => {

    

    return ( 
        <li className="todo-card__item">
            <div className="todo-card__item-check"></div>
            <span className="todo-card__item-text">
                {text}
            </span>
            <button className="todo-card__item-delete" onClick={() => deleteItem(id)}>
                <img className="todo-card__icon-cross" src={iconCross} alt="delete item" />
            </button>
        </li>
     );
}
 
export default Todo;