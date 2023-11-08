import React from "react";
import "./Trailer.scss";
import { HiArrowLeft } from "react-icons/hi2";
function Trailer({ trailer, onShowChange }) {
  const handleClose = () => {
    onShowChange(false);
  };
  return (
    <div>
      <div className="trailer">
        <iframe
          src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=0&loop=1&playlist=${trailer}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
          allowFullScreen
        ></iframe>
        <div className="trailer__icon " onClick={handleClose}>
          <HiArrowLeft />
        </div>
      </div>
    </div>
  );
}

export default Trailer;
