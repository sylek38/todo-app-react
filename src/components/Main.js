import { useState, useEffect } from 'react';
import './../styles/App.sass';
import Filters from './Filters';
import Form from './Form';
import TodoCard from "./TodoCard";

const Main = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [filterStatus, setFilterStatus] = useState("all");
    

    useEffect(() => {
        localStorage.setItem("todos", todos);
    }, [todos]);

    return ( 
        <main className="main">
            {/* <div className="main__container"> */}
                <Form 
                    inputText={inputText} 
                    setInputText={setInputText} 
                    todos={todos} 
                    setTodos={setTodos}
                />

                <TodoCard 
                    todos={todos} 
                    setTodos={setTodos}
                    filterStatus={filterStatus}
                    setFilterStatus={setFilterStatus}
                />
                <div className="filter-mobile">
                    <Filters
                        filterStatus={filterStatus}
                        setFilterStatus={setFilterStatus}
                    />
                </div>
                
            {/* </div> */}
        </main>
     );
}
 
export default Main;