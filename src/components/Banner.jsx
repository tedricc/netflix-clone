import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../Axios";
import requests from "../Requests";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    setTimeout(() => {
      fetchData();
    }, 1000);
    // fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header className="banner">
      {movie ? (
        <>
          <figure className="banner__background">
            <img
              className="banner__background--img"
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              alt=""
            />
          </figure>
          <div className="banner__container--background"></div>
          {/* <div className="banner__container--fade"></div> */}
          <div className="banner__container">
            <h1 className="banner__title">
              {movie?.title || movie?.name || movie?.original_title}
            </h1>
            <p className="banner__description">
              {truncate(movie?.overview, 200)}
            </p>
            <div className="banner__buttons">
              <button className="banner__button banner__button--play">
                <div className="banner__button--wrapper">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ltr-0 e1mhci4z1"
                    data-name="Play"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="banner__button--text">Play</p>
                </div>
              </button>
              <button className="banner__button banner__button--info">
                <div className="banner__button--wrapper">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ltr-0 e1mhci4z1"
                    data-name="CircleI"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p className="banner__button--text">More Info</p>
                </div>
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="banner__skeleton">
            <FontAwesomeIcon
              icon="spinner"
              className="banner__skeleton--loading"
            />
          </div>
        </>
      )}
    </header>
  );
}

export default Banner;
