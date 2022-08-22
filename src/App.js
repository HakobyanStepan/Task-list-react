import "./App.css";
import { useEffect, useState } from "react";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import Filter from "./Components/Filter";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [filterTodos, setFilterTodos] = useState(false);

  useEffect(() => {
    const temp = localStorage.getItem("TODOS");
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("TODOS", temp);
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo.trim().length) {
      return;
    }
    const newTask = {
      id: new Date().getTime(),
      task: todo,
      done: false,
    };
    setTodos((prev) => {
      return [newTask, ...prev];
    });
    setTodo("");
  };

  const handleChangeInput = (event) => {
    if (event.target.value.trim().length > 54) {
      setErrorMsg(true);
      return;
    } else {
      setErrorMsg(false);
    }

    setTodo(event.target.value);
  };

  const toggleCompleated = (id) => {
    const updatedTodo = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };
  const onDelete = (id) => {
    let r = todos.filter((item) => item.id !== id);
    setTodos(r);
  };
  return (
    <div className='App'>
      <Filter
        handleFilterTodos={() => setFilterTodos(!filterTodos)}
        filterTodos={filterTodos}
      />

      <AddTodo
        handleSubmit={handleSubmit}
        handleChangeInput={handleChangeInput}
        todo={todo}
        errorMsg={errorMsg}
      />
      <TodoList
        filterTodos={filterTodos}
        onDelete={onDelete}
        toggleCompleated={toggleCompleated}
        todos={todos}
      />
    </div>
  );
}

export default App;
