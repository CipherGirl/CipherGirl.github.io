import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const myRef = useRef();

  function scrollToComponent() {
    if (window.location.hash === '#experience') {
      myRef.current.scrollIntoView();
      myRef.current.focus();
    }
  }
  const easing = [0.6, -0.05, 0.01, 0.99];

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 60 },
  };

  return (
    <section
      ref={myRef}
      id="experience"
      className="pt-[64px] flex flex-col items-center gap-10 mx-4 md:pt-[64px] mb-20"
    >
      <h1 className="text-4xl">Experience</h1>
      <div className="max-w-7xl flex flex-col gap-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          transition={{
            duration: 0.5,
            ease: easing,
            delay: 0.1,
          }}
          className="card bg-base-100 shadow-xl border p-10"
        >
          <div className="mb-4">
            <h1 className="text-xl font-bold">Golden Harvest Infotech</h1>
            <h2 className="font-semibold">
              Junior Programmer
              <em className="float-right font-normal">
                February 2023 to Present
              </em>
            </h2>
          </div>
          <h3>
            <span className="font-semibold"> Project Techs:</span> JavaScript,
            Typescript React.js, Next.js, Redux, Material UI, Bootstrap,
            Tailwind CSS, etc.
          </h3>
          <div className="mt-4 flex flex-col gap-2">
            <p>
              ● Working on a project involving an E-commerce web application
              designed for eco-conscious people and products. This application
              has features like a store, social feed, podcast, and
              resource-sharing platform. My responsibilities are conducting
              functionality testing, addressing bugs, and refining the user
              interface. As the project is currently in the Beta testing phase,
              I am adept at handling numerous hotfixes to ensure its smooth
              operation and optimal performance.
            </p>
            <p>
              ● Actively involved in a specialized project for data entry
              operators. The primary objective of this project is to streamline
              the data input process from images. To accomplish this, we use
              Canvas for rendering images, which provides the ability to mark
              data and inputs accurately. Within this R&D phase, I focus on
              developing proof-of-concept (POC) tasks and utility functions
              aimed at improving the overall efficiency of the application.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          transition={{
            duration: 0.5,
            ease: easing,
            delay: 0.1,
          }}
          className="card bg-base-100 shadow-xl border p-10"
        >
          <div className="mb-4">
            <h1 className="text-xl font-bold">
              Intellibus | Major League Hacking Fellowship
            </h1>
            <h2 className="font-semibold">
              Software Engineer Intern as Part of MLH Fellowship
              <em className="float-right font-normal">
                January 2022 to April 2022
              </em>
            </h2>
          </div>
          <h3>
            <span className="font-semibold"> Project Techs:</span> JavaScript,
            Auth0, XState Machine, Terraform, AWS Services such as AWS Lambda,
            SNS, S3 Bucket, Cloudfront, Route 53, IoT Core, Cognito, etc.
          </h3>
          <div className="mt-4 flex flex-col gap-2">
            <p>
              ● Collaborating with the Intellibus team on a closed source
              project. Learning through the process of different aspects of
              Software Development. Got introduced to new tech and tools.
            </p>
            <p>
              ● Implemented a PoC project for Publish/Subscribe Messaging
              Service using Auth0 for authentication, Twillio, and AWS services
              for Static Site Hosting on S3 Bucket using Cloudfront
              Distribution. Lambda and API Gateway configuration to access
              messaging service endpoints.
            </p>
            <p>
              ● Contributed to writing unit and integration test for the
              open-source npm package Bigparser{' '}
              <a
                className="underline"
                href="https://github.com/intellibus/bigparser"
                target="_blank"
              >
                (Link to Bigparser Github Repo)
              </a>
              . Gained knowledge of CI/CD integration using Github Action.
            </p>
            <p>
              ● Contributed to a PoC Chrome Extension project to save and manage
              opened tabs in Chrome Window. Basic designing and state management
              with XState Machine.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          transition={{
            duration: 0.5,
            ease: easing,
            delay: 0.15,
          }}
          className="card bg-base-100 shadow-xl border p-10"
        >
          <div className="mb-4">
            <h1 className="text-xl font-bold">
              Firefox Profiler | Outreachy x Mozilla Internship
            </h1>
            <h2 className="font-semibold">
              I18n and L10n feature for Firefox Profiler
              <em className="float-right font-normal">
                December 2020 to March 2021
              </em>
            </h2>
          </div>
          <p className="my-2">
            ● Collaborated with Firefox-Profiler team to implement localization
            using tools like Fluent Packages, React.js, and Redux for store
            management to make the website accessible in different locales.
          </p>
          <p className="my-2">
            ● Added testing to support newly added localization features using
            tools like React Testing Library, and Jest to fulfill the Code
            Coverage.
          </p>
          <p className="my-2">
            ● Links:
            <a
              href="https://github.com/firefox-devtools/profiler"
              target="_blank"
            >
              Project Github Link
            </a>
            ,
            <a
              href="https://github.com/firefox-devtools/profiler/issues/3094"
              target="_blank"
            >
              My contributions
            </a>
            ,
            <a href="https://ciphergirl.github.io/blog/" target="_blank">
              Blog Posts
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
