import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const myRef = useRef();

  function scrollToComponent() {
    if (window.location.hash === '#about') {
      myRef.current.scrollIntoView();
      myRef.current.focus();
    }
  }

  useEffect(() => scrollToComponent(), []);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 60 },
  };
  const easing = [0.6, -0.05, 0.01, 0.99];

  return (
    <section
      ref={myRef}
      id="about"
      className="flex flex-col items-center justify-center pt-[64px] gap-10 mb-20"
    >
      <h1 className="text-4xl">About Me</h1>
      <div className="flex flex-col lg:flex-row border-2 rounded-lg lg:p-4 mx-5">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: easing,
          }}
          src="about.webp"
          className=" m-auto"
          alt="avatar"
        />
        <div className="w-4/5 md:w-[40rem] m-auto text-base text-justify flex flex-col gap-4 md:px-10 lg:px-0 my-4">
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{
              duration: 0.5,
              ease: easing,
              delay: 0.1,
            }}
          >
            <motion.h1
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{
                duration: 0.5,
                ease: easing,
                delay: 0.05,
              }}
              className="text-xl font-semibold mt-10 lg:mt-0 mb-1"
            >
              Hey there,
            </motion.h1>
            I am a Javascript person and I love working with the MERN stack.
            Currently looking for an SWE role. Recently had great experience
            working as Intern @Intellibus as part of MLH Fellowship. I am alumni
            of the Outreachy Internship where I worked to implement the i18n
            feature for the project 'Firefox Profiler' by Mozilla. I also
            participated in Google CodeU in 2019 where we developed a web app
            based on Java and Google Cloud Services. Attended Grace Hopper
            Conference 2018 receiving a scholarship.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{
              duration: 0.5,
              ease: easing,
              delay: 0.15,
            }}
          >
            Interested in frontend technologies such as Javascript-based
            applications using next.js, react.js. Easing into backend
            technologies node.js, express. Learning about industry best
            practices TDD, SOLID, etc also AWS services through work experience.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{
              duration: 0.5,
              ease: easing,
              delay: 0.2,
            }}
          >
            Looking for opportunities that can help me grow as Software Engineer
            to make better quality Web Applications and more. Happy to work from
            home and also open to relocation to the US or Europe-based
            countries.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{
              duration: 0.5,
              ease: easing,
              delay: 0.25,
            }}
          >
            <h2 className="text-xl font-semibold mb-2">Skills</h2>
            <div className="flex flex-col gap-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{
                  duration: 0.5,
                  ease: easing,
                  delay: 0.3,
                }}
                className="flex flex-wrap items-center"
              >
                <h2 className="font-semibold underline mr-1">Front End: </h2>
                <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
                  <img
                    alt="svgImg"
                    width={26}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjZmZkNjAwIiBkPSJNNiw0MlY2aDM2djM2SDZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzAwMDAwMSIgZD0iTTI5LjUzOCAzMi45NDdjLjY5MiAxLjEyNCAxLjQ0NCAyLjIwMSAzLjAzNyAyLjIwMSAxLjMzOCAwIDIuMDQtLjY2NSAyLjA0LTEuNTg1IDAtMS4xMDEtLjcyNi0xLjQ5Mi0yLjE5OC0yLjEzM2wtLjgwNy0uMzQ0Yy0yLjMyOS0uOTg4LTMuODc4LTIuMjI2LTMuODc4LTQuODQxIDAtMi40MSAxLjg0NS00LjI0NCA0LjcyOC00LjI0NCAyLjA1MyAwIDMuNTI4LjcxMSA0LjU5MiAyLjU3M2wtMi41MTQgMS42MDdjLS41NTMtLjk4OC0xLjE1MS0xLjM3Ny0yLjA3OC0xLjM3Ny0uOTQ2IDAtMS41NDUuNTk3LTEuNTQ1IDEuMzc3IDAgLjk2NC42IDEuMzU0IDEuOTg1IDEuOTUxbC44MDcuMzQ0QzM2LjQ1MiAyOS42NDUgMzggMzAuODM5IDM4IDMzLjUyMyAzOCAzNi40MTUgMzUuNzE2IDM4IDMyLjY1IDM4Yy0yLjk5OSAwLTQuNzAyLTEuNTA1LTUuNjUtMy4zNjhMMjkuNTM4IDMyLjk0N3pNMTcuOTUyIDMzLjAyOWMuNTA2LjkwNiAxLjI3NSAxLjYwMyAyLjM4MSAxLjYwMyAxLjA1OCAwIDEuNjY3LS40MTggMS42NjctMi4wNDNWMjJoMy4zMzN2MTEuMTAxYzAgMy4zNjctMS45NTMgNC44OTktNC44MDUgNC44OTktMi41NzcgMC00LjQzNy0xLjc0Ni01LjE5NS0zLjM2OEwxNy45NTIgMzMuMDI5eiI+PC9wYXRoPjwvc3ZnPg=="
                  />
                  <h3 className="font-semibold">JavaScript</h3>
                </div>
                <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
                  <img
                    alt="svgImg"
                    width={26}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjODBkZWVhIiBkPSJNMjQsMzRDMTEuMSwzNCwxLDI5LjYsMSwyNGMwLTUuNiwxMC4xLTEwLDIzLTEwYzEyLjksMCwyMyw0LjQsMjMsMTBDNDcsMjkuNiwzNi45LDM0LDI0LDM0eiBNMjQsMTYJYy0xMi42LDAtMjEsNC4xLTIxLDhjMCwzLjksOC40LDgsMjEsOHMyMS00LjEsMjEtOEM0NSwyMC4xLDM2LjYsMTYsMjQsMTZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzgwZGVlYSIgZD0iTTE1LjEsNDQuNmMtMSwwLTEuOC0wLjItMi42LTAuN0M3LjYsNDEuMSw4LjksMzAuMiwxNS4zLDE5bDAsMGMzLTUuMiw2LjctOS42LDEwLjMtMTIuNGMzLjktMyw3LjQtMy45LDkuOC0yLjUJYzIuNSwxLjQsMy40LDQuOSwyLjgsOS44Yy0wLjYsNC42LTIuNiwxMC01LjYsMTUuMmMtMyw1LjItNi43LDkuNi0xMC4zLDEyLjRDMTkuNyw0My41LDE3LjIsNDQuNiwxNS4xLDQ0LjZ6IE0zMi45LDUuNAljLTEuNiwwLTMuNywwLjktNiwyLjdjLTMuNCwyLjctNi45LDYuOS05LjgsMTEuOWwwLDBjLTYuMywxMC45LTYuOSwyMC4zLTMuNiwyMi4yYzEuNywxLDQuNSwwLjEsNy42LTIuM2MzLjQtMi43LDYuOS02LjksOS44LTExLjkJYzIuOS01LDQuOC0xMC4xLDUuNC0xNC40YzAuNS00LTAuMS02LjgtMS44LTcuOEMzNCw1LjYsMzMuNSw1LjQsMzIuOSw1LjR6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzgwZGVlYSIgZD0iTTMzLDQ0LjZjLTUsMC0xMi4yLTYuMS0xNy42LTE1LjZDOC45LDE3LjgsNy42LDYuOSwxMi41LDQuMWwwLDBDMTcuNCwxLjMsMjYuMiw3LjgsMzIuNywxOQljMyw1LjIsNSwxMC42LDUuNiwxNS4yYzAuNyw0LjktMC4zLDguMy0yLjgsOS44QzM0LjcsNDQuNCwzMy45LDQ0LjYsMzMsNDQuNnogTTEzLjUsNS44Yy0zLjMsMS45LTIuNywxMS4zLDMuNiwyMi4yCWM2LjMsMTAuOSwxNC4xLDE2LjEsMTcuNCwxNC4yYzEuNy0xLDIuMy0zLjgsMS44LTcuOGMtMC42LTQuMy0yLjUtOS40LTUuNC0xNC40QzI0LjYsOS4xLDE2LjgsMy45LDEzLjUsNS44TDEzLjUsNS44eiI+PC9wYXRoPjxjaXJjbGUgY3g9IjI0IiBjeT0iMjQiIHI9IjQiIGZpbGw9IiM4MGRlZWEiPjwvY2lyY2xlPjwvc3ZnPg=="
                  />
                  <h3 className="font-semibold">React.js</h3>
                </div>
                <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
                  <img
                    alt="svgImg"
                    width={26}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjRTY1MTAwIiBkPSJNNDEsNUg3bDMsMzRsMTQsNGwxNC00TDQxLDVMNDEsNXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkY2RDAwIiBkPSJNMjQgOEwyNCAzOS45IDM1LjIgMzYuNyAzNy43IDh6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI0LDI1di00aDguNmwtMC43LDExLjVMMjQsMzUuMXYtNC4ybDQuMS0xLjRsMC4zLTQuNUgyNHogTTMyLjksMTdsMC4zLTRIMjR2NEgzMi45eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNFRUUiIGQ9Ik0yNCwzMC45djQuMmwtNy45LTIuNkwxNS43LDI3aDRsMC4yLDIuNUwyNCwzMC45eiBNMTkuMSwxN0gyNHYtNGgtOS4xbDAuNywxMkgyNHYtNGgtNC42TDE5LjEsMTd6Ij48L3BhdGg+PC9zdmc+"
                  />
                  <h3 className="font-semibold">HTML5</h3>
                </div>
                <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
                  <img
                    alt="svgImg"
                    width={26}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjMDI3N0JEIiBkPSJNNDEsNUg3bDMsMzRsMTQsNGwxNC00TDQxLDVMNDEsNXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDM5QkU1IiBkPSJNMjQgOEwyNCAzOS45IDM1LjIgMzYuNyAzNy43IDh6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTMzLjEgMTNMMjQgMTMgMjQgMTcgMjguOSAxNyAyOC42IDIxIDI0IDIxIDI0IDI1IDI4LjQgMjUgMjguMSAyOS41IDI0IDMwLjkgMjQgMzUuMSAzMS45IDMyLjUgMzIuNiAyMSAzMi42IDIxeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNFRUUiIGQ9Ik0yNCwxM3Y0aC04LjlsLTAuMy00SDI0eiBNMTkuNCwyMWwwLjIsNEgyNHYtNEgxOS40eiBNMTkuOCwyN2gtNGwwLjMsNS41bDcuOSwyLjZ2LTQuMmwtNC4xLTEuNEwxOS44LDI3eiI+PC9wYXRoPjwvc3ZnPg=="
                  />
                  <h3 className="font-semibold">CSS 3</h3>
                </div>
                <div className="flex items-center gap-1 border border-gray-200 rounded-sm px-1 m-[2px]">
                  <img alt="svgImg" width={26} src="/skills/tailwindcss.svg" />
                  <h3 className="font-semibold">Tailwind CSS</h3>
                </div>
                <div className="flex items-center gap-1 border border-gray-200 rounded-sm px-1 m-[2px]">
                  <img
                    alt="svgImg"
                    width={26}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjNjczYWI3IiBkPSJNNDIsMzdjMCwyLjc2Mi0yLjIzOCw1LTUsNUgxMWMtMi43NjEsMC01LTIuMjM4LTUtNVYxMWMwLTIuNzYyLDIuMjM5LTUsNS01aDI2YzIuNzYyLDAsNSwyLjIzOCw1LDUgVjM3eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zMy4wMywyNS42Yy0wLjY1LTAuOS0xLjU5LTEuNTItMi44LTEuODVjMCwwLDEuMDItMC4zNywxLjk0LTEuNzVjMC41NS0wLjg4LDAuODMtMS45NCwwLjgzLTMuMTggYzAtMi4xNS0wLjc4LTMuOC0yLjM0LTQuOTNDMjkuMSwxMi43NiwyNy4zNCwxMiwyNC4zNSwxMkgxNXYyNGgxMC40M2MyLjgzLTAuMDIsNC45Ni0wLjYzLDYuNDEtMS44YzEuNDQtMS4xOSwyLjE2LTIuOTUsMi4xNi01LjMgQzM0LDI3LjYsMzMuNjgsMjYuNSwzMy4wMywyNS42eiBNMjEsMTZjMCwwLDQuMTcsMCw0LjI1LDBjMS41MiwwLDIuNzUsMS4yMywyLjc1LDIuNzVjMCwxLjUyLTEuMjMsMi43NS0yLjc1LDIuNzUgYy0wLjA4LDAtNC4yNSwwLTQuMjUsMFYxNnogTTI2LDMyaC01di02aDVjMS42NiwwLDMsMS4zNCwzLDNDMjksMzAuNjYsMjcuNjYsMzIsMjYsMzJ6Ij48L3BhdGg+PC9zdmc+"
                  />
                  <h3 className="font-semibold">Bootstrap</h3>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{
                  duration: 0.5,
                  ease: easing,
                  delay: 0.35,
                }}
                className="flex flex-wrap items-center"
              >
                <h2 className="font-semibold underline mr-1">Back End: </h2>
                <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
                  <img
                    alt="svgImg"
                    width={26}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjMjFhMzY2IiBkPSJNMjQuMDA3LDQ1LjQxOWMtMC41NzQsMC0xLjE0My0wLjE1LTEuNjQ2LTAuNDRsLTUuMjQtMy4xMDNjLTAuNzgzLTAuNDM4LTAuNDAxLTAuNTkzLTAuMTQzLTAuNjgyCWMxLjA0NC0wLjM2NSwxLjI1NS0wLjQ0OCwyLjM2OS0xLjA4MWMwLjExNy0wLjA2NywwLjI3LTAuMDQzLDAuMzksMC4wMjhsNC4wMjYsMi4zODljMC4xNDUsMC4wNzksMC4zNTIsMC4wNzksMC40ODYsMGwxNS42OTctOS4wNjEJYzAuMTQ1LTAuMDgzLDAuMjQtMC4yNTEsMC4yNC0wLjQyNFYxNC45MzJjMC0wLjE4MS0wLjA5NC0wLjM0Mi0wLjI0My0wLjQzMkwyNC4yNTMsNS40NDZjLTAuMTQ1LTAuMDg2LTAuMzM4LTAuMDg2LTAuNDgzLDAJTDguMDgyLDE0LjQ5OWMtMC4xNTIsMC4wODYtMC4yNDksMC4yNTUtMC4yNDksMC40Mjh2MTguMTE0YzAsMC4xNzMsMC4wOTQsMC4zMzgsMC4yNDQsMC40Mmw0LjI5OSwyLjQ4MwljMi4zMzQsMS4xNjcsMy43Ni0wLjIwOCwzLjc2LTEuNTkxVjE2LjQ3NmMwLTAuMjU1LDAuMi0wLjQ1MiwwLjQ1Ni0wLjQ1MmgxLjk4OGMwLjI0OCwwLDAuNDUyLDAuMTk2LDAuNDUyLDAuNDUydjE3Ljg4NgljMCwzLjExMi0xLjY5Nyw0LjktNC42NDgsNC45Yy0wLjkwOCwwLTEuNjIzLDAtMy42MTktMC45ODJsLTQuMTE4LTIuMzczQzUuNjI5LDM1LjMxNyw1LDM0LjIxNiw1LDMzLjA0MlYxNC45MjgJYzAtMS4xNzksMC42MjktMi4yNzksMS42NDYtMi44NjFMMjIuMzYsMy4wMDJjMC45OTQtMC41NjIsMi4zMTQtMC41NjIsMy4zMDEsMGwxNS42OTQsOS4wNjlDNDIuMzY3LDEyLjY1Niw0MywxMy43NTMsNDMsMTQuOTMyCXYxOC4xMTRjMCwxLjE3NS0wLjYzMywyLjI3MS0xLjY0NiwyLjg2MUwyNS42Niw0NC45NzFjLTAuNTAzLDAuMjkxLTEuMDczLDAuNDQtMS42NTQsMC40NCI+PC9wYXRoPjxwYXRoIGZpbGw9IiMyMWEzNjYiIGQ9Ik0yOC44NTYsMzIuOTM3Yy02Ljg2OCwwLTguMzA4LTMuMTUzLTguMzA4LTUuNzk3YzAtMC4yNTEsMC4yMDMtMC40NTIsMC40NTUtMC40NTJoMi4wMjgJYzAuMjI0LDAsMC40MTMsMC4xNjMsMC40NDgsMC4zODRjMC4zMDYsMi4wNjYsMS4yMTgsMy4xMDgsNS4zNzEsMy4xMDhjMy4zMDgsMCw0LjcxNS0wLjc0Nyw0LjcxNS0yLjUwMgljMC0xLjAxLTAuNDAxLTEuNzYtNS41NC0yLjI2M2MtNC4yOTktMC40MjQtNi45NTUtMS4zNzEtNi45NTUtNC44MDljMC0zLjE2NywyLjY3Mi01LjA1Myw3LjE0Ny01LjA1MwljNS4wMjYsMCw3LjUxNywxLjc0NSw3LjgzMSw1LjQ5M2MwLjAxMiwwLjEzLTAuMDM1LDAuMjU1LTAuMTIyLDAuMzVjLTAuMDg2LDAuMDktMC4yMDgsMC4xNDUtMC4zMzQsMC4xNDVoLTIuMDM5CWMtMC4yMTIsMC0wLjM5Ny0wLjE0OS0wLjQ0LTAuMzU0Yy0wLjQ5MS0yLjE3My0xLjY3OC0yLjg2OC00LjkwNC0yLjg2OGMtMy42MTEsMC00LjAzMSwxLjI1Ny00LjAzMSwyLjIJYzAsMS4xNDMsMC40OTUsMS40NzcsNS4zNjcsMi4xMjJjNC44MjUsMC42NCw3LjExNiwxLjU0NCw3LjExNiw0LjkzNWMwLDMuNDE4LTIuODUzLDUuMzc5LTcuODI3LDUuMzc5Ij48L3BhdGg+PC9zdmc+"
                  />
                  <h3 className="font-semibold">Node.js</h3>
                </div>
                <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
                  <img
                    src="/skills/expressjs.svg"
                    alt="svgImg-express"
                    width={22}
                  />
                  <h3 className="font-semibold">Express.js</h3>
                </div>
                <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
                  <img
                    alt="svgImg"
                    width={22}
                    src="data:image/png;base64,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"
                  />
                  <h3 className="font-semibold">Mongo DB</h3>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{
                  duration: 0.5,
                  ease: easing,
                  delay: 0.4,
                }}
                className="flex flex-wrap items-center"
              >
                <h2 className="font-semibold underline mr-1">
                  Familiar With:{' '}
                </h2>{' '}
                <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
                  <img
                    alt="svgImg"
                    width={24}
                    src="data:image/png;base64,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"
                  />
                  <h3 className="font-semibold">Redux</h3>
                </div>
                <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
                  <img
                    alt="svgImg"
                    width={30}
                    src="data:image/png;base64,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"
                  />
                  <h3 className="font-semibold">Next.js</h3>
                </div>
                <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
                  <img alt="svgImg" width={18} src="/skills/cpp.svg" />
                  <h3 className="font-semibold">C++</h3>
                </div>
                <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
                  <img alt="svgImg" width={24} src="/skills/python.svg" />
                  <h3 className="font-semibold">Python</h3>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{
                  duration: 0.5,
                  ease: easing,
                  delay: 0.45,
                }}
                className="flex flex-wrap items-center mb-10 lg:mb-0"
              >
                <h2 className="font-semibold underline mr-1">Others: </h2>{' '}
                <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
                  <img
                    alt="svgImg"
                    width={14}
                    src="https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png"
                  />
                  <h3 className="font-semibold">Firebase</h3>
                </div>{' '}
                <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
                  <img
                    alt="svgImg"
                    width={14}
                    src="data:image/png;base64,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"
                  />
                  <h3 className="font-semibold">Auth0</h3>
                </div>
                <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
                  <img
                    alt="svgImg"
                    width={24}
                    src="data:image/png;base64,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"
                  />
                  <h3 className="font-semibold">Stripe</h3>
                </div>
                <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
                  <img
                    alt="svgImg"
                    width={20}
                    src="https://seeklogo.com/images/J/jwt-logo-65D86B4640-seeklogo.com.png"
                  />
                  <h3 className="font-semibold">JWT</h3>
                </div>
                <div className="flex items-center gap-1 border border-slate-200 rounded-sm px-1 m-[2px]">
                  <img
                    alt="svgImg"
                    width={20}
                    src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                  />
                  <h3 className="font-semibold">Git</h3>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
