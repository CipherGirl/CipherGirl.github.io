import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const myRef = useRef();

  function scrollToComponent() {
    if (window.location.hash === '#projects') {
      myRef.current.scrollIntoView();
      myRef.current.focus();
    }
  }

  useEffect(() => scrollToComponent(), []);
  let easing = [0.6, -0.05, 0.01, 0.99];
  return (
    <div
      ref={myRef}
      id="projects"
      className="min-h-screen  flex flex-col items-center justify-center gap-10 "
    >
      <h1 className="text-4xl ">Projects</h1>
      <div className="max-w-[90%] flex flex-wrap items-center justify-evenly gap-5">
        <motion.div
          initial={{
            y: 60,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.5, ease: easing, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          class="card lg:card-side bg-base-100 shadow-xl border w-[550px] h-[400px]"
        >
          <div className="w-full md:w-1/2 image-scroll bg-[url('../public/jontropati.png')] h-[300px] md:h-auto"></div>
          <div class="card-body w-full md:w-1/2">
            <h2 class="text-xl font-bold">
              JontroPati{' '}
              <span className="inline-block text-xs italic">
                Developed with MERN Stack
              </span>
            </h2>
            <h4 className="text-sm">Power/Hand Tools Manufacturer Website</h4>
            <p className="text-xs">
              Responsive manufacturer website where users can register to the
              site, update their profile, leave a review, order and pay for
              products. <br />
              Separated admin dashboard. Admin can access products, and orders,
              and manage them as well. Admin can make other users admin and
              revoke admin access.
            </p>
            <div class="card-actions gap-2 mt-2 text-sm">
              <a
                class="border-2 hover:bg-slate-500 hover:text-white hover:border-slate-500 rounded-full px-2 text-sm"
                href="https://jontropati.firebaseapp.com/"
                target="_blank"
              >
                Live Site
              </a>
              <a
                class="border-2 hover:bg-slate-500 hover:text-white hover:border-slate-500 rounded-full px-2 text-sm"
                href="https://github.com/CipherGirl/JontroPati-Client"
                target="_blank"
              >
                Client Side Code
              </a>
              <a
                class="border-2 hover:bg-slate-500 hover:text-white hover:border-slate-500 rounded-full px-2 text-sm"
                href="https://github.com/CipherGirl/JontroPati-Server"
                target="_blank"
              >
                Server Side Code
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            y: 60,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.5, ease: easing, delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          class="card lg:card-side bg-base-100 shadow-xl border w-[550px] h-[400px]"
        >
          <div className="w-full md:w-1/2 image-scroll bg-[url('../public/aroma-central.png')] h-[300px] md:h-auto"></div>
          <div class="card-body w-full md:w-1/2 ">
            <h2 class="text-xl font-bold">
              Aroma Central{' '}
              <span className="inline-block text-xs italic">
                Developed with MERN Stack
              </span>
            </h2>
            <h4 className="text-sm">
              Fragrance Products Warehouse Inventory Website
            </h4>
            <p className="text-xs">
              Responsive inventory website that has collections of products that
              users can stock. Users can register to the site and update stocks.{' '}
              <br />
              Authentication and Authorization using Firebase and JWT, MongoDB
              to store data, and Node/Express App to access API endpoint to
              interact with the DB through Client.
            </p>
            <div class="card-actions gap-2 mt-2 text-sm">
              <a
                class="border-2 hover:bg-slate-500 hover:text-white hover:border-slate-500 rounded-full px-2 text-sm"
                href="https://aroma-central.web.app/"
                target="_blank"
              >
                Live Site
              </a>
              <a
                class="border-2 hover:bg-slate-500 hover:text-white hover:border-slate-500 rounded-full px-2 text-sm"
                href="https://github.com/CipherGirl/Aroma-Central-Client"
                target="_blank"
              >
                Client Side Code
              </a>
              <a
                class="border-2 hover:bg-slate-500 hover:text-white hover:border-slate-500 rounded-full px-2 text-sm"
                href="https://github.com/CipherGirl/Aroma-Central-Server"
                target="_blank"
              >
                Server Side Code
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            y: 60,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.5, ease: easing, delay: 2 }}
          whileHover={{ scale: 1.05 }}
          class="card lg:card-side bg-base-100 shadow-xl border w-[550px] h-[400px]"
        >
          <div className="w-full md:w-1/2 image-scroll bg-[url('../public/oj.png')] h-[300px] md:h-auto"></div>
          <div class="card-body w-full md:w-1/2">
            <h2 class="text-xl font-bold">
              DCC Online Judge{' '}
              <span className="inline-block text-xs italic">
                Developed with React, Bootstrap, and Firebase using Judge0 API
              </span>
            </h2>
            <h4 className="text-sm">
              An open-source Online Judge platform to develop programming skills
              by practicing programming problems
            </h4>
            <p className="text-xs">
              Collaborated with my teammate to implement the whole project using
              Git and Github. <br /> Integrated Monaco code editor for
              submission and code view page. <br />
              Integrated Judge0 API to handle code submission to the judge, get
              a verdict and show in the UI.{' '}
            </p>

            <div class="card-actions gap-2 mt-2 text-sm">
              <a
                class="border-2 hover:bg-slate-500 hover:text-white hover:border-slate-500 rounded-full px-2 text-sm"
                href="https://online-judge-4f4f3.web.app/"
                target="_blank"
              >
                Live Site
              </a>
              <a
                class="border-2 hover:bg-slate-500 hover:text-white hover:border-slate-500 rounded-full px-2 text-sm"
                href="https://github.com/Shadman-Ahmed-Chowdhury/dcc-oj"
                target="_blank"
              >
                Code
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
