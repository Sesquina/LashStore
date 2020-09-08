import React from "react";
import lash from "./img/lash.jpeg";

import "../../src/components/style/about.css";



function About() {
  return (
    <div>
      <section>
        <div id="about-main">
          <div className="container">
            <div id="demobox">
              <h1>About Enchanted Lashes</h1>
              <hr />
              <p>
                Enchanted Lashes was born out of a fascination with false
                eyelashes, an entrepreneurial spirit,
                <br /> and the desire to bring luxury mink eyelashes to women
                everywhere, without an exorbitant price tag. Located in New York
                City, we have been in the false eyelash business since 2008 and
                have watched the trend for wearing false eyelashes grow. <br />
                Today, false eyelashes are a must have fashion accessory, and an
                easy way to enhance the beauty of your eyes. <br />
                We chose the name Enchanted Lashes because we want our lashes to
                be a symbol of beauty and strength in the eyelash world.
              </p>
              <p>
                At Enchanted Lashes, you can expect superior customer service.
                Our goal is to be the leaders in the mink eyelash market, and to
                provide the highest quality mink lashes, at affordable prices to
                women all around the world.
              </p>
              <img src={lash} alt="lash"></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
