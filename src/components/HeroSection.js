import React from 'react';
import styled from 'styled-components';

const Hero = styled.section`
  position: relative;
  background: url('hero-image.jpg') no-repeat center center/cover;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;
  color: #fff;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(217, 107, 116, 0.6) 0%, rgba(255, 211, 182, 0.6) 100%);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: #d96b74;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #c85b63;
    transform: scale(1.05);
  }
`;

const HeroSection = () => {
  // Scroll helper function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Hero id="hero">
      <Overlay />
      <Content>
        <Title>Bring Your Memories to Life</Title>
        <Subtitle>
          At SagaNest, we transform your cherished moments into heartwarming, beautifully illustrated storybooks. Let your story be told.
        </Subtitle>
        <ButtonContainer>
          <Button onClick={() => scrollToSection('cta')}>Join Our Heartwarming Journey</Button>
          <Button onClick={() => scrollToSection('features')}>Discover Our Magic</Button>
        </ButtonContainer>
      </Content>
    </Hero>
  );
};

export default HeroSection;
