import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Component/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen/LoginScreen";
import { auth, getFireBaseData } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import ProfileScreen from "./Component/ProfileScreen/ProfileScreen";
import Detail from "./Component/Detail/Detail";
import SignUpPage from "./Component/SignUpPage/SignUpPage";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      console.log(userAuth);
      if (userAuth) {
        try {
          //login
          console.log("userAuth");
          console.log(userAuth);
          getFireBaseData(userAuth.uid).then((data) => {
            console.log("data ne");
            console.log(data);
            if (data) {
              dispatch(
                login({
                  uid: userAuth.uid,
                  email: userAuth.email,
                  phoneNumber: data.phoneNumber,
                  userName: data.username,
                })
              );
              console.log({
                uid: userAuth.uid,
                email: userAuth.email,
                phoneNumber: data.phoneNumber,
                userName: data.username,
              });
            }
          });
        } catch (e) {
          console.log(e);
        }
      } else {
        //logout
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="app">
      <Router>
        <Routes>
          {user && (
            <>
              <Route path="/" element={<HomeScreen />} />

              <Route path="/profile" element={<ProfileScreen />} />

              <Route path="/details/:movieId" element={<Detail />} />
            </>
          )}
          <Route path="/" element={<LoginScreen />} />
          <Route path="/signUpPage" element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
