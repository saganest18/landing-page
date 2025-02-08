import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;
`;

const About = () => {
  return (
    <AboutContainer>
      <h1>About SagaNest</h1>
      <p>
        Our mission is to transform your cherished memories into timeless, heartwarming storybooks.
        We believe every family has a story worth telling, and our innovative AI-driven process makes it easy to preserve your unique narrative.
      </p>
      {/* Add more content as desired */}
    </AboutContainer>
  );
};

export default About;
