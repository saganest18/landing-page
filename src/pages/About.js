// src/pages/About.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AboutContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  color: #d96b74;
  font-weight: 600;
  transition: color 0.3s;

  &:hover {
    color: #c85b63;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <h1>About SagaNest</h1>
      <p>
        Our mission is to transform your cherished memories into timeless, heartwarming storybooks.
        We believe every family has a story worth telling, and our innovative AI-driven process makes it easy to preserve your unique narrative.
      </p>
      {/* You can add additional content, images, or testimonials here */}
      {/* <BackLink to="/">← Back to Home</BackLink> */}
    </AboutContainer>
  );
};

export default About;
