import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./bookingForm.css";

const BookingForm = () => {
  const { showId } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const showName = localStorage.getItem("showName");

  const handleBooking = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    navigate(`/`);
  };

  return (
    <div className="booking-form-container">
      <h1 className="booking-form-title ">Book Ticket</h1>
      <h2>{showName}</h2>
      <form className="form-group" onSubmit={handleBooking}>
        <label className="form-label">
          Name:
          <input
            className="form-input "
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="form-label">
          Email:
          <input
            className="form-input "
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
