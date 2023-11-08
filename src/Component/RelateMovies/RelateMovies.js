import React from "react";
import "./RelateMovies.scss";
import Row from "../../Row/Row";
function RelateMovies({ id }) {
  return (
    <div>
      <Row
        title="More Like This"
        fetchURL={`https://api.themoviedb.org/3/movie/${id}/similar?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1`}
        isRalate
      />
    </div>
  );
}

export default RelateMovies;
