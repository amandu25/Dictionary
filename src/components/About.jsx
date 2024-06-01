import React from "react";
import styled from "styled-components";

// Styled components
const StyledContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  // height: 76vh;
  height: auto;
  min-height: 76vh;
  height: auto !important; /* for IE as it does not support min-height */
  height: 76vh;
  padding: 2rem;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  border-radius: 20px;
  color: #333;
  font-family: "Arial", sans-serif;
`;

const StyledTitle = styled.h1`
  color: #222;
`;

const StyledSubtitle = styled.h2`
  margin-top: 1rem;
`;

const StyledParagraph = styled.p`
  line-height: 1.6;
`;

const StyledList = styled.ul`
  list-style-position: inside;
`;

// React component
const About = () => {
  return (
    <StyledContainer>
      <StyledTitle>Welcome</StyledTitle>
      <StyledParagraph>
        We are your digital gateway to the richness of the English language.
        Crafted for the curious and the scholarly, our web app transcends the
        traditional dictionary to become your daily linguistic ally.
      </StyledParagraph>

      <StyledSubtitle>Our Vision</StyledSubtitle>
      <StyledParagraph>
        We’re on a mission to democratize English learning, making it accessible
        and delightful for all. Our platform caters to students, professionals,
        and anyone eager to enhance their command of the language.
      </StyledParagraph>

      <StyledSubtitle>Features at a Glance</StyledSubtitle>
      <StyledList>
        <li>
          Search and Discover: Instantly uncover meanings, synonyms, and more
          with our comprehensive search.
        </li>
        <li>
          Word of the Day: A daily dose of vocabulary to broaden your linguistic
          horizons.
        </li>
        <li>
          Interactive Learning: (In Development) Brace yourself for our engaging
          quiz game that tests your word skills.
        </li>
      </StyledList>

      <StyledSubtitle>Powered by Innovation</StyledSubtitle>
      <StyledParagraph>
        Our heart beats through a powerful API, delivering precise word meanings
        effortlessly. We’re committed to using technology to foster educational
        growth.
      </StyledParagraph>

      <StyledSubtitle>Community and Growth</StyledSubtitle>
      <StyledParagraph>
        Join our tribe of word aficionados. Your insights help shape our app,
        propelling us toward a future rich with interactive learning and
        community-driven features.
      </StyledParagraph>
    </StyledContainer>
  );
};

export default About;
