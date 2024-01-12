import React, { useContext } from "react";
import {
  IconButton,
  ListItem,
  ListItemText,
  Grid,
  Typography,
  Paper,
} from "@material-ui/core";

export default function CompletedTaskList({
  task,
  completed,
  id,
  assignPerson,
  address,
}) {
  return (
    <Paper>
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
      </ListItem>
    </Paper>
  );
}
