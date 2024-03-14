import TasksListItem from "./TasksListItem";

function TasksList({ tasks, handleDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TasksListItem task={task} key={task.id} index={task.id} handleDeleteTask={handleDeleteTask} /> 
      ))}
    </ul>
  );
}

export default TasksList;