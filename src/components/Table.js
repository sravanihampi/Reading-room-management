import React from 'react';

const Table = ({ table, bookings }) => {
  const isBooked = Object.keys(bookings).includes(table.toString());

  return (
    <div className={`table ${isBooked ? 'booked' : ''}`}>
      {table}
    </div>
  );
};

export default Table;
