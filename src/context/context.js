import React, { createContext, useContext, useEffect } from "react";
import useLocalStorageReducer from "../reducer/useLocalStorageReducer";
import taskReducer from "../reducer/task.reducer";

const initialState = {
  tasks: [
    {
      id: 1,
      task: "Installing electrical boxes and outlets.",
      address: "Bandra",
      completed: false,
      assignPerson: "person1",
    },
    {
      id: 2,
      task: "Upgrading or replacing circuit breaker panels for increased capacity or safety.",
      address: "virar",
      completed: true,
      assignPerson: "person2",
    },
  ],
  assignTasks: [
    {
      id: 1,
      person: "person1",
    },
    {
      id: 2,
      person: "person2",
    },
    {
      id: 3,
      person: "person3",
    },
  ],
  completedTasks:[
    
  ]
};

const taskStateContext = createContext();
const taskDispatchContext = createContext();

export const useTaskState = () => useContext(taskStateContext);
export const useTaskDispatch = () => useContext(taskDispatchContext);

export default function TaskProvider({ children }) {
  const [state, dispatch] = useLocalStorageReducer(
    "tasks",
    initialState,
    taskReducer
  );

  return (
    <taskStateContext.Provider value={state}>
      <taskDispatchContext.Provider value={dispatch}>
        {children}
      </taskDispatchContext.Provider>
    </taskStateContext.Provider>
  );
}
