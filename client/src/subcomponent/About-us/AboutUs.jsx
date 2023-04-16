  import React, { useEffect, useRef, useState } from 'react';
  import './about.css';
  import { Container, Row, Col } from 'reactstrap';
  import aboutImg from '../../assests/two.avif';
  import CountUp from 'react-countup';

  const AboutUs = ({ id }) => {
    const sectionRef = useRef(null);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (
          sectionRef.current &&
          window.pageYOffset >= sectionRef.current.offsetTop - window.innerHeight
        ) {
          setShouldAnimate(true);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
      <section ref={sectionRef} id={id}>
        <Container className='about'>
          <Row>
            <Col lg="6" md="6">
              <div className="about__img">
                <img src={aboutImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="about__content">
                <h2>Why MY-Clinic?</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Excepturi cupiditate animi deserunt libero nesciunt corporis
                  explicabo nobis ex quo molestiae!
                </p>

                <div className="about__counter">
                  <div className="d-flex gap-5 align-items-center">
                    <div className="single__counter">
                      <span className="counter">
                        <CountUp
                          start={0}
                          end={25}
                          duration={2}
                          suffix="K"
                          redraw={true}
                          preserveValue={shouldAnimate}
                        />
                      </span>

                      <p className="counter__title">Completed Projects</p>
                    </div>

                    <div className="single__counter">
                      <span className="counter">
                        <CountUp
                          start={0}
                          end={12}
                          duration={2}
                          suffix="M"
                          redraw={true}
                          preserveValue={shouldAnimate}
                        />
                      </span>

                      <p className="counter__title">Patient Around World</p>
                    </div>
                  </div>

                  <div className="d-flex gap-5 align-items-center mb-4">
                    <div className="single__counter">
                      <span className="counter">
                        <CountUp
                          start={0}
                          end={95}
                          duration={2}
                          suffix="M"
                          redraw={true}
                          preserveValue={shouldAnimate}
                        />
                      </span>

                      <p className="counter__title">Ideas Raised Funds</p>
                    </div>

                    <div className="single__counter">
                      <span className="counter">
                        <CountUp
                          start={0}
                          end={5}
                          duration={2}
                          suffix="K"
                          redraw={true}
                          preserveValue={shouldAnimate}
                        />
                      </span>

                      <p className="counter__title">Years of Experience</p>
  </div>
  </div>
  </div>
  </div>
  </Col>
  </Row>
  </Container>
  </section>
  );
  };

  export default AboutUs;