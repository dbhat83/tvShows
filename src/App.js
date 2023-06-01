import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ShowList from "./components/ShowList";
import ShowSummary from "./components/ShowSummary";
import BookingForm from "./components/BookingForm";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/summary/:showId" element={<ShowSummary />} />
          <Route path="/booking/:showId" element={<BookingForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
