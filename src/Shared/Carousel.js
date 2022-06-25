import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import data from '../data.json';

const Carousel = (props) => {
  console.log(data);
  return (
    <motion.div className="carousel">
      <motion.div className="inner-carousel">
        {data.map((project) => {
          return (
            <motion.div className="item ">
              <img src={project.image} alt="project_preview"></img>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
