import { useState, useEffect } from 'react';
import './../styles/App.sass';
import Filters from './Filters';
import Form from './Form';
import TodoCard from "./TodoCard";

const Main = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    // const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        localStorage.setItem("todos", todos);
    }, [todos]);

    const deleteItem = (id) => {
        const newTodos = [...todos];
        setTodos(newTodos.filter(todo => todo.id !== id))
    }
    


    return ( 
        <main className="main">
            <div className="main__container">
                <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
                <TodoCard todos={todos} deleteItem={deleteItem} todos={todos}/>
                <div className="filter-mobile">
                    <Filters />
                </div>
                
            </div>
        </main>
     );
}
 
export default Main;