import imagenes from "../imagenes";
import { IKImage } from 'imagekitio-react';
import { motion } from "framer-motion";
import Modal from "./Modal";
import { useState } from "react";
const Fotos = () => {

    const [selectId, setSelectId] = useState();
    const datos = imagenes.imgGaleria.map((x, i) => {
        return (
            <div className="g-contDivDeimg" key={i}>
                <motion.div
                    whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 1.1 }}
                    onClick={() => setSelectId(x.id)}
                    layoutId={`img-${x.id}`}
                >
                    <IKImage
                        className="imgFotos"
                        urlEndpoint={imagenes.urlEndpoint}
                        path={x.url}
                        transformation={[{ "w": "200", "h": "150" }]}
                        lqip={{ active: true, quality: 20 }}
                    />
                </motion.div>
            </div>
        )
    })

    return (
        <div className="galeriaGrid">
            {datos}
            {selectId && <Modal setSelectId={setSelectId} id={selectId} />}
        </div>
    )
};

export default Fotos;