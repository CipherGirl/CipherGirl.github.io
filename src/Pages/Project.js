import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import projects from '../data.json';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id: slug } = useParams();
  const project = projects.filter((project) => project.slug == slug)[0];
  console.log(project, slug);
  return (
    <div className="min-h-[calc(100vh-64px)] pt-[64px] w-4/5 m-auto">
      <div className="pt-20">
        <h1 class="text-2xl font-bold">
          {project.title}{' '}
          <span className="inline-block text-sm italic">{project.info}</span>
        </h1>
        <h2 className="text-md">{project.subtitle}</h2>
        <p className="my-2 ">{project.description}</p>
        <h3 className="my-2 font-bold">Key Features: </h3>
        <ul>
          {project.features.map((feature) => (
            <li className="pb-1">{feature}</li>
          ))}
        </ul>
        <h3 className="my-2 font-bold">
          {' '}
          Technologies:{' '}
          {project.techs.map((tech) => (
            <span className="font-normal">{tech} </span>
          ))}
        </h3>
        <h3 className="font-bold my-2">Preview:</h3>
        <Swiper
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiperm text-center"
        >
          {project.preview.map((link) => (
            <SwiperSlide>
              <div className="w-4/5 m-auto object-contain">
                <img src={`/${link}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <h3 className="font-bold my-2">Website Live Preview:</h3>
      <iframe
        src={`${project.links.live}`}
        className="w-full h-[80vh] border border-slate-500"
      ></iframe>
    </div>
  );
};

export default Project;
