import React from "react";
import style from "../css/registration.module.css";
import swal from "sweetalert";
import registerschema from "../Validations/RegisterValidation";
import logo from "../images/moodbeatzlogo.png"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registration() {
  const history = useNavigate();

  function match() {
    history("/login");
  }
  async function CreateUser(event) {
    event.preventDefault();
    let formData = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      phnNo: event.target[2].value,
      email: event.target[3].value,
      loginid: event.target[4].value,
      password: event.target[5].value,
    };
    const isValid = await registerschema.isValid(formData);
    if (isValid) {
      const res= await axios.post("http://localhost:5000/register/newRegister",formData);
      console.log(res);
      swal({
        title: "Registration Successful",
        text: "Good job!",
        icon: "success",
        button: "Ok",
      }).then(match)
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
    <>
      <section className={style.bdy}>
        <div className={style.container2}></div>
        <section className={style.Information}>
          <div className={style.container1}>
            <div className={style.Box2}>
            <img
            src={logo}
            alt="image"
            className={style.imgg2}
            width="320px"
            height="70px"
          />
              <h1>Registration Form </h1>
              <form onSubmit={CreateUser}>
                <div className={style.abc}>
                  <span className={style.line1}>First Name</span>
                  <input
                    type="text"
                    className={style.fn}
                    placeholder="Enter First Name"
                  />

                  <span className={style.line2}>Last Name</span>
                  <input
                    type="text"
                    className={style.ln}
                    placeholder="Enter Last Name"
                  />
                </div>

                <div className={style.qwe}>
                  <span className={style.line3}>Contact No</span>
                  <input
                    type="text"
                    className={style.cn}
                    placeholder="Contact No"
                  />

                  <span className={style.line4}>Mail-ID</span>
                  <input
                    type="text"
                    className={style.co}
                    placeholder="Mail-ID"
                  />
                </div>

                <div className={style.asd}>
                  <span className={style.line5}>Login-Id</span>
                  <input
                    type="text"
                    className={style.LoginId}
                    placeholder="Login-Id"
                  />

                  <span className={style.line6}>Password</span>
                  <input
                    type="text"
                    className={style.password}
                    placeholder="Password"
                  />
                </div>

                <input type="submit" className={style.btn} value="Register" />
              </form>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Registration;
