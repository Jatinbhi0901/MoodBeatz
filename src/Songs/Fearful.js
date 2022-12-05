import React from 'react'
import Player from "../components/Player";
import { useState, useEffect } from "react";


function Fearful() {
  const [songs] = useState([
    
      {
        title: "Kar Har Maidaan Fateh",
        artist: "Sukhwinder Singh, Shreya Ghoshal, Vikram Montrose",
        img_src: "./images/kar har maidan fateh.jfif",
        src: "./music/02 Kar Har Maidaan Fateh - Sanju.mp3",
      },
      {
        title: "Jeete Hain Chal",
        artist: "Kavita Seth, Arun Ingle, Mandar Apte, Iyer, Archana Gore, Mayuri Patwardhan, Pragati Mukund Joshi, Vishal Khurana",
        img_src: "./images/jeete chl.jfif",
        src: "./music/01 Jeete Hain Chal - Neerja 190Kbps.mp3",
      },
      {
        title: "Soorma Anthem",
        artist: "Shankar Mahadevan , Shankar Ehsaan Loy",
        img_src: "./images/soorma.jfif",
        src: "./music/Soorma Anthem.mp3",
      },
      {
        title: "Besabriyaan",
        artist: "Armaan Malik, Amaal Malik",
        img_src: "./images/besabriya.jfif",
        src: "./music/Besabriyaan (MS Dhoni - The Untold Story).mp3",
      }, 
      {
        title: "Love You Zindagi",
        artist: "Amit Trivedi, Jasleen Kaur Royal",
        img_src: "./images/love u zindagi.jfif",
        src: "./music/01 Love You Zindagi (Jasleen Kaur) 190Kbps.mp3",
      },
      {
        title: "Ziddi Dil",
        artist: "Vishal Dadlani",
        img_src: "./images/zidi dil.jfif",
        src: "./music/01. Ziddi Dil.mp3",
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

export default Fearful

