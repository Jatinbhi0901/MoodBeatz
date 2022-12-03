import React from "react";
import style from "../css/trending.module.css";

function Details(props) {
  return (
    <div className="c-player--details">
      <div className="details-img">
        <img src={props.song.img_src} alt="" className={style.mainimg}/>
      </div>
      <h3 className={style.detailstitle}>{props.song.title}</h3>
      <h4 className={style.detailsartist}>({props.song.artist})</h4>
    </div>
  );
}

export default Details;
