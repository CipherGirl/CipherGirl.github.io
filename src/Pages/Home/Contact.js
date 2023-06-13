import React from 'react';
import { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  const [buttonText, setButtonText] = useState('Send Message');
  const myRef = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...")
    emailjs
      .sendForm(
        'service_fiarr9c',
        'template_pqfrvlg',
        form.current,
        'vFI4kJzZKvw9XvPvF'
      )
      .then(
        () => {
          e.target.reset();
          setButtonText('Send Again');
          alert('Message received! Will get back to you shortly.');
        },
        (error) => {
          alert('Something went wrong! ', error.text);
          setButtonText('Try Again');
        }
      );
  };

  function scrollToComponent() {
    if (window.location.hash === '#contact') {
      myRef.current.scrollIntoView();
      myRef.current.focus();
    }
  }

  const container = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 60 },
  };

  useEffect(() => scrollToComponent(), []);

  return (
    <section
      ref={myRef}
      id="contact"
      className="flex flex-col w-full justify-center items-center m-auto pt-20"
    >
      <h1 className="text-4xl ">Contact</h1>

      <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col justify-around pb-20">
          <div>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{
                duration: 0.5,
                ease: 'easeIn',
                delay: 0.1,
              }}
              className="font-bold text-4xl tracking-wide mt-0 lg:mt-20"
            >
              Get In Touch!
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{
                duration: 0.5,
                ease: 'easeIn',
                delay: 0.15,
              }}
              className="pt-2 text-md"
            >
              {`If you are interested to have a chat with me, please send me
              message. I'd love to hear from you!`}
            </motion.p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{
              duration: 0.5,
              ease: 'easeIn',
              delay: 0.2,
            }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex space-x-2 items-center w-60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+880 019 XXX XXXX</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-mail"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>hasnahenamow@gmail.com</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-map-pin"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Dhaka, Bangladesh</span>
            </div>
          </motion.div>
        </div>
        <div className="relative">
          <div className="absolute z-[-1] w-40 h-40 bg-slate-300 rounded-full -right-28 -top-28"></div>
          <div className="absolute z-0 w-40 h-40 bg-slate-400 rounded-full -left-28 -bottom-16"></div>
          <div className="relative z-10  rounded-xl shadow-lg p-8  lg:w-80">
            <motion.form
              className="flex flex-col space-y-4"
              action=""
              ref={form}
              onSubmit={sendEmail}
              initial="hidden"
              whileInView="visible"
              variants={container}
            >
              <motion.div variants={item}>
                <label htmlFor="name" className="text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                />
              </motion.div>
              <motion.div variants={item}>
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                />
              </motion.div>
              <motion.div variants={item}>
                <label htmlFor="subject" className="text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                />
              </motion.div>
              <motion.div variants={item}>
                <label htmlFor="message" className="text-sm">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  required
                  className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                ></textarea>
              </motion.div>
              <motion.button
                variants={item}
                className="d-flex flex-row items-center justify-between gap-2 self-end bg-slate-600 font-bold rounded-lg px-6 py-4 uppercase text-sm text-white"
              >
                {buttonText}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
