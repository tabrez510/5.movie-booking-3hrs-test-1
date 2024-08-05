import { Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

const NewBooking = (props) => {
  const [name, setName] = useState("");
  const [seat, setSeat] = useState("");
  const [isEditClicked, setIsEditClicked] = useState(false);

  useEffect(() => {
    if (props.editData && props.editData.length !== 0) {
      setIsEditClicked(true);
      setName(props.editData[0].name);
      setSeat(props.editData[0].seat);
    } else {
      setIsEditClicked(false);
      setName("");
      setSeat("");
    }
  }, [props.editData]);
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const seatChangeHandler = (event) => {
    setSeat(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!name || !seat) {
      alert("Invalid input");
      return;
    }

    const isValidSeat = props.bookingData.find(
      (booking) => booking.seat === seat
    );
    if (isValidSeat) {
      alert("Seat has been already booked");
      return;
    }
    
    const booking = {
      id: uuidv4(),
      name: name,
      seat: seat,
    };
    props.onAddBooking(booking);
    setName("");
    setSeat("");
  };

  const editBookingHandler = () => {
    if (!name || !seat) {
      alert("Invalid input");
      return;
    }
    const isValidSeat = props.bookingData.find(
      (booking) => props.editData[0].seat !== seat && booking.seat === seat
    );
    if (isValidSeat) {
      alert("Seat has been already booked");
      return;
    }
    props.onEditBooking(props.editData[0].id, name, seat);
    setIsEditClicked(false);
    setName('');
    setSeat('');
  };

  return (
    <Paper elevation={12} sx={{ mt: "1rem", mb: "1rem", p: "1rem" }}>
      <form onSubmit={formSubmitHandler}>
        <Stack spacing={2} direction={"row"}>
          <TextField
            value={name}
            onChange={nameChangeHandler}
            type="text"
            id="username"
            label="User Name"
            variant="outlined"
          />
          <TextField
            value={seat}
            onChange={seatChangeHandler}
            type="number"
            id="seatno"
            label="Seat No."
            variant="outlined"
          />
          {!isEditClicked && (
            <Button type="submit" variant="contained">
              ADD
            </Button>
          )}
          {isEditClicked && (
            <Button variant="contained" onClick={editBookingHandler}>
              EDIT
            </Button>
          )}
        </Stack>
      </form>
    </Paper>
  );
};

export default NewBooking;
