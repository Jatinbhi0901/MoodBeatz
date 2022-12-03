import { useState, useEffect } from "react";
import Player from "../components/Player";
import React from "react";
import style from "../css/trending.module.css";

function Imran() {
  const [songs] = useState([
    {
        title: "Dil Ibaadat",
        artist: "Pritam,KK",
        img_src: "./images/dilibadat.jfif",
        src: "./music/Dil Ibaadat - Tum Mile 320Kbps.mp3",
      },
      {
        title: "Zara Sa",
        artist: "Pritam,KK",
        img_src: "./images/zarasa.jfif",
        src: "./music/01. Zara Sa.mp3",
      },
      {
        title: "Tu Hi Haqeeqat",
        artist: "Pritam, Javed Ali, Irshan Ashraf, Shadab",
        img_src: "./images/tuhihakikat.jfif",
        src: "./music/Tu Hi Haqeeqat - Tum Mile 320Kbps.mp3",
      },
      {
        title: "Lut Gaye",
        artist: "Jubin Nautiyal, Emraan Hashmi, Tanishk Bagchi, Manoj Muntashir",
        img_src: "./images/lutgaye.jfif",
        src: "./music/Lut Gaye - Jubin Nautiyal.mp3",
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

export default Imran;
