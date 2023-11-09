import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Component/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import ProfileScreen from "./Component/ProfileScreen/ProfileScreen";
import Detail from "./Component/Detail/Detail";
function App() {
  const user = useSelector(selectUser);
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
      } else {
        //logout
        dispatch(logout());
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
            <Route
              exact
              path="/profile"
              element={<ProfileScreen></ProfileScreen>}
            ></Route>
            <Route
              exact
              path="/details/:movieId"
              element={<Detail></Detail>}
            ></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
