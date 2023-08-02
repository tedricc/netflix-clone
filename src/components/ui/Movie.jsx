import React from "react";
import "./Movie.css";

function Movie({ movie }) {
  return movie ? (
    <div className="movie">
      <figure className="movie__img--wrapper">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt=""
          className="movie__img"
        />
      </figure>
    </div>
  ) : (
    <></>
  );
}

export default Movie;
