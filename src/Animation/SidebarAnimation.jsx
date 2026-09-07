import { motion } from "framer-motion";

export const SidebarAnimation = ({ children, sidebarOpen }) => {
    return (
        <motion.div
            initial={false}
            animate={{
                x: sidebarOpen ? 0 : "-100%",
            }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
            }}
            className="lg:translate-x-0"
        >
            {children}
        </motion.div>
    );
};