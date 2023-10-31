import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
import Row from "../../Row/Row";
import requests from "../../request";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row title="Trending" fetchURL={requests.fetchTrending} isLarge />

      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title="Action Movie" fetchURL={requests.fetchActionMovies} isLarge />
      <Row
        title="Romance Movies"
        fetchURL={requests.fetchRomanceMovies}
        isLarge
      />
      <Row
        title="Comedy Movies"
        fetchURL={requests.fetchComedyMovies}
        isLarge
      />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
    </div>
  );
}

export default HomeScreen;
