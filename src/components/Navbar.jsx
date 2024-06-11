import logo from "../assets/WkLogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { motion } from "framer-motion"


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-20" src={logo} alt="logo WK" />
        </div>
        <motion.div 
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          className="m-8 flex flex-row items-center justify-center gap-4 text-2xl cursor-pointer">
          <a href="https://www.linkedin.com/in/william-koszelnik-468135203/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/williamkosz" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </motion.div>
    </nav>
  )
}

export default Navbar