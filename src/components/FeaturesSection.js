import React from 'react';
import styled from 'styled-components';

const Features = styled.section`
  padding: 4rem 2rem;
  background-color: #fff0f0;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #333;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`;

const FeatureCard = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    margin-bottom: 1rem;
    color: #d96b74; /* Updated accent */
    font-size: 1.4rem;
  }

  p {
    color: #555;
    font-size: 1rem;
  }
`;

const FeaturesSection = () => {
  return (
    <Features id="features">
      <h2>Key Features</h2>
      <FeatureGrid>
        <FeatureCard>
          <h3>Custom AI Narratives</h3>
          <p>
            Share your cherished memories and let our AI craft a narrative that speaks to your heart.
          </p>
        </FeatureCard>
        <FeatureCard>
          <h3>Magical Illustrations</h3>
          <p>
            Each story is paired with enchanting visuals that illuminate your personal journey.
          </p>
        </FeatureCard>
        <FeatureCard>
          <h3>Flexible Formats</h3>
          <p>
            Experience your story as a digital treasure or a beautifully bound printed book.
          </p>
        </FeatureCard>
      </FeatureGrid>
    </Features>
  );
};

export default FeaturesSection;
