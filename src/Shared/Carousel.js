import { motion } from 'framer-motion';
import data from '../data.json';

const Carousel = () => {
  return (
    <motion.div className="carousel">
      <motion.div className="inner-carousel">
        {data.map((project, i) => {
          return (
            <motion.div className="item" key={i}>
              <img src={project.image} alt="project_preview"></img>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
