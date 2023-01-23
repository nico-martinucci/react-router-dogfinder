import axios from "axios";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

const BASE_API_URL = "http://localhost:5001";

const dogs = [
    {
        "name": "Whiskey",
        "age": 5,
        "src": "whiskey",
        "facts": [
            "Whiskey loves eating popcorn.",
            "Whiskey is a terrible guard dog.",
            "Whiskey wants to cuddle with you!"
        ]
    },
    {
        "name": "Duke",
        "age": 3,
        "src": "duke",
        "facts": [
            "Duke believes that ball is life.",
            "Duke likes snow.",
            "Duke enjoys pawing other dogs."
        ]
    },
    {
        "name": "Perry",
        "age": 4,
        "src": "perry",
        "facts": [
            "Perry loves all humans.",
            "Perry demolishes all snacks.",
            "Perry hates the rain."
        ]
    }
]

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
    const dogs = getAllDogs();
    const [ allDogs, setAllDogs ] = useState(dogs);
    
    async function getAllDogs() {
        const result = await axios.get(`${BASE_API_URL}/dogs`);

        console.log(result.data);
        return result.data;
    }

    return (
        <ul>
            {allDogs.map((d, i) => (
            <li key={uuid()}>
                <Link to={`/dogs/${d.name}`}> 
                    <h3>{d.name}</h3>
                    <img src={`../public/${d.src}.jpg`} alt={`picture of ${d.name}`} />
                </Link>
            </li>
            ))}
        </ul>
    )
}


export default DogList;