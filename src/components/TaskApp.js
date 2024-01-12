import {
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { useLocation, useNavigate } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    margin: "auto",
  },
}));
export default function TaskApp() {
  const classes = useStyle();
  const location = useLocation();
  const navigate = useNavigate();
  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    // <TaskProvider>
    <Paper className={classes.paper}>
      <Grid container style={{backgroundColor:"#CCD1D1"}} justifyContent="center" alignItems="center" spacing={6}>
        <Grid item>
          <Typography>Tasks</Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined"
            className={`header-option py-3 ${
              pathMathRoute("/") &&
              "text-reset border border-5 border-start-0 border-top-0 border-end-0 border-danger fw-bolder"
            }`}
            onClick={() => navigate("/completeTasks")}
          >
            Completed Tasks
          </Button>
        </Grid>
      </Grid>
      <Divider />
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <TaskForm />
      </Grid>

      <Divider />
      <TaskList />
    </Paper>
    // </TaskProvider>
  );
}
