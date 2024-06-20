import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri"
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [ 10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});



const Technologies = () => {
  return (
    <div className="boerder-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity:0, y: -100}}
        transition={{ duration: 1.5}}
        viewport={{ once: true }}
        className="my-32 text-center text-4xl">Technologies</motion.h1>
        <div
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate= "animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaHtml5 className="text-7xl text-[#dc4d25]" title="HTML"/>
                        <p className="text-center pt-1 text-[#dc4d25]">HTML</p>
                </motion.div>

                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate= "animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCss3Alt className="text-7xl text-[#254bdd]" title="CSS" />
                     <p className="text-center pt-1 text-[#254bdd]">CSS</p>
                </motion.div>

                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate= "animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoJavascript className="text-7xl text-[#efd81c]" title="Javascript" />
                        <p className="text-center pt-1 text-[#efd81c]">Javascript</p>
                </motion.div>

                <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate= "animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" title="React" />
                        <p className="text-center pt-1 text-cyan-400">React</p>
                </motion.div>

                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate= "animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className="text-7xl text-[#38bdf8]" title="Tailwind" />
                        <p className="text-center pt-1 text-[#38bdf8]">Tailwind</p>
                </motion.div>

                <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate= "animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoNodejs className="text-7xl text-green-500" title="Node.js" />
                        <p className="text-center pt-1 text-green-500">Node.JS</p>
                </motion.div>

                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate= "animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500" title="MongoDB" />
                        <p className="text-center pt-1 text-green-500">MongoDB</p>
                </motion.div>

                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate= "animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGitAlt className="text-7xl text-[#f06033]" title="Git" />
                        <p className="text-center pt-1 text-[#f06033]">Git</p>
                </motion.div>

        </div>
    </div>

  )
}

export default Technologies