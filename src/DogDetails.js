import React from "react";
import { useParams } from "react-router-dom";

/**
 * DogDetails: component to render the details of a specifi dog
 *
 * Props:
 * - dogs: array of dog objects [{dog}, ...]
 *
 * State:
 * - none
 *
 * App -> DogDetails
 */
function DogDetails({ dogs }) {
  const { name } = useParams();

  const [dog] = dogs.filter((d) => {
    return d.src === name;
  });

  return (
    <div className="DogDetails mt-3">
      <h3>{dog.name}</h3>
      <img src={`/${dog.src}.jpg`} alt={dog.name} style={{ height: 250 }} />
      <p>Age: {dog.age}</p>
      <ul className="list-group">
        {dog.facts.map((f) => (
          <li key={f} className="list-group-item">
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
