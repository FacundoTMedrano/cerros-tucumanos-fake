import { motion } from "framer-motion";
const NuestrosClientes = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1>nuestrosclientes</h1>
        </motion.div>
    )
};
export default NuestrosClientes;