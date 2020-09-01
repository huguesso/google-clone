import React from "react";
import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="header__headerLest">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="header__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />

        <div className="home__inputContainer ">
          {/* saerch */}
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
