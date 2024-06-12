import logo from "../assets/WkLogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center"> {/* Partie gauche de la barre de navigation */}
        <Link to="/">
          <motion.img 
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            className="mx-2 w-20" src={logo} alt="logo WK" />
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        <motion.div 
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          className="flex items-center cursor-pointer">
          <a href="https://www.linkedin.com/in/william-koszelnik-468135203/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl" />
          </a>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          className="flex items-center cursor-pointer">
          <a href="https://github.com/williamkosz" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl" />
          </a>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar