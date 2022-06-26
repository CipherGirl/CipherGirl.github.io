import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';

const Home = () => {
  const myRef = useRef();

  function scrollToComponent() {
    if (window.location.hash === '#hero') {
      myRef.current.scrollIntoView();
      myRef.current.focus();
    }
  }

  useEffect(() => scrollToComponent(), []);

  return (
    <>
      <motion.div
        ref={myRef}
        id="hero"
        className="min-h-screen pt-10 lg:pt-0  bg-[url('../public/sm-bg-light.png')] lg:bg-[url('../public/bg-light.png')] flex items-center"
      >
        <div className="max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-10 m-auto pb-20 pt-10">
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 60 }}
            className="w-[80%] lg:w-[45%] flex flex-col items-center lg:items-start mt-10 lg:mt-0"
          >
            <h1 className="text-sm mb-2 italic">Hello, I'm</h1>
            <h1 className="text-4xl font-semibold">Hasna Hena Mow</h1>
            <h2 className="text-xl italic">
              I design and build things for the web.
            </h2>
            <p className="text-justify mt-4">
              A recent graduate student developing myself to pursue a career as
              a Software Engineer. Interested to learn different techs. My
              favorite programming laguage is JavaScript. I love to work with
              MERN stack. I love to go by my pseudoname{' '}
              <em className="font-semibold">CipherGirl</em>.
            </p>
            <a
              className="btn btn-success btn-wide mt-6"
              target="_blank"
              href="https://drive.google.com/file/d/1ul83JPWdyZUgsL5ppqwRqqkJwZw-gyTX/view"
            >
              Resume
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 60 }}
          >
            <img src="/hero.png"></img>
          </motion.div>
        </div>
      </motion.div>
      <Experience />
      <Projects />
      <About />
      <Contact />
    </>
  );
};

export default Home;
