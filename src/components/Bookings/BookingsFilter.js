import { TextField } from "@mui/material";

const BookingFilter = (props) => {

  const inputHandler = (event) => {
    const value = event.target.value;
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
        props.onSearchBooking(value);
    } ,400)
  };

  return (
    <TextField
      onKeyUp={inputHandler}
      type="number"
      id="search"
      label="Search Seat No."
      variant="outlined"
    />
  );
};

export default BookingFilter;
