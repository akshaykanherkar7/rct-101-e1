import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";

const Tasks = ({ todos, deleteTodo, data,setCount1,count1 }) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {data.map((el) => (
          <Task count1={count1} setCount1={setCount1} key={el.id} value={el.text} status={el.done} deleteTodo={deleteTodo}></Task>
        ))}
        {todos.map((todo) => (
          <Task count1={count1} setCount1={setCount1} key={todo.id} value={todo.value} deleteTodo={deleteTodo}></Task>
        ))}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
