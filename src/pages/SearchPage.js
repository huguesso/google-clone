import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import { Response } from "../response";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RoomIcon from "@material-ui/icons/Room";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ImageIcon from "@material-ui/icons/Image";
import DescriptionIcon from "@material-ui/icons/Description";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // LIVE API CALL
  const { data } = useGoogleSearch(term);
  // const data = Response;
  console.log(data);
  // https://developers.google.com/custom-search/v1/using_rest

  // https://cse.google.com/cse/create/new

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option active">
                <SearchIcon />
                <Link to="/all">All </Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News </Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images </Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">shopping </Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">maps </Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">more </Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings </Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          {/* <p className="searchPage__resultCount">
            About {data?.searchInformation} result (
            {data?.searchInformation.formattedSearchTime}
            seconds) from {term}
          </p> */}

          {data?.items.map((item) => (
            <div className="searchPage_result">
              <a href={item.link} className="displaylink">{item.displayLink}</a>
              <a cl className="searchPage_resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && (
                  <img
                    className="searchPage_resultImage"
                    src={
                      item.pagemap?.cse_image?.length > 0 &&
                      item.pagemap?.cse_image[0]?.src
                    }
                    alt=""
                  />
                )}
              </a>
              <a href={item.link} className="searchPage_resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage_resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
