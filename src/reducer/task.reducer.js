import { v4 as uuid } from "uuid";
const taskReducer = (state, { type, taskId, newTask, person, newAddress }) => {
  switch (type) {
    case "ADDTASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: uuid(),
            task: newTask,
            address: newAddress,
            complete: false,
            assignPerson: person,
          },
        ],
      };

    case "TOGGLE":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        ),
      };
    case "DELETE":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== taskId),
      };
    case "COMPLETEDTASK":
      let completedFiltered = state.tasks.find((task) => task.id === taskId);
      if (!completedFiltered) {
        return state; // Task not found, return the unchanged state
      }
      return {
        ...state,
        completedTasks: [...state.completedTasks, completedFiltered],
        tasks: state.tasks.filter((task) => task.id !== taskId),
      };

    case "UPDATETASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === taskId
            ? {
                ...task,
                task: newTask,
                assignPerson: person,
                address: newAddress,
              }
            : task
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
