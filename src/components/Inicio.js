import { Link } from "react-router-dom";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import imagenes from '../imagenes';
import { IKImage } from "imagekitio-react";
const Inicio = () => {

    const imgs = imagenes.imgInicio.map((x, i) => {
        return (
            <SwiperSlide key={i}>
                <div>
                    <IKImage
                        urlEndpoint={imagenes.urlEndpoint}
                        path={x}
                        transformation={[{ "w": "300", "h": "200" }]}
                        lqip={{ active: true, quality: 20 }}
                    />
                </div>
            </SwiperSlide>
        )
    })

    return (
        <div className="contenedorInicio">
            <div className="inicioLogo">
                <IKImage
                    urlEndpoint={imagenes.urlEndpoint}
                    path={imagenes.logoCerrosTucumanos}
                    transformation={[{ "w": 300 }]}
                    lqip={{ active: true, quality: 20 }}
                />
            </div>
            <Swiper
                className="mySwiper2"
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
        </div>
    )
};
export default Inicio;