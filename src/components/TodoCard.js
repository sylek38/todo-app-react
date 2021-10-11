import './../styles/App.sass';
import iconCross from "../assets/icons/icon-cross.svg";
import Filters from './Filters';

const TodoCard = () => {
    return ( 
        // CARD
        <div className="todo-card">

            {/* TODO-LIST */}
            <ul className="todo-card__list">
                <li className="todo-card__item">
                    <div className="todo-card__item-check"></div>
                    <span className="todo-card__item-text">Item</span>
                    <button className="todo-card__item-delete">
                        <img className="todo-card__icon-cross" src={iconCross} alt="delete item" />
                    </button>
                </li>

                <li className="todo-card__item">
                    <div className="todo-card__item-check"></div>
                    <span className="todo-card__item-text">Item</span>
                    <button className="todo-card__item-delete">
                        <img className="todo-card__icon-cross" src={iconCross} alt="delete item" />
                    </button>
                </li>
                <li className="todo-card__item">
                    <div className="todo-card__item-check"></div>
                    <span className="todo-card__item-text">Item</span>
                    <button className="todo-card__item-delete">
                        <img className="todo-card__icon-cross" src={iconCross} alt="delete item" />
                    </button>
                </li>
                <li className="todo-card__item">
                    <div className="todo-card__item-check"></div>
                    <span className="todo-card__item-text">Item</span>
                    <button className="todo-card__item-delete">
                        <img className="todo-card__icon-cross" src={iconCross} alt="delete item" />
                    </button>
                </li>
            </ul>

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