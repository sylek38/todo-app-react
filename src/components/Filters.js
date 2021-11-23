import './../styles/App.sass';

const Filters = ({ filterStatus, setFilterStatus }) => {
    
    const statusHandler = (filterValue) => {
            setFilterStatus(filterValue);

    };

// ${status === "all" ? "todo-filters__btn--selected" : ""}`}

    return ( 
    <div className="todo-filters">
        <button
            onClick={() => statusHandler("all")}
            className=
            {`todo-filters__btn ${filterStatus === "all" ? "todo-filters__btn--selected" : ""}`}
            value="all" 
            aria-label="All"
        >
                All
        </button>
            
        <button
            onClick={() => statusHandler("active")}
            className=
            {`todo-filters__btn ${filterStatus === "active" ? "todo-filters__btn--selected" : ""}`}
            value="active"
            aria-label="Active"
        >
                Active
        </button>
        
        <button
            onClick={() => statusHandler("completed")}
            className=
            {`todo-filters__btn ${filterStatus === "completed" ? "todo-filters__btn--selected" : ""}`}
            value="completed" 
            aria-label="Completed">
                Completed
        </button>
    </div>
     );
}
 
export default Filters;