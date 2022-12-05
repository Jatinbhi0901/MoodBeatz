import React from 'react'
import Player from "../components/Player";
import { useState, useEffect } from "react";


function Neutral() {
  const [songs] = useState([
    
      {
        title: "Bad Liar",
        artist: "Imagine Dragons",
        img_src: "./images/bad liar.jpg",
        src: "./music/Bad-Liar(PagalWorld).mp3",
      },
      {
        title: "One Kiss",
        artist: "	Calvin Harris & Dua Lipa",
        img_src: "./images/one kiss.jpg",
        src: "./music/One-Kiss(PagalWorld).mp3",
      },
      {
        title: "Maan Meri Jaan",
        artist: "King",
        img_src: "./images/man meri jan.jfif",
        src: "./music/Maan Meri Jaan(PagalWorld.com.se).mp3",
      },
      {
        title: "Zara Thehro",
        artist: "Armaan Malik, Tulsi Kumar , Amaal Mallik",
        img_src: "./images/zara thero.jpg",
        src: "./music/Zara Thehro - Armaan Malik.mp3",
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
  )
}

export default Neutral

