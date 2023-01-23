import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ dogs }) {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/dogs">
          Home
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            {dogs.map((d) => {
              return (
                <li key={d.name} className="nav-item">
                  <NavLink className="nav-link" to={`/dogs/${d.src}`}>
                    {d.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
