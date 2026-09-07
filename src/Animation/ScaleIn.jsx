import { motion } from "framer-motion";

export const ScaleIn = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.5,
                delay,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
};