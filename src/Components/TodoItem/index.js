import React, { useState } from "react";
import "./TodoItem.css";
import CrossIcon from "./cross.svg";
import Modal from "../Modal";

const TodoItem = ({ item, toggleCompleated, onDelete }) => {
  const [active, setActive] = useState(false);
  const [canDelete, setCanDelete] = useState(false);

  return (
    <li className='todo-item'>
      <Modal
        active={active}
        setActive={setActive}
        setCanDelete={() => setCanDelete(canDelete)}
      >
        <p>Are you sure you want to delete?</p>

        <div>
          <button
            onClick={() => {
              onDelete(item.id);
              setActive(false);
            }}
          >
            Yes
          </button>
          <button onClick={() => setActive(false)}>No</button>
        </div>
      </Modal>
      <label className='container'>
        <input
          id='inp'
          type='checkbox'
          checked={item.done}
          onChange={() => toggleCompleated(item.id)}
        />
        <span className='checkmark'></span>
      </label>
      {item.done ? <b>{item.task}</b> : <span>{item.task}</span>}

      <button
        onClick={() => {
          setActive(true);
        }}
        className='delete'
      >
        <img src={CrossIcon} alt='Delete' />
      </button>
    </li>
  );
};

export default TodoItem;
