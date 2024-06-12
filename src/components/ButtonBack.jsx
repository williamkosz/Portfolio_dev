import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const ButtonBack = () => {
    const navigate = useNavigate();
  
    const handleButtonClick = () => {
      navigate('/');
    };
  
    return (

    <div className="flex justify-center border-b border-neutral-900 pb-4">
      <a href="#projets">
        <motion.button 
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-pink-300 to-purple-500 text-gray-800 font-bold py-2 px-6 rounded-2xl mt-4"
            onClick={handleButtonClick}
        >
            Retour
        </motion.button>
      </a>
    </div>
  );
}

export default ButtonBack
