import imagenes from "../imagenes";
import { IKImage } from "imagekitio-react";
import { motion } from "framer-motion";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";


const Modal = ({ id, setSelectId }) => {

    const imgs = imagenes.imgGaleria.map((x, i) => {
        return (
            <SwiperSlide key={i}>
                <div>
                    <IKImage
                        className="imgSwiperGaleria"
                        urlEndpoint={imagenes.urlEndpoint}
                        path={x.url}
                        transformation={[{ "w": "600", "h": "370", "c": "at_max" }]}
                        lqip={{ active: true, quality: 20 }}
                        loading="lazy"
                    />
                </div>
            </SwiperSlide>
        )
    })

    const clear = (e) => {
        e.preventDefault();
        if (e.target.className === "modal-img") {
            setSelectId("")
            return
        }
        return null
    };

    return (
        <div
            className="modal-img"
            onClick={clear}>
            <motion.div
                layoutId={`img-${id}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Swiper
                    centeredSlides={true}
                    className="mySwiper"
                    speed={1200}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    loop={true}
                    initialSlide={id - 1} //valor inicial
                >
                    {imgs}

                </Swiper>

            </motion.div>
        </div>
    )
};

export default Modal;