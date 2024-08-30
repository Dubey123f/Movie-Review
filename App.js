import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import SingleMovie from "./SingleMovie";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="movie/:id" element={<SingleMovie />} />
    </Routes>
  );
};

export default App;