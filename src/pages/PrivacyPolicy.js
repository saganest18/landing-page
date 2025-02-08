import React from 'react';
import styled from 'styled-components';

const PrivacyContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;
`;

const PrivacyPolicy = () => {
  return (
    <PrivacyContainer>
      <h1>Privacy Policy</h1>
      <p>
        Your privacy is important to us. We ensure that your personal information is handled securely and responsibly.
        Please review our policy for details.
      </p>
      {/* Add the full privacy policy content here */}
    </PrivacyContainer>
  );
};

export default PrivacyPolicy;
