import React from 'react'
import Player from "../components/Player";
import { useState, useEffect } from "react";

function Surprised() {
  const [songs] = useState([
    {
        title: "Zara Thehro",
        artist: "Armaan Malik, Tulsi Kumar , Amaal Mallik",
        img_src: "./images/zara thero.jpg",
        src: "./music/Zara Thehro - Armaan Malik.mp3",
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
  )
}

export default Surprised