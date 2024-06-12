import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
  },
});

const ButtonBack = () => {
    const navigate = useNavigate();
  
    const handleButtonClick = () => {
      navigate('/');
    };
  
    return (

    <div className="flex justify-center  border-neutral-900 mb-16 pb-4">
      <a href="#projets">
        <motion.button 
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: [null, 1.2, 1.1] }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-pink-300 to-purple-500 text-gray-800 font-bold py-2 px-6 rounded-2xl mt-8"
            onClick={handleButtonClick}
        >
            Retour
        </motion.button>
      </a>
    </div>
  );
}

export default ButtonBack
