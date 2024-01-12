import {
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@material-ui/core";
import React from "react";
import { useTaskState } from "../context/context";
import useChangePerson from "../hooks/useChangePerson";
import useInputState from "../hooks/useInputState";
import { Button } from "react-bootstrap";
import { useTaskDispatch } from "../context/context";

export default function TaskForm() {
  const { assignTasks } = useTaskState();
  const [person, handleChange] = useChangePerson("person1");
  const [taskValue, taskHandleInputChange, taskReset] = useInputState("");
  const [addressValue, addressHandleInputChange, addReset] = useInputState("");
  const dispatch = useTaskDispatch();
  const isFormValid = taskValue.trim() !== "" && addressValue.trim() !== "";
 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      // If the form is not valid, you can show an error message or take appropriate action
      alert("Please fill in all required fields.");
      return;
    }
  }

  
  return (
    <Paper style={{ margin: "1rem 0 ", padding: "0 1rem" }}>
      <form>
        <Grid container alignItems="center" spacing={6}>
          <Grid item>
            <TextField
              label="add New Task"
              value={taskValue}
              onChange={taskHandleInputChange}
              required
            />
          </Grid>
          <Grid item>
            <TextField
              label="add New Address"
              value={addressValue}
              onChange={addressHandleInputChange}
              required
            />
          </Grid>
          <Grid item>
            <Select value={person} onChange={handleChange}>
              {assignTasks.map((task, i) => (
                <MenuItem value={task.person} key={i}>
                  {task.person}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item>
            <Button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                dispatch({
                  type: "ADDTASK",
                  newTask: taskValue,
                  newAddress: addressValue,
                  person: person,
                });
                taskReset();
                addReset();
                handleSubmit(e)
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
