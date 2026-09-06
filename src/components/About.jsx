import React from 'react';
import { Tilt } from 'react-tilt';
import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <div className='w-full violet-gradient p-[1px] rounded-[20px] shadow-card'>
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
        <h2 className={`${styles.sectionHeadText}`}>About.</h2>
        <p className={styles.sectionSubText}>It's me! HI! 🙋🏻‍♀️ I'm the builder, it's me! 💻</p>

      <p className='mt-4 text-secondary text-[17px] w-full leading-[30px]'>
        Software Engineer and Master's student in Computer Science at Arizona State University,
        passionate about building scalable, production-grade software and AI-powered applications.
        Experience spans full stack development, distributed systems, cloud infrastructure, and
        LLM-enabled products, with industry experience at Amazon and a track record of shipping reliable
        software using modern engineering practices. Enjoys thinking, learning, and problem-solving.
      </p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
