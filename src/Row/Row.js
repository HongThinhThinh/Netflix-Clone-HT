import React, { useEffect, useState } from "react";
import "./Row.scss";
import Axios from "../axios";
function Row({ title, fetchURL, isLarge = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(fetchURL);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchURL]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movies) => (
          <img
            className={`row_poster ${isLarge && "row_posterLage"}`}
            key={movies.id}
            src={`${base_url}${
              isLarge ? movies.poster_path : movies.backdrop_path
            }`}
            alt={movies.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
