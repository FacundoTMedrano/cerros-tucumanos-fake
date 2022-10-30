import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import imagenes from '../imagenes';
import { IKImage } from "imagekitio-react";
import { motion } from "framer-motion";
const Inicio = () => {

    const imgs = imagenes.imgInicio.map((x, i) => {
        return (
            <SwiperSlide key={i}>
                <div>
                    <IKImage
                        urlEndpoint={imagenes.urlEndpoint}
                        path={x}
                        transformation={[{ "w": "300" }]}
                        lqip={{ active: true, quality: 20 }}
                    />
                </div>
            </SwiperSlide>
        )
    })

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <IKImage
                urlEndpoint={imagenes.urlEndpoint}
                path={imagenes.logoCerrosTucumanos}
                transformation={[{ "w": 300 }]}
                lqip={{ active: true, quality: 20 }}
            />
            <Swiper
                className="mySwiper"
                speed={1200}
                pagination={{ clickable: true }}
                navigation={true}
                loop={true}
                modules={[Pagination, Autoplay, Navigation]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            >
                {imgs}
            </Swiper>
            <section>
                <h1>La mejor eleccion en productos Lacteos</h1>
                <Link to={"/productos"}>
                    <p>nuestros productos</p>
                </Link>
            </section>
        </motion.div>
    )
};
export default Inicio;