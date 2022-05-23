import React, { useState } from "react";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";
import TaskHeader from "./TaskHeader/TaskHeader";
import styles from "./taskApp.module.css";
import { v4 as uuidv4 } from "uuid";
import data from "../data/tasks.json";

const TaskApp = () => {
  const [todos, setTodos] = useState([]);
  const [count1, setCount1] = useState(0);

  const addTodo = (value) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        value: value,
      },
    ]);
  };

  const deleteTodo = (value) => {
    setTodos(todos.filter((todo) => todo.value !== value));
    // data.filter((data) => data.value !== value);
    
  };
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader count1={count1} todos={todos} data={data}></TaskHeader>
      {/* Add Task */}
      <AddTask addTodo={addTodo}></AddTask>
      {/* Tasks */}
      <Tasks count1={count1} setCount1={setCount1} todos={todos} data={data} deleteTodo={deleteTodo}></Tasks>
    </div>
  );
};

export default TaskApp;
