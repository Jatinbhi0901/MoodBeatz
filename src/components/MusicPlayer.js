import ReactAudioPlayer from "react-audio-player";
import style from "../css/musicplayer.module.css";
import img1 from "../images/moodbeatzlogo.png";
//...
import React from "react";

function MusicPlayer() {
  return (
    <section>
      <div>
        <img
          src={img1}
          alt="img"
          width="320px"
          height="70px"
          className={style.img1}
        />
      </div>
      <div className={style.musicplayer}>
        <ReactAudioPlayer
          src="my_audio_file.ogg"
          autoPlay
          controls
          className={style.musiccontrol}
        />
      </div>
    </section>
  );
}

export default MusicPlayer;
