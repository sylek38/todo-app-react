import './../styles/App.sass';
import AddTodo from "./AddTodo";
import TodoCard from "./TodoCard";

const Main = () => {
    return ( 
        <main className="main">
            <div className="main__container">
                <AddTodo />
                <TodoCard />
            </div>
        </main>
     );
}
 
export default Main;