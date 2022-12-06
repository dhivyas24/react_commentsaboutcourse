import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  }
});

function TableData({ data }) {
  const classes = useStyles();
  console.log("ruchi", data);

  return (
    <Paper>
      {data &&
        data.map((item, id) => (
          <Typography key={item.id}>
            <Typography align="left">{item.name.value}</Typography>
            <Typography align="left">{item.comment.value}</Typography>
          </Typography>
        ))}
    </Paper>
  );
}

export default TableData;
