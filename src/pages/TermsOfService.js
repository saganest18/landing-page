import React from 'react';
import styled from 'styled-components';

const TermsContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;
`;

const TermsOfService = () => {
  return (
    <TermsContainer>
      <h1>Terms of Service</h1>
      <p>
        Please review our terms carefully before using our service. By using SagaNest, you agree to abide by these terms.
      </p>
      {/* Add the full terms content here */}
    </TermsContainer>
  );
};

export default TermsOfService;
