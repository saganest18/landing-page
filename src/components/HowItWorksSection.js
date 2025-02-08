import React from 'react';
import styled from 'styled-components';

const HowItWorks = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #333;
  }
`;

const StepsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`;

const StepCard = styled.div`
  padding: 1.5rem;
  border-radius: 12px;
  background: #fefae0;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 80px;
    margin-bottom: 1rem;
  }

  h4 {
    margin-bottom: 0.5rem;
    color: #d96b74; /* Updated accent */
    font-size: 1.3rem;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;

const HowItWorksSection = () => {
  return (
    <HowItWorks id="how">
      <h2>How It Works</h2>
      <StepsWrapper>
        <StepCard>
          <img src="input-icon.png" alt="Share Your Story" />
          <h4>Share Your Story</h4>
          <p>Tell us your most treasured memories and details that make your story unique.</p>
        </StepCard>
        <StepCard>
          <img src="generate-icon.png" alt="Our AI Magic" />
          <h4>Our AI Magic</h4>
          <p>Watch as our AI transforms your input into a heartwarming narrative with enchanting visuals.</p>
        </StepCard>
        <StepCard>
          <img src="download-icon.png" alt="Review & Enjoy" />
          <h4>Review & Enjoy</h4>
          <p>Customize your story, then enjoy it digitally or receive a lovingly printed edition.</p>
        </StepCard>
      </StepsWrapper>
    </HowItWorks>
  );
};

export default HowItWorksSection;
