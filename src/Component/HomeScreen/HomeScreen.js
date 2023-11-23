import "./HomeScreen.css";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
// import Row from "../../Row/Row";
import requests from "../../request";
import React, { Suspense } from "react";
import { Skeleton } from "antd";
const Row = React.lazy(() => import("../../Row/Row"));
function HomeScreen() {
  return (
    <div className="homeScreen">
      <Suspense fallback={<Skeleton />}>
        <Nav />
        <Banner />
        <Row title="Trending" fetchURL={requests.fetchTrending} isLarge />

        <Row title="Top Rated" fetchURL={requests.fetchTopRated} />

        <Row
          title="Netflix Originals"
          fetchURL={requests.fetchNetflixOriginals}
        />

        <Row
          title="Action Movie"
          fetchURL={requests.fetchActionMovies}
          isLarge
        />
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
      </Suspense>
    </div>
  );
}

export default HomeScreen;
