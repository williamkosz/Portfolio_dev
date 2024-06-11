import about from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion";


const About = () => {
    return (
      <div className="border-b border-neutral-900 pb-4">
          <motion.h2 
            whileInView={{ opacity: 1, y: 0}}
            initial={{ opacity:0, y: -100}}
            transition={{ duration: 1.5}}
            className="my-32 text-center text-4xl">A propos de 
            <span className="text-neutral-500"> moi</span>
          </motion.h2>
          
          <div className="flex flex-wrap">
              <motion.div 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: -100}}
              transition={{duration: 0.5}}
              className="w-full lg:w-1/2 lg:p-8">

                  <div className="flex items-center justify-center lg:justify-start">
                      <img className="rounded-2xl" src={about} alt="Image pour rubrique à propos de moi" />
                  </div>
              </motion.div>
              <motion.div 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: 100}}
              transition={{duration: 0.5}}
              className="w-full lg:w-1/2">

                  <div className="flex flex-col items-center lg:items-start">
                      <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify">{ABOUT_TEXT}</p>
                      <motion.a 
                      whileHover={{ scale: [null, 1.5, 1.4] }}
                      transition={{ duration: 0.3 }}
                      href="public/cv_william_koszelnik.pdf" download className="flex items-center bg-gradient-to-r from-pink-300 to-purple-500 text-gray-800 font-bold py-2 px-6 rounded-2xl mt-4">
                          <svg className="fill-current w-6 h-6 mr-2 lg:w-5 lg:h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                          </svg>
                          Téléchargez mon CV
                      </motion.a>
                  </div>
              </motion.div>
          </div>
      </div>
    );
  }

export default About