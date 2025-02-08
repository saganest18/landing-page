import React from 'react';
import styled from 'styled-components';

const ValueProposition = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background-color: #fff;

  h2 {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto 2rem;
    color: #555;
  }
`;

const BenefitsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  justify-items: center;
`;

const BenefitCard = styled.div`
  padding: 1.5rem;
  border-radius: 12px;
  background-color: #fefae0;
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

  h3 {
    margin-bottom: 0.5rem;
    color: #d96b74; /* Updated accent */
    font-size: 1.3rem;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;

const ValuePropositionSection = () => {
  return (
    <ValueProposition>
      <h2>Why Choose SagaNest?</h2>
      <p>
        Discover the future of storytelling—where every memory is transformed into a captivating, personalized narrative paired with delightful illustrations.
      </p>
      <BenefitsWrapper>
        <BenefitCard>
          <img src="ai-icon.png" alt="AI-Generated Stories" />
          <h3>Heartfelt Narratives</h3>
          <p>Stories uniquely crafted to celebrate your life’s moments.</p>
        </BenefitCard>
        <BenefitCard>
          <img src="illustration-icon.png" alt="Enchanting Illustrations" />
          <h3>Enchanting Illustrations</h3>
          <p>Beautiful visuals that breathe life into every page.</p>
        </BenefitCard>
        <BenefitCard>
          <img src="download-icon.png" alt="Multiple Formats" />
          <h3>Your Way, Your Story</h3>
          <p>Enjoy your story digitally or have it lovingly printed.</p>
        </BenefitCard>
      </BenefitsWrapper>
    </ValueProposition>
  );
};

export default ValuePropositionSection;
