import React, { useState } from "react";
import "./Search.css";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button>
          <MicIcon />
        </Button>
      </div>
      {!hideButtons ? (
        <>
          <div className="search__buttons">
            <Button variant="outlined" onClick={search}>
              Google search
            </Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
          </div>
          <div className="search__language">
            Google disponible en :{" "}
            <span className="language__section">
              {" "}
              <Link>English</Link>
            </span>
          </div>
        </>
      ) : (
        <div className="search__buttons">
          <Button
            variant="outlined"
            onClick={search}
            className="search_buttonsHidden"
          >
            Google search
          </Button>
          <Button variant="outlined" className="search_buttonsHidden">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
