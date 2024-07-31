import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import "./AdminBookings.css";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "bookings"), (snapshot) => {
      const bookingData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBookings(bookingData);
    });

    return () => unsubscribe();
  }, []);

  const handleBookingUpdate = async (id, status) => {
    const bookingRef = doc(db, "bookings", id);
    await updateDoc(bookingRef, { status: status });
    // Remove the booking from state to update the UI immediately
    setBookings(currentBookings => currentBookings.filter(booking => booking.id !== id));
  };

  return (
    <div className="admin-bookings-wrapper">
      <h1>Booking Requests</h1>
      <div className="admin-bookings-list">
        {bookings.map((booking) => (
          <div key={booking.id} className="admin-booking-item">
            <h2>{booking.firstName} {booking.lastName}</h2>
            <p><strong>Email:</strong> {booking.email}</p>
            <p><strong>Phone:</strong> {booking.phoneNumber}</p>
            <p><strong>Message:</strong> {booking.message}</p>
            <p><strong>Preferred Contact:</strong> {booking.preferredContact}</p>
            <p><strong>Preferred Date:</strong> {booking.bookingDate}</p>
            <p><strong>Preferred Time:</strong> {booking.bookingTime}</p>
            <p><strong>Property ID:</strong> {booking.propertyId}</p>
            {booking.timestamp && booking.timestamp.seconds ? (
              <p><strong>Timestamp:</strong> {new Date(booking.timestamp.seconds * 1000).toLocaleString()}</p>
            ) : (
              <p><strong>Timestamp:</strong> Not Available</p>
            )}
            <button onClick={() => handleBookingUpdate(booking.id, "confirmed")} className="confirm-button">Confirm</button>
            <button onClick={() => handleBookingUpdate(booking.id, "rejected")} className="reject-button">Reject</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBookings;
