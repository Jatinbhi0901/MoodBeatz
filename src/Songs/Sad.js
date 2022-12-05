import React from 'react'
import Player from "../components/Player";
import { useState, useEffect } from "react";

function Sad() {
  const [songs] = useState([
    {
        title: "Judaai",
        artist: "Rekha Bhardwaj Arijit Singh , SachinJigar",
        img_src: "./images/judai.jpg",
        src: "./music/04 Judaai - Badlapur [Arijit Singh] 190Kbps.mp3",
      },
      {
        title: "Bandeya",
        artist: "Arijit Singh , Toshi Sabri",
        img_src: "./images/bandeya.jpg",
        src: "./music/01 Bandeya - Arijit Singh 320Kbps.mp3",
      },
      {
        title: "Maan Meri Jaan",
        artist: "King",
        img_src: "./images/man meri jan.jfif",
        src: "./music/Maan Meri Jaan(PagalWorld.com.se).mp3",
      },
      {
        title: "Asal Mein",
        artist: "Darshan Raval , Goldboy",
        img_src: "./images/asal mein.jpg",
        src: "./music/Asal Mein - Darshan Raval.mp3",
      },
      {
        title: "Tu Ne Jo Na Kaha",
        artist: "Pritam, Mohit Chauhan, Sandeep Srivastava",
        img_src: "./images/tune jo na kaha.jpg",
        src: "./music/03. Tu Ne Jo Na Kaha.mp3",
      },
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

export default Sad