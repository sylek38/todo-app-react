import { useState, useEffect } from 'react';
import './../styles/App.sass';
import Filters from './Filters';
import Form from './Form';
import TodoCard from "./TodoCard";

const Main = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        localStorage.setItem("todos", todos);
    }, [todos]);

    const deleteItem = (id) => {
        const newTodos = [...todos];
        setTodos(newTodos.filter(todo => todo.id !== id))
    }

    // const addTodo = () => {
    //     localStorage.setItem("todos", todos);
    // }


    return ( 
        <main className="main">
            <div className="main__container">
                <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
                <TodoCard todos={todos} deleteItem={deleteItem}/>
                <div className="filter-mobile">
                    <Filters />
                </div>
                
            </div>
        </main>
     );
}
 
export default Main;