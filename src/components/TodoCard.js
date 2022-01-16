import './../styles/App.scss';
import Filters from './Filters';
import Todo from './Todo';
import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const TodoCard = ({ todos, setTodos, filterStatus, setFilterStatus, filteredTodos, setFilteredTodos }) => {

    const renderedFilteredTodos = filteredTodos.map((todo, index) => {
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

    const clearCompleted = () => {
        setTodos(todos.filter(item => !item.isCompleted));
    }

    const handleOnDragEnd = result => {
        if (!result.destination) return;
        const updatedList = Array.from(filteredTodos);
        const [reorderedItem] = updatedList.splice(result.source.index, 1);
        updatedList.splice(result.destination.index, 0, reorderedItem);

        setFilteredTodos(updatedList);
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
                                { renderedFilteredTodos }
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