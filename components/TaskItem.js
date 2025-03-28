import React from "react";

function TaskItem({ task, deleteTask }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {task.text}
      <button
        className="btn btn-danger btn-sm"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
