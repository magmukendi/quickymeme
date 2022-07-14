import "./css/styles.css";

import Navbar from "./component/Navbar";
import {Meme, Footer} from "./component/Meme";
//import React, { Component, useState, useEffect } from "react";

function Page() {
  /* The jokeElements displays a list of joke and their punclines.*/
  /*const jokeElements = jokeData.map((joke) => (
    <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
  )); */

  /*The toggle function will toggle the box on and off */

  /* This variable will return a list of box components. */
  /*const squareElements = squares.map((square) => (
    <Box toggle={toggle} key={square.id} on={square.on} id={square.id} />
  ));*/

  return (
    <div className="oss">
      
      <div className="bg">
        <Navbar/>
        <Meme />
        <Footer/>
      </div>
    </div>
  );
}

export default Page;
