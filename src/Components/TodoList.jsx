import React from "react";
import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Complete Math Homework",
    "Clean desk",
  ]);
  const [newTask, setNewTasks] = useState("");

  function handleInputChange(event) {
    setNewTasks(event.target.value);
  }

  function handleAddTask() {
    if(newTask.trim() !== "") {
        setTasks(t => [...t, newTask])
        setNewTasks("")
    }
  }

  function handleRemoveTask(index) {
    // console.log(index)
    const updatedTasks = tasks.filter((element, i) => i !== index)
    setTasks(updatedTasks)
  }

  function handleMoveTaskUp(index) {
    const updatedTasks = [...tasks]
    if(index > 0) {
        [updatedTasks[index], updatedTasks[index - 1]] = 
        [updatedTasks[index - 1], updatedTasks[index]]
        setTasks(updatedTasks)
    }
  }

  function handleMoveTaskDown(index) {
    const updatedTasks = [...tasks]
    if(index < tasks.length - 1) {
        [updatedTasks[index], updatedTasks[index + 1]] = 
        [updatedTasks[index + 1], updatedTasks[index]]
        setTasks(updatedTasks)
    }
  }

  return (
    <div className="container">
      <h1 className="heading">To-Do List</h1>

      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a task..."
        />

        <button className="add-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      <ol>
        {tasks.map((task, index) =>
          <li key={index}>
            <span className="text">{task}</span>
            <button
              className="delete-button"
              onClick={() => handleRemoveTask(index)}
            >
              Delete
            </button>
            <button
              className="move-button"
              onClick={() => handleMoveTaskUp(index)}
            >
              👆
            </button>
            <button
              className="move-button"
              onClick={() => handleMoveTaskDown(index)}
            >
              👇
            </button>
          </li>
        )}
      </ol>
    </div>
  );
}
