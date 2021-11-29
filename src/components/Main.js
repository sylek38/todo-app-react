import { useState, useEffect } from 'react';
import './../styles/App.scss';
import Filters from './Filters';
import Form from './Form';
import TodoCard from "./TodoCard";

const Main = ({theme, setTheme}) => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [filterStatus, setFilterStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        getFromLocalStorage();
    }, []);

    useEffect(() => {
        filterHandler();
        saveToLocalStorage();
    }, [todos, filterStatus, theme]);

    const filterHandler = () => {
        switch(filterStatus) {
            case 'active':
                setFilteredTodos(todos.filter(item => !item.isCompleted));
                break;

            case 'completed':
                setFilteredTodos(todos.filter(item => item.isCompleted));
                break;

            default:
                setFilteredTodos(todos);
                break;
        }
    }

    const saveToLocalStorage = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
        localStorage.setItem("theme", JSON.stringify(theme));
    }
    
    const getFromLocalStorage = () => {
        
        if (localStorage.getItem("theme") === null) {
            localStorage.setItem("theme", "dark");

        } else {
            let localtheme = JSON.parse(localStorage.getItem("theme"));
            setTheme(localtheme);
        }
        
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));

        } else {
            let localTodos = JSON.parse(localStorage.getItem("todos"));
            setTodos(localTodos);
        }

    }

    return ( 
        <main className="main">
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
                    filteredTodos={filteredTodos} 
                />
                <div className="filter-mobile">
                    <Filters
                        filterStatus={filterStatus}
                        setFilterStatus={setFilterStatus}
                    />
                </div>
                
                <span className="draggable-text">Drag and drop to reorder list</span>
        </main>
     );
}
 
export default Main;