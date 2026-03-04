import React, { useState, createContext } from "react";
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  RouterProvider
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import { Home } from "./LandingPage/Home";
import { AllMovieList } from "./Movie/AllMoviesList";
import MovieClick from "./Movie/MovieClick";
import { SearchBarMovie } from "./Searchbar/SearchBarMovie";
import NotFound from "./componant/NotFound";

export const locContext = createContext();

function App() {
  const [location, setLocation] = useState(
    localStorage.getItem("city") || ""
  );

  const [popup, setPopup] = useState(
    localStorage.getItem("city") ? false : true
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Navigate to="/explore/home" />} />
        <Route path="/explore/home" element={<Home />} />
        <Route path="/explore/home/:city" element={<Home />} />
        <Route path="/explore/movie/:city" element={<AllMovieList />} />
        <Route
          path="/explore/movie/:city/:movies/:id"
          element={<MovieClick />}
        />
        <Route
          path="/explore/search/:location"
          element={<SearchBarMovie />}
        />
        <Route path="*" element={<NotFound />} />
      </>
    )
  );

  return (
    <locContext.Provider value={{ location, setLocation, popup, setPopup }}>
      <RouterProvider router={router} />
    </locContext.Provider>
  );
}

export default App;