import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
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
function DogList({ dogs }) {
  return (
    <div className="DogList d-flex justify-content-evenly align-items-center mt-3">
      {dogs.map((d) => (
        <div key={uuid()}>
          <Link className="text-decoration-none" to={`/dogs/${d.src}`}>
            <h3>{d.name}</h3>
          </Link>
          <img
            src={`/${d.src}.jpg`}
            alt={`${d.name}`}
            style={{ height: 250 }}
          />
        </div>
      ))}
    </div>
  );
}

export default DogList;
