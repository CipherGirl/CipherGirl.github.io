import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import projects from '../../data.json';
import { useNavigate } from 'react-router-dom';
const Projects = () => {
  const myRef = useRef();
  const navigate = useNavigate();

  function scrollToComponent() {
    if (window.location.hash === '#projects') {
      myRef.current.scrollIntoView();
      myRef.current.focus();
    }
  }

  useEffect(() => scrollToComponent(), []);

  const easing = [0.6, -0.05, 0.01, 0.99];

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 60 },
  };

  return (
    <section
      ref={myRef}
      id="projects"
      className="flex flex-col items-center pt-[64px] gap-10 mb-20"
    >
      <h1 className="text-4xl ">Projects</h1>
      <div className="max-w-[90%] flex flex-wrap items-center justify-evenly gap-5">
        {projects.map((project, index) => {
          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{
                duration: 0.5,
                ease: easing,
                delay: 0.1 * (index + 2),
              }}
              whileHover={{ scale: 1.05 }}
              className="card lg:card-side bg-base-100 shadow-xl border w-[550px] lg:w-[32%] h-auto lg:h-[400px] overflow-y-auto"
            >
              <div className={`w-full md:w-1/2 h-[300px] md:h-auto m-auto`}>
                <img
                  src={`${project.image}`}
                  width="100%"
                  height="auto"
                  className=""
                ></img>
              </div>
              <div className="p-4 w-full md:w-1/2 flex flex-col justify-between my-2">
                <div>
                  {' '}
                  <h2 className="text-xl font-bold">
                    {project.title}{' '}
                    <span className="inline-block text-xs italic">
                      {project.info}
                    </span>
                  </h2>
                  <h4 className="text-sm">{project.subtitle}</h4>
                  <p className="text-sm font-semibold my-4">
                    Key Features:
                    <ul className="text-xs pt-2 font-normal">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => navigate(`/projects/${project.slug}`)}
                    className="btn btn-outline btn-sm w-full"
                  >
                    Details
                  </button>
                  <div className="card-actions gap-2 mt-2 text-sm">
                    <a
                      className="border-2 hover:bg-slate-500 hover:text-white hover:border-slate-500 rounded-full px-2 text-sm"
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Site
                    </a>
                    {project.links.client && (
                      <a
                        className="border-2 hover:bg-slate-500 hover:text-white hover:border-slate-500 rounded-full px-2 text-sm"
                        href={project.links.client}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Client Side Code
                      </a>
                    )}
                    {project.links.server && (
                      <a
                        className="border-2 hover:bg-slate-500 hover:text-white hover:border-slate-500 rounded-full px-2 text-sm"
                        href={project.links.server}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Server Side Code
                      </a>
                    )}{' '}
                    {project.links.code && (
                      <a
                        className="border-2 hover:bg-slate-500 hover:text-white hover:border-slate-500 rounded-full px-2 text-sm"
                        href={project.links.code}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
