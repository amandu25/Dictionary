import React from "react";
import styled from "styled-components";

const Meaning = ({ term }) => {
  console.log(term);
  // if (!term || term.length === 0) {
  //   return <p>No data available</p>;
  // }
  const currWord = term[0];
  // console.log(currWord);
  const newWord = currWord.word;
  const phonetic = currWord.phonetic;
  const pronunciation = currWord.phonetics[0].text;
  // console.log([newWord, phonetic, pronunciation]);
  return (
    <MeaningContainer>
      <WordSection>
        <h2>{newWord}</h2>
      </WordSection>
      <PhoneticSection>
        <h3>Phonetic:</h3>
        <p>{phonetic}</p>
      </PhoneticSection>
      <PronunciationSection>
        <h3>Pronunciation:</h3>

        <p>(Click the audio icon to listen to the pronunciation.) </p>
      </PronunciationSection>
      <DefinitionsSection>
        <h3>Definitions:</h3>
        {/* <ul>
          {definitions.map((definition, index) => (
            <Definition key={index}>
              <DefinitionNumber>{index + 1}. </DefinitionNumber>
              <DefinitionText>{definition.definition}</DefinitionText>
              {definition.example && (
                <DefinitionExample>
                  <i>Example:</i> {definition.example}
                </DefinitionExample>
              )}
            </Definition>
          ))}
        </ul> */}
      </DefinitionsSection>
    </MeaningContainer>
  );
};

export default Meaning;

// Styled-components CSS
const MeaningContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  // border-radius: 5px;
  // background-color: #f5f5f5;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: auto;
  min-height: 76vh;
  height: auto !important; /* for IE as it does not support min-height */
  height: 76vh;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  border-radius: 20px;
`;

const WordSection = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  h2 {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const PhoneticSection = styled.div`
  margin-bottom: 1rem;
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const PronunciationSection = styled.div`
  margin-bottom: 1rem;
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
  }
  p {
    font-size: 0.8rem;
    color: gray;
  }
`;

const DefinitionsSection = styled.div`
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const Definition = styled.li`
  margin-bottom: 1rem;
`;

const DefinitionNumber = styled.span`
  font-weight: bold;
`;

const DefinitionText = styled.p`
  margin-top: 0.2rem;
`;

const DefinitionExample = styled.p`
  margin-top: 0.5rem;
  font-style: italic;
`;
