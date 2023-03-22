import React, { useRef } from "react";
import { Container } from "reactstrap";
import { motion } from "framer-motion";
import "./header.css";

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "#",
  },
  {
    display: "Courses",
    url: "#",
  },
  {
    display: "Pages",
    url: "#",
  },
  {
    display: "Blog",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const navLinkVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className="headersa"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 120 }}
    >
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
           <div className="logo">
            <motion.h2
              className=" d-flex align-items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 120 }}
            >
              <i class="ri-pantone-line"></i> My Clinic
          
            </motion.h2>
          </div>


          <motion.div
            className="nav d-flex align-items-center gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 120 }}
          >
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <motion.ul
                className="nav__list"
                variants={navLinkVariants}
                initial="hidden"
                animate="visible"
              >
                {navLinks.map((item, index) => (
                  <motion.li
                    key={index}
                    className="nav__item"
                    variants={navItemVariants}
                  >
                    <a href={item.url} style={{ color: "#0a2b1e" }}>
                      {item.display}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <motion.div
              className="nav__right"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 120 }}
            >
              <div className="cta">
                <a href="register" className="btn-primary">
                  Get Started
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mobile__menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 120 }}
          >
            <div className="hamburger" onClick={menuToggle}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.header>
  );
};
export default Header;