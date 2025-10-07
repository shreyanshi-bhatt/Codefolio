import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { certificates_and_awards } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div className='bg-tertiary rounded-[20px] py-2 px-3 w-full min-h-[180px] flex justify-center items-center flex-col'>
          <img
            src={icon}
            alt={title}
            className='w-20 h-20 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
  );
};

const Certification = () => {
  return (
    <div>
    <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>Certifications.</h2>
      <p className={styles.sectionSubText}>Some fun learnings 🏆</p>
      <div className='mt-20 flex flex-wrap gap-10'>
       {certificates_and_awards.map((service, index) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </motion.div>
    </div>
  )
}

export default SectionWrapper(Certification, "certification")