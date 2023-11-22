import React, { useEffect, useState } from "react";
import "./Row.scss";
import Axios from "../axios";
import { useNavigate } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Row({ title, fetchURL, isLarge = false, isRalate, data }) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    const imagePath = isLarge ? movies.backdrop_path : movies.poster_path;
    if (!imagePath) return;
    const a = (
      <div key={movies.id}>
        {imagePath && (
          <img
            onClick={(e) => {
              navigate(`/details/${movies.id}`);
            }}
            className={`row_poster ${isLarge && "row_posterLarge"} ${
              isRalate && "row_related_img"
            } `}
            key={movies.id}
            src={`${base_url}${imagePath}`}
            alt={movies.name}
          />
        )}
        <div className="related-info">
          {isRalate ? <h6> {movies.title}</h6> : ""}
          {isRalate ? <h6> {truncate(movies?.overview, 240)}</h6> : ""}
        </div>
      </div>
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
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 6,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`row_posters ${isRalate && "row_related"}`}>
        {!isRalate ? (
          <Slider {...settings}>
            {movies.map((movie) => generate(movie))}
          </Slider>
        ) : (
          movies.map((movie) => generate(movie))
        )}
      </div>
    </div>
  );
}

export default Row;
