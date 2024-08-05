import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BookingItem from "./BookingItem";

const Bookings = (props) => {
  const editBooking = (id) => {
    props.onEditBooking(id);
  };

  const deleteBooking = (id) => {
    props.onDeleteBooking(id);
  };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }} elevation={12}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: "#1565C0",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#1565C0",
                  fontWeight: "bold",
                  color: "white",
                }}
                align="right"
              >
                Seat No.
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#1565C0",
                  fontWeight: "bold",
                  color: "white",
                }}
                align="right"
              >
                Action
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#1565C0",
                  fontWeight: "bold",
                  color: "white",
                }}
                align="right"
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.bookingData.map((row) => (
              <BookingItem
                key={row.id}
                id={row.id}
                name={row.name}
                seat={row.seat}
                onEditBooking={editBooking}
                onDeleteBooking={deleteBooking}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Bookings;
