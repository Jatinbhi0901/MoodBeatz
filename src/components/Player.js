import React, { useState, useRef, useEffect } from "react";
import Controls from "./Controls";
import Details from "./Details";
import style from "../css/trending.module.css";
import Left from "./Left";

function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <>
    <Left/>
    <section className={style.mainplay}>
      <div className="c-player">
      
      <Details song={props.songs[props.currentSongIndex]} />
      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
      <audio
        className={style.media}
        src={props.songs[props.currentSongIndex].src}
        ref={audioEl}
        controls
      ></audio>
      <p className={style.nextup}>
        Next up:{" "}
        <span className={style.ne}>
          {props.songs[props.nextSongIndex].title} by{" "}
          {props.songs[props.nextSongIndex].artist}
        </span>
      </p>
    </div>
    </section>
    </>
  );
}

export default Player;
