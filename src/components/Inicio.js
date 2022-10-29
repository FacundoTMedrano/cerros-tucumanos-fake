import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import imagenes from '../imagenes';
import { IKImage } from "imagekitio-react";

const Inicio = () => {

    console.log(imagenes)

    const imgs = imagenes.imgInicio.map((x, i) => {
        return (
            <SwiperSlide key={i}>
                <div>
                    {/* <IKImage
                        urlEndpoint={imagenes.urlEndpoint}
                        path={x}
                        transformation={{ "w": "300" }}
                        lqip={{ active: true, quality: 20 }}
                    /> */}
                </div>
            </SwiperSlide>
        )
    })

    return (
        <>
            {/* <img src={imagenes.logoCerrosTucumanos} style={{ width: "300px", height: "300px" }} alt="logo" /> */}
            <IKImage
                urlEndpoint={imagenes.urlEndpoint}
                path={imagenes.imgInicio[1]}
                transformation={[{ "w": 300 }]}
            // lqip={{ active: true, quality: 20 }}
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
        </>
    )
};
export default Inicio;