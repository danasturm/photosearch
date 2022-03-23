import React from "react";
import Tilt from 'react-parallax-tilt';
import camera from "../assets/camera.jpg"

const SearchPhoto = ({ searchPhotos, searchChange, query }) => {
    return(
        <>
      <form className="form" onSubmit={searchPhotos}>
        <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 75, width: 65 }} >
          <div className="Tilt">
            <img src={camera} alt='logo' />
          </div>
        </Tilt>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={"Search your favorite photo"}
          value={query}
          onChange={searchChange}/>
        <button type="submit" className="button">
          Search
        </button>
      </form>
  </>
    );
}

export default SearchPhoto;