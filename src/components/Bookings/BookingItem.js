import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";

const BookingItem = (props) => {
  const editBookingHandler = () => {
    props.onEditBooking(props.id);
  }
  
  const deleteBookingHandler = () => {
    props.onDeleteBooking(props.id);
  }
  return (
    <TableRow
      hover
      role="checkbox"
      key={props.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {props.name}
      </TableCell>
      <TableCell align="right">{props.seat}</TableCell>
      <TableCell align="right">
        <Button variant="outlined" onClick={editBookingHandler}>Edit</Button>
      </TableCell>
      <TableCell align="right">
      <Button variant="contained" onClick={deleteBookingHandler}>Delete</Button>
      </TableCell>
    </TableRow>
  );
};
export default BookingItem;
