import React, { useContext } from "react";
import { useTaskDispatch } from "../context/context";
import {
  IconButton,
  ListItem,
  ListItemText,
  Grid,
  Typography,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import useToggle from "../hooks/useToggle";
import EditTask from "./EditTask";
export default function Task({ task, completed, id, assignPerson, address }) {
  const dispatch = useTaskDispatch();
  const [isEditing, handleToggle] = useToggle(false);
  return (
    <>
      {isEditing ? (
        <EditTask
          task={task}
          id={id}
          assignPerson={assignPerson}
          address={address}
          handleToggle={handleToggle}
        />
      ) : (
        <ListItem style={{ borderBottom: "1px solid #ccc" }}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                style={{ wordWrap: "break-word", maxWidth: "200px" }}
              >
                {task}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="body2">
                <span>Assigned to:</span> {assignPerson}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography
                variant="body1"
                style={{ wordWrap: "break-word", maxWidth: "200px" }}
              >
                <span>Address:</span> {address}
              </Typography>
            </Grid>
          </Grid>
          <div>
            <IconButton
              aria-label="Delete"
              onClick={() => dispatch({ type: "DELETE", taskId: id })}
            >
              <Delete />
            </IconButton>
            <IconButton aria-label="Edit" onClick={handleToggle}>
              <Edit />
            </IconButton>
          </div>
        </ListItem>
      )}
    </>
  );
}
