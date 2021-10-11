import './../styles/App.sass';
import AddTodo from "./AddTodo";
import Filters from './Filters';
import TodoCard from "./TodoCard";

const Main = () => {
    return ( 
        <main className="main">
            <div className="main__container">
                <AddTodo />
                <TodoCard />
                <div className="filter-mobile">
                    <Filters />
                </div>
                
            </div>
        </main>
     );
}
 
export default Main;