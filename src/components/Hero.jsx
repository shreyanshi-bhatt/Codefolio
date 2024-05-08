import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'



const Hero = () => {

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 1290) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial screen size on load

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  var orientation = isMobile ? 'relative' : 'absolute';

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`${styles.paddingX} ${orientation} inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi there! <span className='text-[#915EFF]'>Shreyanshi</span> here!
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Welcome to my Codefolio.<br className='sm:block hidden' />
            Am I a programmer? Yes. Do I meticulously watch coding scenes in movies just to roast them later? Absolutely!
          </p>
        </div>
      </div>

      {isMobile ? (<center><div className='player'><lottie-player src="https://assets3.lottiefiles.com/packages/lf20_UHhZXv9VWn.json" background="transparent"  speed="1" style={{width: 400 + 'px', height: 400 + 'px'}} loop autoplay></lottie-player></div></center>) : (<ComputersCanvas />)}

      {/* <ComputersCanvas /> */}

      {/* Scroller
       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
}

export default Hero