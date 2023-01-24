import DogList from "./DogList";
import { MemoryRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";

const dogs = [{
    name: "TestDog",
    age: "1",
    src: "test",
    facts: [
        "test fact 1",
        "test fact 2"
    ]
}]

describe("test DogList component", function () {
    it("renders witout crashing", function () {
        render(<MemoryRouter>
            <DogList dogs={dogs}/>
        </MemoryRouter>);
    });

    it("renders dog name", function () {
        render(<MemoryRouter>
            <DogList dogs={dogs}/>
        </MemoryRouter>);

        expect(screen.getByText(dogs[0].name)).toBeInTheDocument();
    });
});