import React from 'react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectCards,
  Autoplay,
  A11y,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Arrow from '../../assests/Arrow.svg';
import 'swiper/css';
import 'swiper/css/effect-cards';
import img from '../../assests/one.jpg';
import img2 from '../../assests/third.jpg';
import img3 from '../../assests/fift.avif';
import img4 from '../../assests/fourth.jpg';
import img5 from '../../assests/two.avif';
import img6 from '../../assests/fift.avif';
import img7 from '../../assests/fift.avif';

import styled from 'styled-components';
const Container = styled.div`
  width: 40vw;
  height: 70vh;
  @media only screen and (max-width: 1255px) {
  }
  
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper img {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-color: red;
    color: red;
    border-radius: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-button-next {
    color: red;
    right: 0;
    width: 4rem;
    top: 60%;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    &:after {
      display: none;
    }
  }
  .swiper-button-prev {
    color: red;
    right: 0;
    top: 60%;
    transform: rotate(180deg);
    width: 4rem;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    &:after {
      display: none;
    }
  }
`;
const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{
          type: 'fraction',
        }}
        scrollbar={{
          draggable: true,
        }}
        effect={'cards'}
        grabCursor={true}
        modules={[
          EffectCards,
          Pagination,
          Navigation,
          Autoplay,
          Scrollbar,
          A11y,
        ]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img} alt="no img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="no img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="no img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img} alt="no img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="no img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="no img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="no img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="no img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2}alt="no img" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carousel;
