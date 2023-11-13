import React, { useEffect, useState } from "react";
import "./Detail.scss";
import Axios from "../../axios";
import { useLocation } from "react-router";
import Nav from "../Nav/Nav";
import { FaPlay } from "react-icons/fa";
import Trailer from "../Trailer/Trailer";
import RelateMovies from "../RelateMovies/RelateMovies";
function Detail() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [show, setShow] = useState(false);
  const base_url = "https://image.tmdb.org/t/p/original";
  const location = useLocation();
  const id =
    location.pathname.split("/")[location.pathname.split("/").length - 1];
  useEffect(() => {
    getApi();
    setTimeout(() => setLoading(true), 150);
    return () => {};
  }, [id]);

  const getApi = async () => {
    try {
      const response = await Axios.get(
        `/movie/${id}?api_key=20511c7a0307a220750380e437afab73`
      );

      const cast = await Axios.get(
        `/movie/${id}/casts?api_key=20511c7a0307a220750380e437afab73`
      );
      const trailerID = await Axios.get(
        `/movie/${id}/videos?api_key=20511c7a0307a220750380e437afab73`
      );
      setTrailer(trailerID.data.results[0]?.key);
      setCast(cast.data);
      setMovies(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const playTrailer = () => {
    setShow(true);
  };

  const handleShowChange = (newShow) => {
    setShow(newShow);
  };
  return (
    <>
      {loading && (
        <>
          <Nav />
          <div
            className="details"
            style={{
              backgroundImage: `url(${base_url}${movies.poster_path})`,
            }}
          >
            <div className="details__content">
              <div className="details_top">
                <img src={`${base_url}${movies.backdrop_path}`} alt="img" />
                <h3 className="details__title">{movies.title}</h3>
              </div>
              <button onClick={playTrailer}>
                <span>
                  <FaPlay />
                </span>
                <span className="title">Play Trailer</span>
              </button>

              <div className="details__content--des">
                <div className="details__content--des-left">
                  <div className="wrap_rating">
                    <h5 className="rating">
                      {Math.round(movies.vote_average * 10).toString() +
                        "%" +
                        " Match"}
                    </h5>
                    <h5 className="tagLine">{movies.tagline}</h5>
                  </div>
                  <h4>{movies.overview}</h4>
                </div>
                <div className="details__content--des-right">
                  <div className="cast">
                    <span>Cast: </span>
                    {Array.isArray(cast.cast)
                      ? cast.cast
                          .slice(0, 3)
                          .map((cast) => (
                            <span key={cast.id}> {cast.name},</span>
                          ))
                      : ""}
                  </div>
                  <div className="genres">
                    <span>Genres: </span>
                    {movies && movies.genres && Array.isArray(movies.genres) ? (
                      movies.genres.map((genre) => (
                        <span key={genre.id}> {genre.name},</span>
                      ))
                    ) : (
                      <span>No genres available</span>
                    )}
                  </div>
                  <div className="release_date">
                    <span>Release Date: </span>
                    <span>{movies.release_date}</span>
                  </div>
                </div>
              </div>

              <div className="relateMovies">
                <RelateMovies id={id} />
              </div>
            </div>
            <div className="filter-details"></div>
          </div>
          {show && (
            <Trailer trailer={trailer} onShowChange={handleShowChange} />
          )}
        </>
      )}
    </>
  );
}

export default Detail;
