import { useState, useEffect } from 'react';
import './../styles/App.sass';
import Filters from './Filters';
import Form from './Form';
import TodoCard from "./TodoCard";

const Main = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    
    
    // const [isCompleted, setIsCompleted] = useState(false);

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
                    setStatus={setStatus}
                />
                <div className="filter-mobile">
                    <Filters 
                        setStatus={setStatus}
                    />
                </div>
                
            {/* </div> */}
        </main>
     );
}
 
export default Main;