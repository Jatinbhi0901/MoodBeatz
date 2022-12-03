import React from "react";
import style from "../css/left.module.css";
import img1 from "../images/moodbeatzlogo.png";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Leftdown from "./Leftdown";

function Left() {
  function logout() {
    swal({
      title: "Logout Successfully",
      text: "Login to visit again",
      icon: "success",
      button: "Ok",
    });
  }

  return (
   <>
    <section className={style.left}>
      <div className={style.pa1}>
        <div className={style.shad}>
        <img
          src={img1}
          width="230px"
          height="70px"
          className={style.im}
          alt="logo"
        ></img>
        </div>
        <hr className={style.line}></hr>
        <h3 className={style.acc}>Account</h3>
        <hr className={style.line}></hr>
        
        <div className={style.profileleft}>
          <Link to="/homepage" className={style.iconimg}>
            <img
              src="https://img.icons8.com/external-febrian-hidayat-glyph-febrian-hidayat/64/000000/external-home-user-interface-febrian-hidayat-glyph-febrian-hidayat.png"
              alt="profile"
              width="25px"
              className={style.iconimg1}
            />
            Home
          </Link>
          <br></br>

          <Link to="" className={style.iconimg}>
            <img
              src="https://img.icons8.com/ios-filled/50/null/compact-camera.png"
              width="25px"
              className={style.iconimg1}
            />
            Camera
          </Link>
          <br></br>

          <Link to="/speechtotext" className={style.iconimg}>
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/null/microphone.png"
              alt="profile"
              width="25px"
              className={style.iconimg1}
            />
            Microphone
          </Link>
          <br></br>

          <Link to="/" className={style.iconimg} onClick={logout}>
            <img
              src="https://img.icons8.com/external-inkubators-glyph-inkubators/25/null/external-log-out-ecommerce-user-interface-inkubators-glyph-inkubators.png"
              alt="logout"
              width="25px"
              className={style.iconimg1}
            />
            Log Out
          </Link>
        </div>
        
      </div>
      <div className={style.straight}></div>
    </section>
   </>

  );
}

export default Left;
