import React, { useState } from 'react';
import styled from 'styled-components';

const CallToAction = styled.section`
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
    margin-bottom: 2rem;
    color: #555;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 50px;
  border: 1px solid #ccc;
  width: 300px;
  max-width: 100%;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Button = styled.button`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: #d96b74;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c85b63;
  }
`;

const SuccessMessage = styled.p`
  color: #2e7d32;
  margin-top: 1rem;
  font-weight: bold;
`;

const CallToActionSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your actual backend API endpoint.
      const response = await fetch('https://api.example.com/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (response.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        setError('There was an error. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('There was an error. Please try again.');
    }
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <CallToAction id="cta">
      <h2>Join Our Heartwarming Journey</h2>
      <p>
        Sign up now to receive exclusive updates and be the first to experience your personalized storybook—a keepsake that celebrates life’s most beautiful moments.
      </p>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">Join Now</Button>
      </Form>
      {submitted && <SuccessMessage>Thank you for registering! A confirmation email has been sent to your inbox.</SuccessMessage>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </CallToAction>
  );
};

export default CallToActionSection;
