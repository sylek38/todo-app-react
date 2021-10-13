import './../styles/App.sass';
import iconCross from "../assets/icons/icon-cross.svg";
import iconCheck from "../assets/icons/icon-check.svg";

const Todo = ({ text, id, deleteItem }) => {

    // on click you toggle classes:
    // * "todo-card__item-check--checked"
    // * "todo-card__item-text--completed"

    return ( 
        <li className="todo-card__item">
            <div className="todo-card__item-check">
                {/* <img className="todo-card__icon-check" src={iconCheck} alt="check item" /> */}
            </div>
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