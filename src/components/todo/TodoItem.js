import { useState } from "react";
import classes from "./TodoItem.module.css";

import "../../App.css";

function TodoItem(props) {
  const [strike, setStrike] = useState(false);
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState("");

  const strikeHandler = () => {
    if (edit) {
      return "none";
    } else {
      setStrike(!strike);
      const val = props.isCompleted;
      props.strike(!val, props.id);
    }
  };
  const editHandler = () => {
    if (props.isCompleted=== true) {
      return "none";
    } else {
      setEdit(!edit);
    }
  };
  const setInputHandler = (e) => {
    setInput(e.target.value);
  };
  const submitInputHandler = () => {
    if (input.trim().length === 0) {
      return alert("Please type something to edit the task");
    } else {
      props.addInputEdit(input, props.id);
      setEdit(false);
      setInput("");
    }
  };

  const content1 = (
    <div>
      <input
        type="text"
        id={props.id}
        placeholder={props.des}
        className={classes.input}
        value={input}
        onChange={setInputHandler}
      />
      <i
        className="fa fa-check-circle-o fa-lg"
        aria-hidden="true"
        onClick={submitInputHandler}
      ></i>
    </div>
  );
  const content2 = (
    <p
      className={classes.paragraph}
      id={props.id}
      style={{ textDecoration: props.isCompleted === true ? "line-through" : "none" }}
    >
      {props.des}
    </p>
  );
  return (
    <div className={classes.content}>
      {edit ? content1 : content2}
      {/* <p className={classes.paragraph} id={props.id} style={{textDecoration: strike? 'line-through' : 'none'}}>
        {props.des}
      </p> */}
      <div>
        <i
          className="fa fa-check-square-o btn"
          aria-hidden="true"
          onClick={strikeHandler}
          style={{ backgroundColor: props.isCompleted === true ? "rgb(124,252,0)" : "" }}
        ></i>
        <i
          className="fa fa-pencil-square-o btn"
          aria-hidden="true"
          onClick={editHandler}
        ></i>
        <i
          className="fa fa-trash-o btn"
          baria-hidden="true"
          onClick={() => {
            props.remove(props.id);
          }}
        ></i>
      </div>

      {/* <button className={classes.btn} onClick={()=>{props.remove(props.id)}}>Remove</button> */}
    </div>
  );
}

export default TodoItem;
