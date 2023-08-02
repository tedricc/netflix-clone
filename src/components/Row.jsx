import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../Axios";
import Movie from "./ui/Movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      {movies.length > 0 ? (
        <>
          <div className="row__container">
            {movies.map((movie) => (
              <Movie movie={movie} key={movie.id} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="row__skeleton">
            <FontAwesomeIcon
              icon="spinner"
              className="row__skeleton--loading"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Row;
