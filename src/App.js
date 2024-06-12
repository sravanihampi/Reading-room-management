import React, { useState } from 'react';
import BookingForm from './components/BookingForm';
import Table from './components/Table';

const tablesCount = 20;

const App = () => {
  const [bookings, setBookings] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);

  const handleBooking = (table, slot) => {
    setBookings((prevBookings) => ({
      ...prevBookings,
      [table]: slot,
    }));
    setTotalAmount(totalAmount + 50);
  };

  return (
    <div className="container">
      <h1>Reading Room Management System</h1>
      <BookingForm bookings={bookings} onBooking={handleBooking} />
      <div className="table-grid">
        {Array.from({ length: tablesCount }, (_, i) => (
          <Table key={i} table={i + 1} bookings={bookings} />
        ))}
      </div>
      <h2>Total Amount: INR {totalAmount}</h2>
    </div>
  );
};

export default App;
