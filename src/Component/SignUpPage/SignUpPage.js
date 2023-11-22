import React, { useRef } from "react";
import { auth, writeUserData } from "../../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";

import "./SignUpPage.scss";
import { useNavigate } from "react-router";

function SignUpPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const userName = useRef(null);
  const PhoneNumber = useRef(null);
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      const authUser = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      if (authUser) {
        console.log(authUser);
        writeUserData(
          authUser.user.uid,
          userName.current.value,
          emailRef.current.value,
          PhoneNumber.current.value
        );
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="LoginScreen">
      <div className="LoginScreen__background">
        <img
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
          src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
          alt=""
        />
      </div>
      <div className="loginScreen_body">
        <div className="SignUpScreen">
          <div className="form-wrap">
            <form>
              <h1>Sign Up</h1>
              <input ref={userName} placeholder="User Name" type="text" />
              <input ref={emailRef} placeholder="Email" type="email" />
              <input ref={passwordRef} placeholder="Password" type="password" />
              <input ref={PhoneNumber} placeholder="Phone Number" type="text" />
              <button onClick={register}>Sign Up </button>
              <h4>
                <span className="gray">New to NetFlix? </span>
                <span
                  onClick={() =>
                    (window.location.href =
                      "https://www.facebook.com/thinh.hong.790256/")
                  }
                  className="link"
                >
                  Contact Here
                </span>
              </h4>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
