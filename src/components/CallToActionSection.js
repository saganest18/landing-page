// src/components/CallToActionSection.js
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

const CallToActionSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally store the email (e.g., in localStorage)
    localStorage.setItem('userEmail', email);
    // Redirect the user to the Google Form with the email as a query parameter if desired
    window.location.href =
      'https://forms.gle/u3ZKniaVescREiM4A';
  };

  return (
    <CallToAction id="cta">
      <h2>Join Our Heartwarming Journey</h2>
      <p>
        Sign up now to receive exclusive updates and to take the next step in creating your personalized storybook.
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
    </CallToAction>
  );
};

export default CallToActionSection;
