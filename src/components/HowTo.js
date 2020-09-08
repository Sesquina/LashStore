import React from "react";
import Title from "./Title";
import "./style/mainsection.css";

function HowTo() {
  return (
    <div className="all-wrap">
      <div className="container">
      <Title name="How" title="To Apply Lashes"></Title>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JD0J0eCJz48"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default HowTo;
