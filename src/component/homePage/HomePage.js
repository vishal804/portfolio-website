import React from "react";
import "./homePage.css"
import { Header } from "../";
import { ProfilePage } from "../profilePage/ProfilePage";

const HomePage = () => {
  return (
    <div className="home-page-style">
      <Header />
     <ProfilePage />
    </div>
  );
};

export { HomePage };
