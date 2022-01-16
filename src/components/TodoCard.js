import './../styles/App.scss';
import Filters from './Filters';
import Todo from './Todo';
import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useEffect } from 'react';

const TodoCard = ({ todos, setTodos, filterStatus, setFilterStatus, filteredTodos, setFilteredTodos }) => {

    const renderedFilteredTodos = todos.map((todo, index) => {
        return (
            <Todo
                key={todo.id}
                id={todo.id}
                index={index}
                todo={todo}
                text={todo.name} 
                todos={todos}
                setTodos={setTodos}
            />
        )
    })

    const renderedFilteredTodosActive = todos.map((todo, index) => {
        if (todo.isCompleted) return '';
        return (
            <Todo
                key={todo.id}
                id={todo.id}
                index={index}
                todo={todo}
                text={todo.name} 
                todos={todos}
                setTodos={setTodos}
            />
        )
    })

    const renderedFilteredTodosCompleted = todos.map((todo, index) => {
        if (!todo.isCompleted) return '';
        return (
            <Todo
                key={todo.id}
                id={todo.id}
                index={index}
                todo={todo}
                text={todo.name} 
                todos={todos}
                setTodos={setTodos}
            />
        )
    })
        const renderedTodos = () => {
            if (filterStatus === 'active') return renderedFilteredTodosActive;
            if (filterStatus === 'completed') return renderedFilteredTodosCompleted;
            return renderedFilteredTodos;
        }

    const clearCompleted = () => {
        setTodos(todos.filter(item => !item.isCompleted));
    }

    const handleOnDragEnd = result => {
        if (!result.destination) return;
        const updatedList = Array.from(todos);
        const [reorderedItem] = updatedList.splice(result.source.index, 1);
        updatedList.splice(result.destination.index, 0, reorderedItem);

        setTodos(updatedList);
    }

    return (

        // CARD
        <div className="todo-card">

            { todos.length === 0 && 
            <span className="todo-card__empty-list">Your todos go here</span>
            }

            {/* TODO-LIST */}
            { todos && 
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="draggableList">
                        {(provided) => (
                            <ul className="todo-card__list draggableList" {...provided.droppableProps} ref={provided.innerRef}>
                                { renderedTodos() }
                                {provided.placeholder}
                            </ul>
                    )}
                    </Droppable>
                </DragDropContext>
            }

            {/* TODO-FILTERS-BOTTOM */}
            <div className="todo-card__bottom">

                {/* LEFT */}
                <span className="todo-card__items-left">
                {todos.filter(item => !item.isCompleted).length} item(s) left 
                </span>

                {/* CENTER */}
                <Filters 
                    filterStatus={filterStatus}
                    setFilterStatus={setFilterStatus} 
                />

                {/* RIGHT */}
                <button 
                    onClick={clearCompleted}
                    className="todo-card__clear-items"
                >
                    Clear Completed
                </button>
            </div>

            

        </div>
        
     );
}
 
export default TodoCard;