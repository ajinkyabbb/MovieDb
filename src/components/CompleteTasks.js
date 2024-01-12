import React from "react";
import { useTaskState } from "../context/context";
import { Paper, List, Divider, Grid, Button } from "@material-ui/core";
import { useLocation, useNavigate } from "react-router-dom";
import CompletedTaskList from "./CompleteTaskList";

export default function CompletedTasks() {
  const { completedTasks } = useTaskState();
  const location = useLocation();
  const navigate = useNavigate();
  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  
  return (
    <Paper>
      <Grid
        container
        spacing={6}
        justifyContent="center"
        alignItems="center"
        style={{ height: "94px", backgroundColor: "#CCD1D1", padding: "20px" }}
      >
        <Button
          variant="outlined"
          style={{marginTop:'10px'}}
          color="primary"
          className={`header-option py-3 ${
            pathMathRoute("/TaskApp") &&
            "text-reset border border-5 border-start-0 border-top-0 border-end-0 border-danger fw-bolder"
          }`}
          onClick={() => navigate("/TaskApp")}
        >
          Tasks
        </Button>
      </Grid>
      <List style={{ marginTop: "60px" }}>
        {completedTasks.length ? (
          completedTasks.map((task, i) => (
            <React.Fragment key={i}>
              <CompletedTaskList {...task} key={task.id} />
              {i < completedTasks.length - 1 && <Divider />}
            </React.Fragment>
          ))
        ) : (
          <p>No task done yet...!</p>
        )}
      </List>
    </Paper>
  );
}
