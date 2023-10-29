import React, { useEffect, useState } from "react";
import "./Banner.scss";
import requests from "../../request";
import Axios from "../../axios";
function Banner() {
  const [movie, setMovie] = useState([]);
  //   useEffect(() => {
  //     console.log("giowf moi vo useEffect ne");
  //     const fetchData = async () => {
  //       console.log("vo fetchData r nhen");
  //       const response = await Axios.get(requests.fetchNetflixOriginals);
  //       console.log("data cua response ne : " + response.data);
  //       const movie =
  //         response.data.results[
  //           Math.floor(Math.random() * response.data.results.length)
  //         ];
  //       setMovie(movie);
  //     };
  //     console.log("đang trên hàm fetch Dâta chuẩn bị vô");
  //     fetchData();
  //   }, []);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await Axios.get(requests.fetchNetflixOriginals);
    console.log(response.data);
    const movie =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ];

    setMovie(movie);
  };

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <div className="wrap_h1">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
        </div>

        <div className="banner__buttons">
          <button>Play</button>
          <button>My List</button>
        </div>
        <div className="banner__description">
          {truncate(movie?.overview, 170)}
        </div>
      </div>
      <div className="banner__fade"></div>
    </header>
  );
}

export default Banner;
