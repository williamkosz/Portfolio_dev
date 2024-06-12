import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition : {duration: 0.5, delay: delay},
    },
});

function Introduction ({title, description, tech}) {

    Introduction.propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tech: PropTypes.string.isRequired,
    }

  return (
    <div className="border-b border-neutral-900 pb-4 lg:m-35">
        <div className="flex flex-wrap">
            <div className="w-full"> 
                <div className="flex flex-col items-center">
                    <motion.h2 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent text-center">
                        {title}</motion.h2>

                        <motion.p 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-xl py-8 font-light tracking-tighter text-justify">
                            {description}
                        </motion.p>
                        <div className="flex flex-wrap gap-4">
                            {tech.map((tech, index) => (
                                <span key={index} className=" rounded bg-neutral-900 px-2 py-1 text-base font-medium text-purple-800 mb-4">
                                    {tech}
                                </span>
                            ))}
                        </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Introduction