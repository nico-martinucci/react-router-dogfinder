import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./Nav.js"
import DogList from "./DogList.js"
import DogDetails from "./DogDetails.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/dogs" element={<DogList />}/>
          <Route path="/dogs/:name" element={<DogDetails />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
