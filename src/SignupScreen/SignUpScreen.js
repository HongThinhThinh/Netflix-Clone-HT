import React, { useRef } from "react";
import "./SignUpScreen.scss";
import { auth } from "../firebase";
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
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
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
        console.log(authUser);
      })
      .catch((err) => alert(err.message));
  };
  return (
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
  );
}

export default SignUpScreen;
