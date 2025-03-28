import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask }) {
  return (
    <ul className="list-group">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
        ))
      ) : (
        <p className="text-center">No tasks added yet!</p>
      )}
    </ul>
  );
}

export default TaskList;
