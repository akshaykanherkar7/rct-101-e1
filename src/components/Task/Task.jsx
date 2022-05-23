import React, { useState } from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = ({ value, deleteTodo, setCount1, count1 }) => {
  const [line, setLine] = useState(false);
  // console.log(line)
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input
        type="checkbox"
        data-cy="task-checkbox"
        onClick={() => {
          if (line === false) {
            setLine(true);
            setCount1(count1 + 1);
          } else {
            setLine(false);
            setCount1(count1 - 1);
          }
        }}
      />
      <div data-cy="task-text"></div>
      <div
        style={
          line === true
            ? { textDecoration: `line-through`, color: `gray` }
            : { textDecoration: `none` }
        }
      >
        {value}
      </div>
      <Counter></Counter>
      <button
        data-cy="task-remove-button"
        onClick={() => {
          deleteTodo(value);
        }}
      >
        x
      </button>
    </li>
  );
};

export default Task;
