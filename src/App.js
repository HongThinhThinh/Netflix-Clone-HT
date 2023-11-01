import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Component/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
function App() {
  console.log("select User:" + selectUser);
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //login
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        console.log(userAuth);
      } else {
        //logout
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen></HomeScreen>}></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
