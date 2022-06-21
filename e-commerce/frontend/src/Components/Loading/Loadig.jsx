import React from "react";
import "./Loading.css";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

export default function LoadingAnimation() {
  return (
    <div className="Main">
      <div className="container">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
        <p>
          Loading Gamers Paradise
          <HourglassEmptyIcon />
        </p>
      </div>
    </div>
  );
}
