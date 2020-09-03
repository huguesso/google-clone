import React from "react";
import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import Search from "./Search";
import {
  gmail,
  googleContacts,
  googleMaps,
  googleDrive,
  googlePhotos,
  playstore,
  googleSearch,
  googleTranslate,
  googleNews,
  googleCalendar,
  hangoutsMeet,
  googleAccount,
} from "../images";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Home() {
  const [{ isBoxVisible }, dispatch] = useStateValue();
  const toggleBox = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.TOGGLE_BoxVisible,
      isBoxVisible: !isBoxVisible,
    });
  };
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
          <div className="header_headerRightAllApp">
            <button
              type="button"
              className="header_iconApp"
              onClick={toggleBox}
            >
              <AppsIcon />
            </button>
            {isBoxVisible && (
              <div className="allApp">
                <div className="service_icons">
                  <img src={googleAccount} />
                  <p>Compte</p>
                </div>
                <div className="service_icons">
                  <img src={googleSearch} />
                  <p>Recherche</p>
                </div>
                <div className="service_icons">
                  <img src={googleMaps} />
                  <p>Maps</p>
                </div>
                <div className="service_icons">
                  <img src={playstore} />
                  <p>Playstore</p>
                </div>
                <div className="service_icons">
                  <img src={googleNews} />
                  <p>News</p>
                </div>
                <div className="service_icons">
                  <img src={gmail} />
                  <p>Gmail</p>
                </div>
                <div className="service_icons">
                  <img src={hangoutsMeet} />
                  <p>Meet</p>
                </div>
                <div className="service_icons">
                  <img src={googleContacts} />
                  <p>Contact</p>
                </div>
                <div className="service_icons">
                  <img src={googleDrive} />
                  <p>Drive</p>
                </div>
                <div className="service_icons">
                  <img src={googleCalendar} />
                  <p>Agenda</p>
                </div>
                <div className="service_icons">
                  <img src={googleTranslate} />
                  <p>Traduction</p>
                </div>
                <div className="service_icons">
                  <img src={googlePhotos} />
                  <p>Photos</p>
                </div>
              </div>
            )}
          </div>
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
      <div className="footer_block">
        <div className="footer_footerContry">
          <p>Cameroun</p>
        </div>
        <div className="home_footer">
          <div className="home_footerLeft">
            <Link>Publicite</Link>
            <Link>Entreprise</Link>
            <Link>A propos</Link>
            <Link>Comment fonctionne la recherche google</Link>
          </div>
          <div className="home_footerRight">
            <Link>Confidentialite</Link>
            <Link>Conditions</Link>
            <Link>Parametres</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
