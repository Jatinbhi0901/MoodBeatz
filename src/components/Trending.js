import { useState, useEffect } from "react";
import Player from "../components/Player";
import React from "react";
import style from "../css/trending.module.css";

function Trending() {
  const [songs] = useState([
    {
      title: "Kesariya",
      artist: "Pritam, Arijit Singh, Amitabh Bhattacharya",
      img_src: "./images/kesariya.jfif",
      src: "./music/Kesariya(PagalWorld.com.se).mp3",
    },
    {
      title: "Ishq Wala Love",
      artist: " Shekhar Ravjiani, Neeti Mohan, Salim Merchant",
      img_src: "./images/ishqwalalove.jfif",
      src: "./music/Ishq Wala Love (Student Of The Year).mp3",
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
      title: "Raanjhanaa",
      artist: "A.R. Rahman",
      img_src: "./images/ranjhana.jpg",
      src: "./music/01 Title Track.mp3",
    },
    
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

export default Trending;
