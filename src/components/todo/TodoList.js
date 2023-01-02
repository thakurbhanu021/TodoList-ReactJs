import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";


function TodoList(props) {
 const removeHandler=(id)=>{
  props.onRemove(id);
 }
 const strikeHandler=(val,id)=>{
  props.onStrike(val,id);
 }
 const addInputEditHandler=(val,id)=>{
  props.OnAddEditInput(val,id);
 }
  return (
      <ul className={classes.content}>
        {props?.todoData?.length
          ? props.todoData.map((ListData) => (
              <TodoItem
                id={ListData.id}
                des={ListData.des}
                isCompleted={ListData.isCompleted}
                // key={index}
                key={ListData.id}
                // remove={() => props.remove(index)}
               remove={removeHandler}
               strike={strikeHandler}
               addInputEdit={addInputEditHandler}
              />
            ))
          : null}
      </ul>
    
  );
}

export default TodoList;
