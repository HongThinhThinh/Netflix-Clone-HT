import React, { useRef } from "react";
import "./SignUpScreen.scss";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

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
  const navigate = useNavigate();
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
              <span onClick={() => navigate("/signUpPage")} className="link">
                SignUp Now
              </span>
            </h4>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignInScreen;
