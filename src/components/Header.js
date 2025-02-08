// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = styled.nav`
  background-color: rgba(255, 255, 255, 0.95);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #d96b74; /* Accessible accent color */
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 70px;
    left: 0;
    background-color: rgba(255, 255, 255, 0.95);
    padding-bottom: 1rem;
  }
`;

// Use Link for separate pages and anchor tags for in-page sections
const NavLinkStyled = styled(Link)`
  color: #333;
  margin: 0 1rem;
  font-weight: 500;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: #d96b74;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const NavAnchor = styled.a`
  color: #333;
  margin: 0 1rem;
  font-weight: 500;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: #d96b74;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <Navbar>
      <Logo>SagaNest</Logo>
      <Hamburger
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <NavLinks open={menuOpen}>
        <NavLinkStyled to="/" onClick={handleLinkClick}>
          Home
        </NavLinkStyled>
        {/* Removed About and Contact links as requested */}
        {/* In-page anchors (when on the landing page) */}
        <NavAnchor href="/#features" onClick={handleLinkClick}>
          Features
        </NavAnchor>
        <NavAnchor href="/#how" onClick={handleLinkClick}>
          How It Works
        </NavAnchor>
        <NavAnchor href="/#testimonials" onClick={handleLinkClick}>
          Testimonials
        </NavAnchor>
        <NavAnchor href="/#cta" onClick={handleLinkClick}>
          Get Started
        </NavAnchor>
      </NavLinks>
    </Navbar>
  );
};

export default Header;
