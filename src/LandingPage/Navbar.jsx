import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { locContext } from "../App";

export const Navbar = () => {
  const { location } = useContext(locContext);
  const cityName = location || localStorage.getItem("city") || "chennai";

  const navItemsLeft = [
    { name: "Movies", path: `/explore/movie/${cityName}` },
    { name: "Stream", path: `/explore/movie/${cityName}` },
    { name: "Events", path: "/event" },
    { name: "Plays", path: "/plays" },
    { name: "Sports", path: "/sports" },
    { name: "Activities", path: "/activities" },
  ];

  const navItemsRight = [
    { name: "List Your Show", path: "/listyourshow" },
    { name: "Corporates", path: "/corporates" },
    { name: "Offers", path: "/offers" },
    { name: "Gift Cards", path: "/giftcards" },
  ];

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <div className="bg-light border-top border-bottom d-none d-md-block">
        <div className="container d-flex justify-content-between align-items-center py-2">

          {/* LEFT LINKS */}
          <div className="d-flex gap-4">
            {navItemsLeft.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `text-decoration-none small  ${
                    isActive ? "text-danger" : "text-dark"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* RIGHT LINKS */}
          <div className="d-flex gap-2.5">
            {navItemsRight.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `text-decoration-none small ${
                    isActive ? "text-danger fw-semibold" : "text-muted"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <div className="bg-light border-top border-bottom d-md-none">
        <div className="container d-flex justify-content-between align-items-center py-2 overflow-auto">

          <div className="d-flex gap-3 flex-nowrap">

            {navItemsLeft.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `text-decoration-none small ${
                    isActive ? "text-danger fw-semibold" : "text-dark"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <NavLink
              to="/all"
              className="text-decoration-none small text-muted"
            >
              View All
            </NavLink>

          </div>

        </div>
      </div>
    </>
  );
};