import React, { useState, useEffect } from "react";
import { useTaskState } from "../context/context";
import { Divider, List, Paper } from "@material-ui/core";
import PersonTaskList from "./PersonTaskList";
export default function PersonTask({ person }) {
  const { tasks } = useTaskState();

  const [filteredTasks, setFilteredTasks] = useState([]);
 
  useEffect(() => {
    const newFilteredTasks = tasks.filter(
      (task) => task.assignPerson === person
    );
    setFilteredTasks(newFilteredTasks);
    console.log(tasks);
  }, [person,tasks]);

  return (
    <Paper>
      <List>
        {filteredTasks.map((task, i) => (
          <React.Fragment key={i}>
            <PersonTaskList {...task} key={task.id} />
            {i < filteredTasks.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}
