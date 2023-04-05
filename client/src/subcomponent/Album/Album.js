import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  background-color: #17bf9e;
  display: flex;
  color: ${(props) => props.theme.text};
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Container = styled.div`
  width: 35%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  background-color: #fff;
  width: 30%;
  height: 100%;
  display: flex;
  position: absolute;
  left: 8rem;
  display: flex-start;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1255px) {
  display: none;
  }
`;
// const Right = styled.div`
//   position: absolute;
//   left: 35.5%;
//   width: 100%;
//   min-height: 100vh;
//   padding-left: 1rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #202020;
//   p {
//     font-size: ${(props) => props.theme.fontlg};
//     font-weight: 300;
//     width: 80%;
//     margin: 0 auto;
//   }
// `;
const Title = styled.h1`
  font-size: 2r em;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  position: absolute;
  top: 7rem;
  color: ${(props) => props.theme.text};
  left: 50%;
  z-index: 11;
  text-shadow: 1px 1px 1px ${(props) => props.theme.fontxxxl};

  @media only screen and (max-width: 1255px) {
  left:5%;
  top:12%;
  font-size: 3rem;
  line-height: 5rem;

  }
  @media only screen and (max-width: 800px) {
top:20%  }
@media only screen and (max-width: 600px) {
top:0%  }
`;
const Left = styled.div`
  p {
    font-size: 1.5em;
    font-family: 'Montserrat', sans-serif;
    font-weight: 150;
    position: absolute;
    top: 20rem;
    color: #fff;
    left: 50%;
    z-index: 11;
    text-shadow: 1px 1px 1px ${(props) => props.theme.fontxxxl};
    @media only screen and (max-width: 1255px) {
  left:5%;
  font-size: 3rem;
  line-height: 5rem;
  }
  @media only screen and (max-width: 800px) {
  left:5%;
  top: 30rem;
  font-size: 2rem;
  line-height: 5rem;
  }
  @media only screen and (max-width: 600px) {
top:20%  

}
@media only screen and (max-width: 430px) {
  font-size: 2rem;
  top:30rem;
  line-height: 4rem;
}
  }
 

`;
const SubTextLight = styled.p`
  font-size: 20px;
  color: yellow;
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
`;
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 300;
  position: absolute;
`;
const Right = styled.div`
  }
`  

const Album = () => {
  return (
    <Section id="service">
      <Container>
        <Box>
          <Carousel />
        </Box>
        <Right>
        <Title
          data-scroll
          data-scroll-delay="1"
          data-scroll-speed="-3 "
        >
          Be The First To Experience The Future Of Healthcare
        </Title>
        <Left>
          <p data-scroll data-scroll-delay="0.5" data-scroll-speed="2 ">
            DoctorCONNECT is a state-of-the-art online platform that connects
            you with top-rated doctors and medical professionals from the
            comfort of your own home. Whether you need a routine checkup, a
            specialist consultation, or urgent medical care, DoctorCONNECT has
            got you covered.
            <br />
            <br />
            So why wait? Sign up for DoctorCONNECT today and experience the
            future of healthcare!
          </p>
        </Left>
      </Right>
      </Container>
    </Section>
  );
};

export default Album;
