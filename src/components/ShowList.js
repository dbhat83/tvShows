import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./showList.css";

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="shows-list-container">
      <h1>Shows List</h1>
      {shows.map((show) => (
        <div className="show-card" key={show.show.id}>
          <img
            className="show-image"
            src={show.show.image.medium}
            alt={show.show.name}
          />
          <div className="show-details">
            <h3 className="show-name ">{show.show.name}</h3>
            <p className="show-summary">{show.show.summary}</p>
          </div>
          <Link to={`/summary/${show.show.id}`}>
            <button className="view-summary-button">Show Summary</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
