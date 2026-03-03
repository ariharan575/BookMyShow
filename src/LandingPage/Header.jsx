import React, { useContext, useState } from "react";
import SignIn from "../componant/SignIn";
import { LocationSearch } from "../Location/LocationSearch";
import { About } from "../componant/About";
import { locContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const { location, setLocation, popup, setPopup } = useContext(locContext);

  const [signShow, setSignShow] = useState(false);
  const [toggleShow, setToggleShow] = useState(false);

  function handlePopup() {
    setPopup(true);
  }

  function handleSearchNavigate() {
    navigate(`/explore/search/${location}`);
  }

  return (
    <>
      {/* DESKTOP HEADER */}
      <div className="container-fluid bg-white shadow-sm py-1.5 d-none d-md-block">
        <div className="container d-flex justify-content-between align-items-center">

          {/* Left */}
          <div className="d-flex align-items-center gap-3">

            <img
              src="/imges/logo2.jpg"
              alt="logo"
              width={110}
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/explore/home/${location}`)}
            />

            <div className="bg-light rounded-pill px-3 py-2 d-flex align-items-center cursor-pointer"
              onClick={handleSearchNavigate}
            >
              <i className="bi bi-search text-muted me-2"></i>
              <span className="text-muted small">
                Search for Movies, Events, Plays, Sports...
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="d-flex align-items-center gap-3">

            <button
              className="btn btn-light"
              onClick={handlePopup}
            >
              {location} <i className="bi bi-chevron-down"></i>
            </button>

            <button
              className="btn btn-danger px-3 "
              onClick={() => setSignShow(true)}
            >
              Sign In
            </button>

            <i
              className="bi bi-list fs-3"
              style={{ cursor: "pointer" }}
              onClick={() => setToggleShow(true)}
            ></i>

          </div>
        </div>
      </div>

      {/* MOBILE HEADER */}
      <div className="bg-white shadow-sm py-2 d-flex d-md-none align-items-center px-3">

        <img
          src="/imges/logo2.jpg"
          alt="logo"
          width={90}
          onClick={() => navigate(`/explore/home/${location}`)}
        />

        <div className="d-flex align-items-center gap-3">

          <div className="bg-light rounded-pill px-3 py-2 pe-5 d-flex align-items-center cursor-pointer"
              onClick={handleSearchNavigate}
            >
              <i className="bi bi-search text-muted me-2"></i>
              <span className="text-muted small">
                Search for Movies, Events, Plays, Sports...
              </span>
            </div>

          <i
            className="bi bi-geo-alt ps-3"
            onClick={handlePopup}
          ></i>

          <i
            className="bi bi-list fs-4"
            onClick={() => setToggleShow(true)}
          ></i>

        </div>
      </div>

      {/* SIGN IN MODAL */}
      {signShow && (
        <div
          className="position-fixed top-0 start-0 w-100 vh-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 1050,
          }}
          onClick={() => setSignShow(false)}
        >
          <SignIn close={() => setSignShow(false)} />
        </div>
      )}

      {/* LOCATION POPUP */}
      {popup && (
        <div
          className="position-fixed top-0 start-0 w-100 vh-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 1050,
          }}
          onClick={() => setPopup(false)}
        >
          <LocationSearch
            setLocation={setLocation}
            popup={popup}
            setPopup={setPopup}
          />
        </div>
      )}

      {/* TOGGLE MENU */}
      {toggleShow && (
        <About
          toggleShow={toggleShow}
          handleClose={() => setToggleShow(false)}
          setSignShow={setSignShow}
        />
      )}
    </>
  );
}