/* This is a component about the meme generator */
import React, { useState, useEffect } from "react";
import html2canvas from "html2canvas";
function Meme() {
  const url = "https://api.imgflip.com/get_memes";
  const [allMemes, setAllMemes] = useState([]);
  const [meme, setMeme] = useState({
    topInput: "",
    bottomInput: "",
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });
  const [image, setImage] = useState("");
  useEffect(function () {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value
    }));
  }

  function changeImage(event) {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const link = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: link
    }));
  }
  function saveImage() {
    const img = document.getElementById("download");
    html2canvas(img, { allowTaint: true, useCORS: true }).then(function (
      canvas
    ) {
      const imag = canvas.toDataURL("image/jpeg");
      return setImage(imag);
    });
  }
  return (
    <div className="meme-container">
      <div className="meme-form">
        <input
          id="topText"
          onChange={handleChange}
          name="topText"
          type="text"
          placeholder="Insert Top Text"
        />
        <input
          onChange={handleChange}
          id="bottomText"
          name="bottomText"
          type="text"
          placeholder="Insert Bottom Text"
        />
        <button onClick={changeImage} className="meme-button">
          Get a new image
        </button>
      </div>
      <div id="download" className="img-container">
        <img
        alt="meme-pic"
          crossOrigin="anonymous"
          className="meme-img"
          src={meme.randomImage}
        />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
      <button onClick={saveImage} className="meme-button space">
        Save Meme
      </button>
      {image.length !== 0 && (
        <a className="download" href={image} download={`${meme.topText}.jpg`}>
          Download
        </a>
      )}
    </div>
  );
}


function Footer(){
    return(
        <footer className ="footer">
            <p>The images are sourced from imgflip, I do not own any right to it. <br/>*Some images might not fit the Top/Bottom Text Meme format.</p>
            <hr/>
            <div>
                <a href="https://www.instagram.com/mag.legrand/" target="_blank">
                    <span>                        
                        <i className="fa fa-instagram"></i>
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/magmukendi/" target="_blank">
                    <span>                        
                        <i className="fa fa-linkedin"></i>
                    </span>
                </a>
                <a href="https://github.com/LeGrandMAG" target="_blank">
                    <span>                        
                        <i className="fa fa-github"></i>
                    </span>
                </a>
                <a href="https://twitter.com/MAGMukendi" target="_blank">
                    <span>                        
                        <i className="fa fa-twitter"></i>
                    </span>
                </a>
                <a href="https://www.facebook.com/mag.mukendi" target="_blank">
                    <span>                        
                        <i className="fa fa-facebook"></i>
                    </span>
                </a>
            </div>
                <p >© Mag Mukendi 2022</p>
        </footer>
    )
    
}

export  {Meme, Footer};
