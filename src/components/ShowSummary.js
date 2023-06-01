import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./showSummary.css";

const ShowSummary = () => {
  const { showId } = useParams();
  const [show, setShow] = useState("");

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then((response) => response.json())
      .then((data) => {
        setShow(data);
        localStorage.setItem("showName", data.name);
      })
      .catch((error) => console.log(error));
  }, [showId]);
  const imgSrc = show.image?.medium;
  return (
    <div className="show-summary-container">
      {imgSrc && (
        <img className="show-summary-image" src={imgSrc} alt={show.name} />
      )}
      <h1>{show.name}</h1>
      <p>{show.summary}</p>
      <Link to={`/booking/${showId}`}>
        <button className="book-ticket-button">Book Ticket</button>
      </Link>
    </div>
  );
};

export default ShowSummary;
