import { CONTACT } from "../constants"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
          whileInView={{ opacity: 1, y:0 }}
          initial= {{opacity: 1, y:-100 }}
          transition={{ duration: 0.5}}
          viewport= {{ once: true }}
          className="my-20 text-center text-4xl">Me contacter</motion.h2>
        <div className="text-center tracking-tighter">
          <motion.p
              whileInView={{ opacity: 1, x:0 }}
              initial= {{opacity: 1, x:-100 }}
              transition={{ duration: 1}}
              viewport= {{ once: true }}
              className="my-4">{CONTACT.adress}
             
          </motion.p>
          <motion.p 
              whileInView={{ opacity: 1, x:0 }}
              initial= {{opacity: 1, x:-100 }}
              transition={{ duration: 1}}
              viewport= {{ once: true }}
              className="my-4">{CONTACT.phoneNo}</motion.p>
          <motion.div
              whileHover={{ scale: [null, 1.2, 1.1] }}
              transition={{ duration: 0.5 }}>
              <a href={`mailto:${CONTACT.email}`} className="border-b">
                {CONTACT.email}
              </a>
          </motion.div>
        </div>
    </div>
  )
}

export default Contact