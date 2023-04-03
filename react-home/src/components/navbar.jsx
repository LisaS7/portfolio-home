import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  background-color: var(--background);
  color: var(--text);
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem 8rem;

  & ul {
    display: flex;
    list-style: none;
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

  @media only screen and (max-width: 768px) {
    padding: 1rem 3rem;

    & ul {
      flex-direction: column;
    }

    & li {
      font-size: 0.75rem;
      padding: 0.5rem;
      margin: 0;
    }
  }
`;

const StyledTitle = styled(Link)`
  font-size: 2rem;

  @media only screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
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
        <CustomLink to="/tools">Tools</CustomLink>
      </ul>
    </StyledNavbar>
  );
}

// Custom link allows for highlighting the navbar item for the currently selected page
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link to={to} {...props}>
      <li className={isActive ? "active" : ""}>{children}</li>
    </Link>
  );
}
