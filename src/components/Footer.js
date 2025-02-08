import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #fff;
  color: #555;
  padding: 2rem;
  text-align: center;
  border-top: 1px solid #eee;
`;

const Links = styled.div`
  margin-bottom: 1rem;

  a {
    color: #555;
    margin: 0 0.75rem;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: #d96b74;
    }
  }
`;

const SocialMedia = styled.div`
  margin-bottom: 1rem;

  a {
    color: #555;
    margin: 0 0.5rem;
    font-size: 1.8rem;
    transition: color 0.3s;

    &:hover {
      color: #d96b74;
    }
  }
`;

const SubscribeForm = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 50px 0 0 50px;
    min-width: 200px;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #d96b74;
    border: none;
    border-radius: 0 50px 50px 0;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #c85b63;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Links>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
      </Links>
      <SocialMedia>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </SocialMedia>
      <div>
        <p>Subscribe for the latest heartwarming updates:</p>
        <SubscribeForm onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </SubscribeForm>
      </div>
    </FooterContainer>
  );
};

export default Footer;
