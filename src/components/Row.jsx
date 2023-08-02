import React, { useEffect, useRef, useState } from "react";
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

  const rowContainerRef = useRef();

  const handleScroll = (direction) => {
    const rowContainer = rowContainerRef.current;
    const scrollAmount = 400;

    if (direction === "left") {
      rowContainer.scrollLeft -= scrollAmount;
    } else if (direction === "right") {
      rowContainer.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      {movies.length > 0 ? (
        <>
          <button
            className="scroll__button scroll__button--left"
            onClick={() => handleScroll("left")}
          >
            <FontAwesomeIcon icon="angle-left" />
          </button>
          <div className="row__container" ref={rowContainerRef}>
            {/* increase to 20 if desired */}
            {movies.slice(0, 10).map((movie) => (
              <Movie movie={movie} key={movie.id} />
            ))}
          </div>
          <button
            className="scroll__button scroll__button--right"
            onClick={() => handleScroll("right")}
          >
            <FontAwesomeIcon icon="angle-right" />
          </button>
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
