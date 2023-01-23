import axios from "axios";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

const BASE_API_URL = "http://localhost:5001";

/**
 * DogList: component to render a list of all current dogs.
 *
 * Props: N/A
 *
 * State:
 * - allDogs: array of all dogs, grabbed from API
 *
 * App -> DogList
 */
function DogList() {
    const [dogs, setDogs] = useState([]);

    async function getDogs() {
        const res = await axios.get(`${BASE_API_URL}/dogs`);
        setDogs(res.data);
    }

    if (dogs.length === 0) {
        getDogs();
    }

    // TODO: why doesn't the above work with no initial value for useState
    // plus check for '!dogs' in conditional? we get an infinite loop...

  return (
    <ul>
      {dogs.map((d, i) => (
        <li key={uuid()}>
          <Link to={`/dogs/${d.name}`}>
            <h3>{d.name}</h3>
            <img src={`../public/${d.src}.jpg`} alt={`${d.name}`} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default DogList;
