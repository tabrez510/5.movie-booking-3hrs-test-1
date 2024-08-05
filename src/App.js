import BookingFilter from "./components/Bookings/BookingsFilter";
import Bookings from "./components/Bookings/Bookings";
import NewBooking from "./components/NewBooking/NewBooking";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

function App() {
  const [bookingData, setBookingData] = useState([]);
  const [editData, setEditData] = useState([]);
  // console.log(editData)
  useEffect(() => {
    let oldData = localStorage.getItem("bookings");
    if (!oldData) {
      localStorage.setItem("bookings", JSON.stringify([]));
    } else {
      setBookingData(JSON.parse(oldData));
    }
  }, []);

  const AddBooking = (booking) => {
    let localData = localStorage.getItem("bookings");
    localData = [...JSON.parse(localData), booking];
    localStorage.setItem("bookings", JSON.stringify(localData));
    setBookingData(localData);
  };

  const searchBooking = (seatNo) => {
    const localData = JSON.parse(localStorage.getItem("bookings"));
    if (seatNo) {
      const filteredData = localData.filter(
        (booking) => booking.seat.indexOf(seatNo) === 0
      );

      setBookingData(filteredData);
    } else {
      setBookingData(localData);
    }
  };

  const getEditId = (id) => {
    // console.log(id);
    const data = bookingData.find((booking) => booking.id === id);
    // console.log(data);
    setEditData([data]);
  };

  const editBooking = (id, name, seat) => {
    bookingData.forEach((booking) => {
      if(booking.id === id){
        booking.name = name;
        booking.seat = seat;
      }
    })
    let newData = [...bookingData];
    localStorage.setItem('bookings', JSON.stringify(newData));
    setBookingData(newData);
  }

  const deleteBooking = (id) => {
    // console.log(id);
    const filteredData = bookingData.filter((booking) => booking.id !== id);
    localStorage.setItem("bookings", JSON.stringify(filteredData));

    setBookingData(filteredData);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Movie Booking</h1>
        <p>Total Booked: {bookingData.length}</p>
        <BookingFilter onSearchBooking={searchBooking} />
      </Box>

      <NewBooking onAddBooking={AddBooking} onEditBooking={editBooking} bookingData={bookingData} editData={editData}/>
      <Bookings
        bookingData={bookingData}
        onEditBooking={getEditId}
        onDeleteBooking={deleteBooking}
      />
    </>
  );
}

export default App;
