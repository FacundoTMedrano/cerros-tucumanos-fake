import { motion } from "framer-motion";
import imagenes from "../imagenes";
import { IKImage } from 'imagekitio-react';
const Fotos = () => {

    const datos = imagenes.imgGaleria.map((x, i) => {
        return (
            <div key={i}>
                <IKImage
                    urlEndpoint={imagenes.urlEndpoint}
                    path={x}
                    transformation={[{ "w": "200" }]}
                    lqip={{ active: true, quality: 20 }}
                />
            </div>
        )
    })

    return (
        <motion.div
            className="galeriaGrid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {datos}
        </motion.div>
    )
};

export default Fotos;