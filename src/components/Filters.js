const Filters = () => {
    return ( 
        <div className="todo-filters">
                    <button
                        className="todo-filters__btn todo-filters__btn--selected"
                        value="all" 
                        aria-label="All">
                            All
                    </button>
                        
                    <button
                        className="todo-filters__btn"
                        value="active"
                        aria-label="Active">
                            Active
                    </button>
                    
                    <button
                        className="todo-filters__btn"
                        value="completed" 
                        aria-label="Completed">
                            Completed
                        </button>
                </div>
     );
}
 
export default Filters;