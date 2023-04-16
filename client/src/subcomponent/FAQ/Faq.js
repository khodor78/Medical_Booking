import React from 'react';
import styled from 'styled-components';
import { Question } from './Question';

const Section = styled.section`
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
  background-color: #17bf9e;
  position: relative;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    padding-top: 80px;
    height: auto;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  text-transform: uppercase;
  color: white;
  margin: 1rem auto;
  border-bottom: 2px solid #eeedde;
  width: fit-content;
`;

const Container = styled.div`
  width: 88%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Box = styled.div`
  width: 45%;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Faq = () => {
  return (
    <Section id="FAQ">
      <Title>FAQ</Title>

      <Container>
        <Box>
          <Question title="Where can I pay?">
            When you arrive at the doctor's office for your appointment...
          </Question>
          <Question title="Is my personal information kept confidential?">
            Yes, we take the privacy and security of your personal information...
          </Question>
          <Question title="Can I cancel or reschedule my appointment?">
            Yes, you can cancel or reschedule your appointment by calling the doctor's office...
          </Question>
          <Question title="What should I bring to my appointment?">
            Please bring your insurance card (if applicable) and any relevant medical records...
          </Question>
        </Box>

        <Box>
          <Question title="What payment methods are available?">
            We offer several payment methods, including PayPal, Western Union, and credit card.
          </Question>
          <Question title="Does using a specific payment method come with a fee?">
            No, we do not charge additional fees for using any of our accepted payment methods.
          </Question>
          <Question title="When will I be charged for my appointment?">
            You will be charged for your appointment at the time of booking.
          </Question>
          <Question title="Is it safe to enter payment information on the app?">
            Yes, we use industry-standard encryption to protect your payment information and ensure it remains secure.
          </Question>
        </Box>
      </Container>
    </Section>
  );
};