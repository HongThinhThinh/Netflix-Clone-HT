import React, { useRef } from "react";
import "./SignUpScreen.scss";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        toast(authUser);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        toast.info(authUser);
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <>
      <div className="SignUpScreen">
        <div className="form-wrap">
          <form>
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder="Email" type="email" />
            <input ref={passwordRef} placeholder="Password" type="password" />
            <button onClick={signIn}>Sign In</button>
            <h4>
              <span className="gray">New to NetFlix? </span>
              <span onClick={register} className="link">
                SignUp Now
              </span>
            </h4>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpScreen;
