import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import heroImg from '../../assests/images/hero-img1.png';
import './hero-section.css';
import crown from '../../img/crown.png';
import thumbup from '../../img/thumbup.png';

import FloatinDiv from '../FloatingDiv/FloatingDiv';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  const words = ['Be Safe', 'Be Doctor', 'Be Patient'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % words.length;
        setText('');
        return nextIndex;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < words.length) {
        const nextText = words[index].substring(0, text.length + 1);
        setText(nextText);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [text, index]);

  const variants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  const transition = { duration: 2, type: 'spring' };

  return (
    <div>
    <motion.section
      className="hero__wrapper"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <Container >
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h1 className="mb-4 hero__title">
                <span className="hero__title-span">{text}</span>
              </h1>
              <p className="mb-5 hero__text">
                Welcome to the Doctor Appointment App! Our app makes it easy for
                you to schedule and manage your doctor appointments. With our
                user-friendly interface, you can easily find and book
                appointments with healthcare providers in your area. Say goodbye
                to the hassle of long waiting times and phone calls - simply log
                in to our app and book your appointment in a few easy steps.
              </p>
              <div className="search">
                <input
                  type="text"
                  placeholder="Search"
                  className="search__input"
                />
                <button className="search__button">Search</button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6" className="position-relative">
            <motion.div
              initial={{ top: '-4%', left: '74%' }}
              whileHover={{ scale: 1.1 }}
              className="floating-div"
            >
              <div className="flatten-div"></div>
            </motion.div>

            <motion.img
              src="https://img.freepik.com/premium-vector/character-doctor-vector-illustration-flat-style_605517-147.jpg?w=2000"
              alt=""
              className="w-100 hero__img"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition}
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="4" md="4" sm="12">
            <div className="hero__services">
              <img src={crown} alt="Crown icon" />
              <h3 className="mb-3">Specialist Doctors</h3>
              <p>
                Our app allows you to easily search for and book appointments
                with specialist doctors in your area.
              </p>
            </div>
          </Col>
          <Col lg="4" md="4" sm="12">
            <div className="hero__services">
              <img src={thumbup} alt="Thumb up icon" />
              <h3 className="mb-3">User-friendly interface</h3>
              <p>
                Our app has a user-friendly interface that makes it easy for you
                to book and manage your appointments.
              </p>
            </div>
          </Col>
          <Col lg="4" md="4" sm="12">
            <div className="hero__services">
              <img src={crown} alt="Crown icon" />
              <h3 className="mb-3">24/7 Support</h3>
              <p>
                Our app offers 24/7 support, so you can easily get in touch with
                us if you have any questions or concerns.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <FloatinDiv />
    </motion.section>
    </div>
  );
};

export default HeroSection;
