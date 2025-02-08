import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h1>Contact Us</h1>
      <p>
        For inquiries or support, please reach out at <strong>saganest18@gmail.com</strong>.
      </p>
      {/* Add a contact form or additional details as needed */}
    </ContactContainer>
  );
};

export default Contact;
