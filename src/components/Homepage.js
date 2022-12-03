import React from "react";
import Left from "./Left";
import style from "../css/homepage.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import q0 from "../images/items/trending.jpg";
import q2 from "../images/items/hothindi.jfif";
import q1 from "../images/items/top.jpg";
import q3 from "../images/items/hotpunjabi.jfif";
import q4 from "../images/items/rap91.jfif";
import q5 from "../images/items/imran.jfif";


function Homepage() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);
  const [isHovering5, setIsHovering5] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleMouseOver2 = () => {
    setIsHovering2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovering2(false);
  };

  const handleMouseOver3 = () => {
    setIsHovering3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovering3(false);
  };

  const handleMouseOver4 = () => {
    setIsHovering4(true);
  };

  const handleMouseOut4 = () => {
    setIsHovering4(false);
  };
  const handleMouseOver5 = () => {
    setIsHovering5(true);
  };

  const handleMouseOut5 = () => {
    setIsHovering5(false);
  };
  const history = useNavigate();
  function ok1() {
    history("/trending");
  }
  function ok2() {
    history("/global");
  }
  function ok3() {
    history("/hothindi");
  }
  function ok4() {
    history("/hotpunjabi");
  }
  function ok5() {
    history("/rap91");
  }
  function ok6() {
    history("/imran");
  }



  return (
    <>
      <Left />
      <section className={style.list0}>
        <div className={style.songcard0}>
          <img
            src={q0}
            className={style.border0}
            alt=""
            width="250px"
            height="230px"
          />
          <h2 className={style.headingp}>PLAYLIST</h2>
          <p className={style.para0}>Trending Playlist 2022</p>
          <p className={style.headingpx}>
            Perfect playlist for trending songs. Listen Now!
          </p>
          <button className={style.pl} onClick={ok1}>Play</button>
        </div>
      </section>




      
      <section className={style.mcon}>
        <section className={style.list1}>
          <div
            className={style.songcard1}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <img
              src={q1}
              className={style.border1}
              alt=""
              width="195px"
              height="140px"
            />
            <h2 className={style.heading}>Top 50 global</h2>
            <p className={style.para}>
              Your daily update of most played tracks right now.
            </p>
            {isHovering && (
              <div>
                <button onClick={ok2} className={style.play1}>
                  {/* <img src={play} width="50px" /> */}
                  <img src="https://img.icons8.com/flat-round/64/000000/play--v1.png" />
                </button>
              </div>
            )}
          </div>

          <div
            className={style.songcard}
            onMouseOver={handleMouseOver2}
            onMouseOut={handleMouseOut2}
          >
            <img
              src={q2}
              className={style.border1}
              alt=""
              width="195px"
              height="140px"
            />
            <h2 className={style.heading}>Hot Hits Hindi</h2>
            <p className={style.para}>
              Best Bollywood love songs from last 10 years.
            </p>
            {isHovering2 && (
              <div>
                <button onClick={ok3} className={style.play1}>
                  <img src="https://img.icons8.com/flat-round/64/000000/play--v1.png" />
                </button>
              </div>
            )}
          </div>

          <div
            className={style.songcard}
            onMouseOver={handleMouseOver3}
            onMouseOut={handleMouseOut3}
          >
            <img
              src={q3}
              className={style.border1}
              alt=""
              width="195px"
              height="140px"
            />
            <h2 className={style.heading}>Hot Hits punjabi </h2>
            <p className={style.para}>
              Stay updated with all new Punjabi music!
            </p>
            {isHovering3 && (
              <div>
                <button onClick={ok4} className={style.play1}>
                  <img src="https://img.icons8.com/flat-round/64/000000/play--v1.png" />
                </button>
              </div>
            )}
          </div>

          <div
            className={style.songcard}
            onMouseOver={handleMouseOver4}
            onMouseOut={handleMouseOut4}
          >
            <img
              src={q4}
              className={style.border1}
              alt=""
              width="195px"
              height="140px"
            />
            <h2 className={style.heading}>Rap 91</h2>
            <p className={style.para}>Best Hip-Hop from India.</p>
            {isHovering4 && (
              <div>
                <button onClick={ok5} className={style.pla}>
                  <img src="https://img.icons8.com/flat-round/64/000000/play--v1.png" />
                </button>
              </div>
            )}
          </div>

          <div
            className={style.songcard}
            onMouseOver={handleMouseOver5}
            onMouseOut={handleMouseOut5}
          >
            <img
              src={q5}
              className={style.border1}
              alt=""
              width="195px"
              height="140px"
            />
            <h2 className={style.heading}>Imran Hashmi</h2>
            <p className={style.para}>Best Hip-Hop from India.</p>
            {isHovering5 && (
              <div>
                <button onClick={ok6} className={style.pla}>
                  <img src="https://img.icons8.com/flat-round/64/000000/play--v1.png" />
                </button>
              </div>
            )}
          </div>
        </section>
      </section>
    </>
  );
}

export default Homepage;
