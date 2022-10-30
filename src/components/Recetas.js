import { motion } from "framer-motion";
const Recetas = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1>recetas</h1>
        </motion.div>
    )
};
export default Recetas;