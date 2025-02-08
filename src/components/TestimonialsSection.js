import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Testimonials = styled.section`
  padding: 4rem 2rem;
  background-color: #fff0f0;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #333;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const TestimonialCard = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  animation: ${fadeIn} 0.8s ease-in-out;
`;

const Author = styled.span`
  display: block;
  margin-top: 1rem;
  font-weight: 600;
  color: #d96b74; /* Updated accent */
`;

const testimonialsData = [
  {
    text: "SagaNest turned our family memories into a timeless treasure. Every page warms our hearts!",
    author: "A Grateful Mom",
  },
  {
    text: "The illustrations are enchanting and the story is so personal—it’s like a piece of art.",
    author: "A Delighted Dad",
  },
  {
    text: "Our personalized storybook has become a beloved heirloom in our home.",
    author: "A Happy Parent",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { text, author } = testimonialsData[current];

  return (
    <Testimonials id="testimonials">
      <h2>What Our Readers Say</h2>
      <TestimonialCard>
        <p>"{text}"</p>
        <Author>- {author}</Author>
      </TestimonialCard>
    </Testimonials>
  );
};

export default TestimonialsSection;
