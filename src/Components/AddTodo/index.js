import "./AddTodo.css";

const AddTodo = ({ handleChangeInput, handleSubmit, todo, errorMsg }) => {
  return (
    <form onSubmit={handleSubmit} className='add-todo-form'>
      <p className='title'>Task</p>
      <input
        type='search'
        placeholder='Write here'
        value={todo}
        onChange={(e) => handleChangeInput(e)}
        className='add-todo-input'
        style={{ border: errorMsg && "1px solid #FF3104" }}
      />
      {errorMsg && (
        <p className='error-message'>
          Task content can contain max 54 characters.
        </p>
      )}
      <button type='submit' className='add-todo-btn'>
        Add
      </button>
    </form>
  );
};

export default AddTodo;
