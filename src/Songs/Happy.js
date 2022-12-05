import React from 'react'
import Player from "../components/Player";
import { useState, useEffect } from "react";

function Happy() {
  const [songs] = useState([
    {
        title: "Bijlee Bijlee",
        artist: "Harrdy Sandhu, B Praak, Jaani",
        img_src: "./images/bijlee.jpg",
        src: "./music/Bijlee Bijlee - Harrdy Sandhu.mp3",
      },
      {
        title: "Daru Badnam Kardi",
        artist: "Param Singh, Kamal Kahlon, Pratik Studio",
        img_src: "./images/daru badnam.jpg",
        src: "./music/Daru Badnam Kardi.mp3",
      },
      {
        title: "Sauda Khara Khara",
        artist: "Diljit Dosanjh, Sukhbir, Dhvani Bhanushali, Lijo George, Dj Chetas",
        img_src: "./images/sauda khara khara.jpg",
        src: "./music/Sauda Khara Khara - Good Newwz.mp3",
      },
      {
        title: "Illegal Weapon 2",
        artist: "Jasmine Sandlas, Garry Sandhu, Tanishk Bagchi, Intense",
        img_src: "./images/illegeal weapon.jpg",
        src: "./music/Illegal Weapon 2 - Street Dancer 3D.mp3",
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
    songs={songs}/>
    </div>
  )
}

export default Happy