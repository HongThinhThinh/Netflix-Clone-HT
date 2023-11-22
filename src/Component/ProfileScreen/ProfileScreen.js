import React from "react";
import "./ProfileScreen.scss";
import Nav from "../Nav/Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/counter/userSlice";
import { auth } from "../../firebase";
import { useNavigate } from "react-router";
function ProfileScreen() {
  const user = useSelector(selectUser);
  const nav = useNavigate();
  return (
    <div className="profile-screen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Your Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.userName}</h2>
            <h2>{user.email}</h2>
            <h2>{user.phoneNumber}</h2>
            <div className="profileScreen__plans">
              <button
                onClick={async () => {
                  await auth.signOut();
                  nav("/");
                }}
                className="profileScreen__signOut"
              >
                SignOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
