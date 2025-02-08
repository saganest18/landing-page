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

const FoundersSection = styled.section`
  margin-top: 3rem;
`;

const FoundersTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
`;

// Combined photo of both founders
const CombinedPhoto = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
`;

// Container for the founders' individual details
const FoundersInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const FounderColumn = styled.div`
  flex: 1;
  min-width: 200px;
`;

const FounderName = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  color: #d96b74;
`;

const LinkedInLink = styled.a`
  display: inline-block;
  color: #0077b5;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #005582;
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
      
      <FoundersSection>
        <FoundersTitle>Meet Our Founders</FoundersTitle>
        <CombinedPhoto src="founders.jpg" alt="Founders Sanat and Sanjyotee" />
        <FoundersInfo>
          <FounderColumn>
            <FounderName>Sanjyotee</FounderName>
            <LinkedInLink
              href="https://www.linkedin.com/in/sanjyotee-patil-aaa0a8250/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </LinkedInLink>
          </FounderColumn>
          <FounderColumn>
            <FounderName>Sanat</FounderName>
            <LinkedInLink
              href="https://www.linkedin.com/in/sanatl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </LinkedInLink>
          </FounderColumn>
        </FoundersInfo>
      </FoundersSection>
      
      {/* <BackLink to="/">← Back to Home</BackLink> */}
    </AboutContainer>
  );
};

export default About;
