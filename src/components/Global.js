import { useState, useEffect } from "react";
import Player from "../components/Player";
import React from "react";
import style from "../css/trending.module.css";

function Global() {
  const [songs] = useState([
    {
      title: "Heat Waves",
      artist: "Glass Animals",
      img_src: "./images/heatwaves.jfif",
      src: "./music/Heat-Waves(PagalWorld).mp3",
    },
    {
      title: "Stay",
      artist: "Justin Bieber",
      img_src: "./images/stay.jfif",
      src: "./music/Stay(PagalWorld.com.se).mp3",
    },
    {
      title: "Despacito",
      artist: "Luis Fonsi, Daddy Yankee",
      img_src: "./images/despasito.jfif",
      src: "./music/Despacito(PagalWorld).mp3",
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

export default Global;
