import React from 'react';
import styled from 'styled-components';
import { Question } from './Question';
const Section = styled.section`
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
  background-color: #17bf9e;
  position: relative;

  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 3.5rem;
  text-transform: uppercase;
  color: black;

  margin: 1rem auto;
  border-bottom: 2px solid #eeedde;
  width: fit-content;
`;
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;
const Box = styled.div`
  width: 45%;
`;

export const Faq = () => {
  return (
    <Section id="FAQ">
      <Title>FAQ</Title>

      <Container>
        <Box>
          <Question title="Where i can pay?">
            you can pay using paypal,western union, credit card
            ............................
          </Question>
          <Question title="Where i can pay?">
            you can pay using paypal,western union, credit card
            ............................
          </Question>
          <Question title="Where i can pay?">
            you can pay using paypal,western union, credit card
            ............................
          </Question>
          <Question title="Where i can pay?">
            you can pay using paypal,western union, credit card
            ............................
          </Question>
        </Box>
        <Box>
          <Question title="Where i can pay?">
            you can pay using paypal,western union, credit card
            ............................
          </Question>
          <Question title="Where i can pay?">
            you can pay using paypal,western union, credit card
            ............................
          </Question>
          <Question title="Where i can pay?">
            you can pay using paypal,western union, credit card
            ............................
          </Question>
          <Question title="Where i can pay?">
            you can pay using paypal,western union, credit card
            ............................
          </Question>
        </Box>
      </Container>
    </Section>
  );
};
