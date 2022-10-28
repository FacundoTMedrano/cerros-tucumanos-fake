import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
// import "swiper/css/navigation";
import imagenes from '../imagenes';

const Inicio = () => {

    const imgs = imagenes.imgInicio.map((x, i) => {
        return (
            <SwiperSlide key={i}>
                <div>
                    <img src={x} style={{ width: "300px", height: "300px" }} alt="imagen"></img>
                </div>
            </SwiperSlide>
        )
    })

    return (
        <>
            <img src={imagenes.logoCerrosTucumanos} style={{ width: "300px", height: "300px" }} alt="logo" />
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