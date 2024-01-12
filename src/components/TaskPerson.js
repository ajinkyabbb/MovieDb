import {
  MenuItem,
  Paper,
  Select,
} from "@material-ui/core";
import React from "react";
import { useTaskState } from "../context/context";
import useChangePerson from "../hooks/useChangePerson";
import PersonTask from "./PersonTask";

export default function TaskPerson() {
  const { assignTasks } = useTaskState();
  const [person, handleChange] = useChangePerson("person1");


  return (
    <Paper style={{ margin: "1rem 0 ", padding: "0 1rem" }}>
      <form>
        <Select value={person} onChange={handleChange}>
          {assignTasks.map((task, i) => (
            <MenuItem value={task.person} key={i}>
              {task.person}
            </MenuItem>
          ))}
        </Select>
        <PersonTask person={person} />
      </form>
    </Paper>
  );
}
