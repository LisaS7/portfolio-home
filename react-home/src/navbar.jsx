import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="site-title">
        Lisa Steven's Portfolio
      </Link>
      <ul>
        <CustomLink to="/projects">Projects</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const path = window.location.pathname;

  return (
    <li className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
