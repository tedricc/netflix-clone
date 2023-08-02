import React from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../Requests";

function Home() {
  return (
    <div className="home">
      <Nav />
      <Banner />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      {/* <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} /> */}
    </div>
  );
}

export default Home;
