import React from "react";
import style from "../css/login.module.css";
import img1 from "../images/moodbeatzlogo.png";
import img2 from "../images/Screenshot.png";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import loginschema from "../Validations/LoginValidation";
import axios from "axios";

function Login() {
  const history = useNavigate();

  function go() {
    history("/registration");
  }
  async function CreateUser(event) {
    event.preventDefault();
    let formData = {
      email: event.target[0].value,
      password: event.target[1].value,
    };
    const isValid = await loginschema.isValid(formData);
    if (isValid) {
      const res= await axios.post("http://localhost:5000/login/loginDetails",formData);
      swal({
        title: "Login Successful",
        text: "Good job!",
        icon: "success",
        button: "Ok",
      });
      console.log(formData);
    } else {
      swal({
        title: "Invalid Credentials",
        icon: "error",
        button: "Ok",
      });
      console.log(formData);
    }
  }
  return (
    <section className={style.bdy}>
      <section className={style.bd}>
      <section className={style.loginpage}>
        <div className={style.box1}>
          <br />
          <br />
          <img
            src={img1}
            alt="img"
            width="320px"
            height="70px"
            className={style.img1}
          />
          <h1>Welcome Back!</h1>
          <p>Please login to your account</p>

          <form onSubmit={CreateUser}>
            <input
              type="email"
              placeholder="Enter email"
              className={style.text}
            />
            <br />
            <input
              type="password"
              placeholder="Enter password"
              className={style.text}
            />
            <br />
            <Link to="">Forget Password</Link>
            <br />
            <button className={style.btn1}>Login</button>
            <button className={style.btn2} onClick={go}>
              Create Account
            </button>
          </form>
        </div>

        <div className={style.box2}>
          <img
            src={img2}
            alt="image"
            width="455px"
            height="498px"
            className={style.imgg1}
          />
        </div>
      </section>
      </section>
    </section>
  );
}

export default Login;
