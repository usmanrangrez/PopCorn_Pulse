import React from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleMovie from "./components/SingleMovie";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<SingleMovie />} />
      </Routes>
    </>
  );
};

export default App;
