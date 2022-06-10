import React, { useEffect, useRef } from 'react';

const About = () => {
  const myRef = useRef();

  function scrollToComponent() {
    if (window.location.hash === '#about') {
      myRef.current.scrollIntoView();
      myRef.current.focus();
    }
  }

  useEffect(() => scrollToComponent(), []);

  return (
    <div
      ref={myRef}
      id="about"
      className="min-h-screen  flex flex-col items-center justify-center gap-10 m-6"
    >
      <h1 className="text-4xl">About Me</h1>
      <div className="flex flex-col md:flex-row border-2 rounded-lg p-4 gap-10">
        <img src="about.png"></img>
        <div className="w-4/5 md:w-96 m-auto text-sm text-justify flex flex-col gap-8 md:mr-10">
          <p>
            I am a Javascript person and I love working with the MERN stack.
            Currently looking for an SWE role. Recently had great experience
            working as Intern @Intellibus as part of MLH Fellowship. I am alumni
            of the Outreachy Internship where I worked to implement the i18n
            feature for the project 'Firefox Profiler' by Mozilla. I also
            participated in Google CodeU in 2019 where we developed a web app
            based on Java and Google Cloud Services. Attended Grace Hopper
            Conference 2018 receiving a scholarship.
          </p>
          <p>
            Interested in frontend technologies such as Javascript-based
            applications using next.js, react.js. Easing into backend
            technologies node.js, express. Learning about industry best
            practices TDD, SOLID, etc also AWS services through work experience.
          </p>
          <p>
            Looking for opportunities that can help me grow as Software Engineer
            to make better quality Web Applications and more. Happy to work from
            home and also open to relocation to the US or Europe-based
            countries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
