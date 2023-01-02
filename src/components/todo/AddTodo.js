import { useState } from "react";

import classes from "./AddTodo.module.css";

function AddTodo(props) {
  const [task, setTask] = useState('');

  function AddTodoHandler(e) {
    const TaskData = {
      id: Math.floor(Math.random() * 1000 + 1),
      des: task,
      isCompleted: false
    };
    props.onAddTaskData(TaskData);
    setTask('')
  }

  return (
    <div className={classes.content}>
      <input
        type="text"
        className={classes.input}
        placeholder="Add New Todo"
        onChange={(event)=>{setTask(event.target.value)}}
        value={task}
      />
      <button
        className={classes.btn}
        disabled={!task.trim().length}
        onClick={AddTodoHandler}
      >
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;
