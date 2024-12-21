import React from "react";
import "./movieList.css";
import movieData from "./MovieDetails.json";
import MovieCards from "./movieCard";

const MovieList = () => {
  return (<>
    <h1 className="heading">😎MOVIE CARD🤩</h1>
    <div className="movie-list">
      {movieData.map((movies, index) => (
        <MovieCards
          key={index}
          title={movies.title}
          year={movies.year}
          director={movies.director}
          duration={movies.duration}
          genre={movies.genre}
          description={movies.description}
          image={movies.imageUrl}
        />
      ))}
    </div>
    </>
  );
};

export default MovieList;
