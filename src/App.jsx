// import { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";

// // Sample unavailable dates
// const unavailableDates = ["2024-12-25", "2024-12-31"];

// function AppointmentBooking() {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [message, setMessage] = useState("");

//   // Function to check if the date is unavailable
//   const isDateUnavailable = (date) => {
//     if (!date) return false;
//     const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
//     const dateStr = localDate.toISOString().split('T')[0];
//     return unavailableDates.includes(dateStr);
//   };

//   // Handle date change
//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     if (isDateUnavailable(date)) {
//       setMessage("This date is unavailable. Please select another date.");
//     } else {
//       setMessage("");
//     }
//   };

//   return (
//     <div className="appointment-booking">
//       <h2>Book an Appointment</h2>
//       <DatePicker
//         selected={selectedDate}
//         onChange={handleDateChange}
//         minDate={new Date()}
//         dayClassName={(date) => (isDateUnavailable(date) ? "unavailable" : undefined)}
//         dateFormat="yyyy-MM-dd"
//       />
//       {message && <p style={{ color: "red" }}>{message}</p>}
//     </div>
//   );
// }

// export default AppointmentBooking;

import React from 'react'
import Navbar from './pages/Navbar'

const App = () => {
  return (
    <>
    <Navbar/>
    </>
  )
}

export default App
