import React, { useState } from "react";
import "./LoginScreen.scss";
import SignInScreen from "../SignupScreen/SignUpScreen";
function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="LoginScreen">
      <div className="LoginScreen__background">
        <img
          src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)}>Sign in</button>
        <div className="gradient"></div>
      </div>
      <div className="loginScreen_body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited Films, TV Programes and more</h1>
            <h2>Join today. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen_input">
              <input type="text" placeholder="Email Address" />
              <button onClick={() => setSignIn(true)}>GET STARTED</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
