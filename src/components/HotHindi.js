import { useState, useEffect } from "react";
import Player from "../components/Player";
import React from "react";
import style from "../css/trending.module.css";

function HotHindi() {
  const [songs] = useState([
    {
        title: "Chand Baliyan",
        artist: "Aditya A",
        img_src: "./images/chandbaliyan.jfif",
        src: "./music/Chaand Baaliyan - Aditya A.mp3",
      },
      {
        title: "Deva Deva",
        artist: "Arijit Singh, Amitabh Bhattacharya, Jonita Gandhi, Pritam",
        img_src: "./images/devadeva.jfif",
        src: "./music/Deva Deva - Brahmastra.mp3",
      },
      {
        title: "Dance Meri Rani",
        artist: "Guru Randhawa, Zahrah S Khan, Tanishk Bagchi, Nora Fatehi",
        img_src: "./images/dancemerirani.jfif",
        src: "./music/Dance Meri Rani - Guru Randhawa.mp3",
      },
      {
        title: "Najaa",
        artist: "Pav Dharia, Nikhita Gandhi, Tanishk Bagchi",
        img_src: "./images/naja.jfif",
        src: "./music/Najaa - Sooryavanshi.mp3",
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

export default HotHindi;
