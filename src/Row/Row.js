import React, { useEffect, useState } from "react";
import "./Row.scss";
import Axios from "../axios";
import { useNavigate } from "react-router";
function Row({ title, fetchURL, isLarge = false, isRalate, data }) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    fetchData();
  }, [fetchURL]);

  const fetchData = async () => {
    try {
      const request = await Axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    } catch (e) {
      navigate("/");
    }
  };
  const generate = (movies) => {
    const imagePath = isLarge ? movies.poster_path : movies.backdrop_path;
    if (!imagePath) return;
    const a = (
      <>
        <img
          onClick={(e) => {
            navigate(`/details/${movies.id}`);
          }}
          className={`row_poster ${isLarge && "row_posterLage"} ${
            isRalate && "row_related_img"
          } `}
          key={movies.id}
          src={`${base_url}${imagePath}`}
          alt={movies.name}
        />
        <div className="related-info">
          {isRalate ? <h6> {movies.title}</h6> : ""}
          {isRalate ? <h6> {truncate(movies?.overview, 240)}</h6> : ""}
        </div>
      </>
    );

    if (isRalate) {
      return (
        <div
          className={`${isRalate ? "wrap-row_related" : ""}`}
          key={movies.id}
        >
          {a}
        </div>
      );
    } else {
      return a;
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`row_posters ${isRalate && "row_related"}`}>
        {movies.map((movies) => generate(movies))}
      </div>
    </div>
  );
}

export default Row;
