import React from "react";
import Title from "./Title";
import "./style/mainsection.css";

import bf from "./img/bf.jpg";

function MainSection() {
  return (
    <div className="all-wrap">
      <div className="container">
        <Title name="Beauty" title="Is in the Eye of the Beholder"></Title>
        <div className="beforeafter">
          <img src={bf} alt="beforeafter"></img>
        </div>
        

      </div>
    </div>
  );
}

export default MainSection;
