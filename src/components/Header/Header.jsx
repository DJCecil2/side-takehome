import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  const menu = [
    {
      path: "/",
      exact: true,
      label: "Property Listings",
    },
    {
      path: "/saved",
      label: "Saved Listings",
    },
  ];

  return (
    <header className="Header">
      <ul>
        {menu.map(({ path, exact, label }) => (
          <li key={path}>
            <NavLink to={path} exact={exact} activeClassName="active">
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
