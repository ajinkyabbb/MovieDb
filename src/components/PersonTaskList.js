import { IconButton, ListItem, Grid, Typography } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { useTaskDispatch } from "../context/context";
import { Button } from "react-bootstrap";
import { Delete, Edit } from "@material-ui/icons";

export default function PersonTaskList({
  task,
  completed,
  id,
  assignPerson,
  address,
}) {
  const dispatch = useTaskDispatch();
  return (
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
        <Button
          aria-label="Delete"
          onClick={() => dispatch({ type: "COMPLETEDTASK", taskId: id })}
        >
          Done
        </Button>
      </div>
    </ListItem>
  );
}
