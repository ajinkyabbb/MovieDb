import React from "react";
import { useTaskState } from "../context/context";
import { Divider, List, Paper } from "@material-ui/core";
import Task from "./Task";
export default function TaskList() {
  const { tasks } = useTaskState();
  return(
  <Paper>
    <List>
      {tasks.map((task, i) => (
        <React.Fragment key={i}>
          <Task {...task} key={task.id} />
          {i < tasks.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  </Paper>
  )
}
