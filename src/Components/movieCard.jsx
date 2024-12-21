import React from "react";

const MovieCard = (Props) => {
  return (
    <div className="movie-card">
        <div className="Movie-container">
      
      <div className="movie-details">
        <h2>{Props.title}</h2>
        <p>
          {Props.year}, {Props.director}
        </p>
        <p className="duration">{Props.duration}</p>
        <p>{Props.genre}</p>
        <div className="social">
        <i className="fa-regular fa-share-from-square"></i>
        <i className="fa-regular fa-heart"></i>
        <i className="fa-regular fa-message"></i>
        </div>
        </div>

        <img src={Props.image} alt={Props.title} className="movie-image" />
      </div>
      <div className="description">
      <p>{Props.description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
