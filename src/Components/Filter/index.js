import "./Filter.css";

const Filter = ({ handleFilterTodos, filterTodos }) => {
  return (
    <div style={{ width: "100%" }}>
      <div className='filter'>
        <label className='container' htmlFor='filter'>
          <input
            id='filter'
            name='filter'
            type='checkbox'
            checked={filterTodos}
            onChange={() => handleFilterTodos()}
          />
          <span className='checkmark'></span>
        </label>
        Hide completed
        {/* <button onClick={() => handleFilterTodos()}>Hide completed</button> */}
      </div>
    </div>
  );
};

export default Filter;
