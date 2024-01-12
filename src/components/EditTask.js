import {
  MenuItem,
  Paper,
  Select,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";
import React from "react";
import useInputState from "../hooks/useInputState";
import useChangePerson from "../hooks/useChangePerson";
import { useTaskState } from "../context/context";
import { useTaskDispatch } from "../context/context";
export default function EditTask({
  task,
  id,
  assignPerson,
  address,
  handleToggle,
}) {
  const [taskVal, setTask] = useInputState(task);
  const [personVal, handleChangePerson] = useChangePerson(assignPerson);
  const [addVal, handleChangeAdd] = useInputState(address);
  const { assignTasks } = useTaskState();
  const dispatch = useTaskDispatch();
  const isFormValid = taskVal.trim() !== "" && addVal.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      // If the form is not valid, you can show an error message or take appropriate action
      alert("Please fill in all required fields.");
    }else{
      dispatch({
        type: "UPDATETASK",
        taskId: id,
        newTask: taskVal,
        person: personVal,
        newAddress: addVal,
      });
      handleToggle();
    }
  };
  return (
    <form
      // onSubmit={}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <label>ID: {id}</label>
      <TextField
        margin="normal"
        value={taskVal}
        onChange={setTask}
        fullWidth
        autoFocus
        required
      />
      <Select value={personVal} onChange={handleChangePerson}>
        {assignTasks.map((task, i) => (
          <MenuItem value={task.person} key={i}>
            {task.person}
          </MenuItem>
        ))}
      </Select>
      <TextField
        margin="normal"
        value={addVal}
        onChange={handleChangeAdd}
        fullWidth
        autoFocus
        required
      />
      <Grid container spacing={4}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(e); 
            }}
          >
            Submit
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={(e) => {
              e.preventDefault();
              handleToggle();
            }}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
