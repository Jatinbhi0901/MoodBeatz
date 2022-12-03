import { useState, useEffect } from "react";
import Player from "../components/Player";
import React from "react";
import style from "../css/trending.module.css";

function HotPunjabi() {
  const [songs] = useState([
    {
        title: "Pasoori",
        artist: "Shae Gill, Ali Sethi, Coke Studio 14",
        img_src: "./images/pasoori.jfif",
        src: "./music/Pasoori - Shae Gill.mp3",
      },
      {
        title: "3 Peg",
        artist: "Sharry Maan",
        img_src: "./images/3peg.jfif",
        src: "./music/Sharry Maan - 3 Peg - 190Kbps.mp3",
      },
      {
        title: "Backbone",
        artist: "Harrdy Sandhu",
        img_src: "./images/backbone.jfif",
        src: "./music/Backbone - Harrdy Sandhu.mp3",
      },
      {
        title: "Koka",
        artist: "Jasbir Jassi, Badshah, Dhvani Bhanushali, Tanishk Bagchi",
        img_src: "./images/koka.jfif",
        src: "./music/Koka - Khandaani Shafakhana.mp3",
      }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default HotPunjabi;
