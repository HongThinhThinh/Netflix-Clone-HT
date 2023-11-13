import React, { useEffect, useState } from "react";
import "./Banner.scss";
import requests from "../../request";
import Axios from "../../axios";
import { useNavigate } from "react-router";
function Banner() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      let response = await Axios.get(requests.fetchTopRated);
      const movie =
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ];
      setMovie(movie);
    } catch (e) {
      console.log(e);
    }
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

        <div className="banner__description">
          {truncate(movie?.overview, 170)}
        </div>

        <div className="banner__buttons">
          <button
            onClick={(e) => {
              movie.id ? navigate(`/details/${movie.id}`) : navigate("/");
            }}
          >
            Play
          </button>
          <button>My List</button>
        </div>
      </div>

      <div className="banner__fade"></div>
    </header>
  );
}

export default Banner;
