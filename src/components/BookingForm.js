import React, { useState } from 'react';

const slots = [
  '4am-6am', '6am-8am', '8am-10am',
  '10am-12pm', '12pm-2pm', '2pm-4pm',
  '4pm-6pm', '6pm-8pm', '8pm-10pm'
];

const BookingForm = ({ bookings, onBooking }) => {
  const [selectedTable, setSelectedTable] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedTable || !selectedSlot) {
      setError('Please select both a table and a time slot.');
      return;
    }

    const userBookings = Object.values(bookings).filter(booking => booking === selectedSlot).length;
    if (userBookings >= 3) {
      setError('You can only book up to 3 slots per day.');
      return;
    }

    if (bookings[selectedTable] === selectedSlot) {
      setError('This table is already booked for the selected time slot.');
      return;
    }

    onBooking(selectedTable, selectedSlot);
    setSelectedTable('');
    setSelectedSlot('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <div className="form-group">
        <label htmlFor="table">Table</label>
        <select id="table" value={selectedTable} onChange={(e) => setSelectedTable(e.target.value)}>
          <option value="">Select a table</option>
          {Array.from({ length: 20 }, (_, i) => (
            <option key={i} value={i + 1}>{i + 1}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="slot">Time Slot</label>
        <select id="slot" value={selectedSlot} onChange={(e) => setSelectedSlot(e.target.value)}>
          <option value="">Select a time slot</option>
          {slots.map((slot, index) => (
            <option key={index} value={slot}>{slot}</option>
          ))}
        </select>
      </div>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
