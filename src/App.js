import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ScrollToTop from './components/ScrollToTop';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    background-color: #fff;
    color: #333;
    line-height: 1.6;
  }
  
  h1, h2, h3, h4 {
    font-weight: 600;
  }
  
  a {
    text-decoration: none;
  }
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
