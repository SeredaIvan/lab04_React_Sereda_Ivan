import React from "react";
import { motion } from "framer-motion";

const AnimatedPage = ({ children, animation, transition = { duration: 0.5 } }) => (
    <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        transition={transition}
    >
        {children}
    </motion.div>
);

export default AnimatedPage;
