import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import projects from '../../data.json';
import { Link, useNavigate } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';

const Projects = () => {
  const myRef = useRef();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const controls = useAnimation();

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
    <div
      ref={myRef}
      id="projects"
      className="min-h-[80vh] flex flex-col items-center justify-center gap-10 pt-20 lg:pt-0"
    >
      <h1 className="text-4xl ">Projects</h1>
      <div className="max-w-[90%] flex flex-wrap items-center justify-evenly gap-5">
        {projects.map((project, index) => {
          return (
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{
                duration: 0.5,
                ease: easing,
                delay: 0.1 * (index + 2),
              }}
              whileHover={{ scale: 1.05 }}
              class="card lg:card-side bg-base-100 shadow-xl border w-[550px] h-auto lg:h-[400px]"
            >
              <div className={`w-full md:w-1/2 h-[300px] md:h-auto m-auto`}>
                <img src={`${project.image}`} className="object-contain"></img>
              </div>
              <div class="card-body w-full md:w-1/2">
                <h2 class="text-xl font-bold">
                  {project.title}{' '}
                  <span className="inline-block text-xs italic">
                    {project.info}
                  </span>
                </h2>
                <h4 className="text-sm">{project.subtitle}</h4>
                <p className="text-sm">
                  Key Features:
                  <ul className="text-xs pt-2">
                    {project.features.map((feature) => (
                      <li className="">{feature}</li>
                    ))}
                  </ul>
                </p>
                <button
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  className="btn btn-outline btn-sm"
                >
                  Details
                </button>
                <div class="card-actions gap-2 mt-2 text-sm">
                  <a
                    class="border-2 hover:bg-slate-500 hover:text-white hover:border-slate-500 rounded-full px-2 text-sm"
                    href={project.links.live}
                    target="_blank"
                  >
                    Live Site
                  </a>
                  {project.links.client && (
                    <a
                      class="border-2 hover:bg-slate-500 hover:text-white hover:border-slate-500 rounded-full px-2 text-sm"
                      href={project.links.client}
                      target="_blank"
                    >
                      Client Side Code
                    </a>
                  )}
                  {project.links.server && (
                    <a
                      class="border-2 hover:bg-slate-500 hover:text-white hover:border-slate-500 rounded-full px-2 text-sm"
                      href={project.links.server}
                      target="_blank"
                    >
                      Server Side Code
                    </a>
                  )}{' '}
                  {project.links.code && (
                    <a
                      class="border-2 hover:bg-slate-500 hover:text-white hover:border-slate-500 rounded-full px-2 text-sm"
                      href={project.links.code}
                      target="_blank"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
