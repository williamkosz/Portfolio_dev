import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import { useState } from 'react';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

function Introduction({ title, description, tech, image }) {
    const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
    const [expandedImage, setExpandedImage] = useState(null);

    Introduction.propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tech: PropTypes.arrayOf(PropTypes.string).isRequired,
        image: PropTypes.arrayOf(PropTypes.string).isRequired
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
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent text-center font-semibold">
                            {title}
                        </motion.h2>

                        <motion.p
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-8 font-light tracking-tighter text-justify">
                            {description}
                        </motion.p>
                        <div className="flex flex-wrap gap-4">
                            {tech.map((tech, index) => (
                                <span key={index} className="rounded bg-neutral-900 px-2 py-1 text-base font-medium text-purple-700 mb-8">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <motion.div
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-row flex-wrap items-center justify-center gap-6">
                        {image.map((image, index) => (
                            <motion.img
                                key={index}
                                className="rounded-2xl w-full lg:w-2/5 cursor-pointer"
                                src={image}
                                alt={`Image ${index}`}
                                whileHover={{ scale: hoveredImageIndex === index ? 1.03 : 1, transition: { duration: 0.5 } }}
                                onMouseEnter={() => setHoveredImageIndex(index)}
                                onMouseLeave={() => setHoveredImageIndex(null)}
                                onClick={() => setExpandedImage(image)}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            {expandedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
                    onClick={() => setExpandedImage(null)}>
                    <div className="relative">
                        <img className="rounded-2xl xl:max-w-screen-xl " src={expandedImage} alt="Expanded" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Introduction;