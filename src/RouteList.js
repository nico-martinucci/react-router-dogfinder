import React from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import DogList from "./DogList.js";
import DogDetails from "./DogDetails.js";

/**
 * RouteList: component to render routes
 *
 * Props:
 * - dogs: array of dog objects [{dog}, ...]
 *
 * State:
 * - none
 *
 * App -> RouteList
 */
function RouteList({ dogs }) {
  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogs={dogs} />} />
      <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
      <Route path="/" element={<Navigate to="/dogs" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteList;
