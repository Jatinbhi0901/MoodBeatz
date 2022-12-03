import { useState, useEffect } from "react";
import Player from "../components/Player";
import React from "react";
import style from "../css/trending.module.css";

function Rap91() {
  const [songs] = useState([
    {
        title: "Baazigar - DIVINE",
        artist: "DIVINE, Armani White",
        img_src: "./images/bazigar.jfif",
        src: "./music/Baazigar - DIVINE.mp3",
      },
      {
        title: "F16 - Raftaar",
        artist: "Raftaar, Sikander Kahlon, KALAMKAAR",
        img_src: "./images/f16.jfif",
        src: "./music/F16 - Raftaar.mp3",
      },
      {
        title: "Rap Ka Mausam",
        artist: "Raga",
        img_src: "./images/rapkamausam.jfif",
        src: "./music/Rap Ka Mausam - Raga.mp3",
      },
      {
        title: "I m Done",
        artist: "MC STAN",
        img_src: "./images/iamdone.jfif",
        src: "./music/I m Done - MC STAN.mp3",
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

export default Rap91;
