import TodoItem from "../TodoItem";
import "./TodoList.css";


const TodoList = ({ todos, onDelete, toggleCompleated, filterTodos }) => {
  if (filterTodos) {
    todos = todos.filter((item) => !item.done);
  }
  return (
    <ul className='todo-list'>
      {todos.length > 0 ? (
        todos?.map((item) => {
          return (
            <TodoItem
              key={item.id}
              filterTodos={filterTodos}
              item={item}
              onDelete={onDelete}
              toggleCompleated={toggleCompleated}
            />
          );
        })
      ) : (
        <div className='todo-empty'>
          <span>Your life is a blank page. You write on it.</span>
          <p>So start by adding your tasks here.</p>
        </div>
      )}
    </ul>
  );
};

export default TodoList;
