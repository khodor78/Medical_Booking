import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './features.css';

const FeatureData = [
  {
    title: 'Quick Learning',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!',
    icon: 'ri-draft-line',
  },

  {
    title: 'All Time Support',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!',
    icon: 'ri-discuss-line',
  },

  {
    title: 'Certification',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!',
    icon: 'ri-contacts-book-line',
  },
];

const Features = ({ id }) => {
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
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
