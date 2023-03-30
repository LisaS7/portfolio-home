import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  background-color: var(--background);
  color: var(--text);
  justify-content: space-between;
  align-items: stretch;
  gap: 2rem;
  padding: 3rem 8rem;

  & ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    margin: 0;
  }

  & li {
    border-radius: 20px;
    padding: 1rem 2rem;
  }

  & a {
    color: inherit;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
  }

  & li.active {
    background-color: var(--primary);
  }

  & li:hover {
    background-color: var(--secondary);
  }
`;

const StyledTitle = styled(Link)`
  font-size: 2.5rem;
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledTitle to="/" className="site-title">
        Lisa Steven's Portfolio
      </StyledTitle>
      <ul>
        <CustomLink to="/projects">Projects</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </StyledNavbar>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
