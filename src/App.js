import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav.js";
import RouteList from "./RouteList";

const BASE_API_URL = "http://localhost:5001";

/** Site application.
 *
 * App -> literally everything (??)
 **/
function App() {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getDogs() {
    const res = await axios.get(`${BASE_API_URL}/dogs`);
    setDogs(res.data);
    setIsLoading((i) => false);
  }

  if (isLoading) {
    getDogs();
    return <p>Currently loading dogs...</p>;
  }

  return (
    <div className="App container">
      <BrowserRouter>
        <Nav dogs={dogs} />
        <RouteList dogs={dogs} />
      </BrowserRouter>
    </div>
  );
}

export default App;
