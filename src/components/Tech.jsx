import React from 'react'
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Card } from "./canvas";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Exploring a wider domain
        </p>
        <h2 className={styles.sectionHeadText}>
          Tech Stack.
        </h2>
        <br></br><br></br>
      </motion.div>  
      <motion.p variants={fadeIn("", "", 0.1, 1)}>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <Card imgURL={technology.icon} name={technology.name} />
          </div>
        ))}
      </div>
      </motion.p>
    </div>
  )
}

export default SectionWrapper(Tech, "");