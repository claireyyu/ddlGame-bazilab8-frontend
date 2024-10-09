'use client'

import { motion } from "framer-motion"

export default function Template({children}) {
    return (
      <motion.div
        initial={{ y: 15, opacity: 0.75 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "linear", duration: 0.75 }}
      >
        {children}
      </motion.div>
    )
}