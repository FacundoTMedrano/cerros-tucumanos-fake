// import imagenes from "../imagenes";
// import CargaMultiple from "./CargaMultiple";
// import { IKImage, IKContext } from 'imagekitio-react';
const Fotos = () => {
    // const urlEndpoint = "https://ik.imagekit.io/showimg/cerros-tucumanos"
    // const dosImag = imagenes.datosGaleria.slice(0, 2);
    // const imgdos = imagenes.imgInicio.slice(0, 2);
    // const datos = imgdos.map((x, i) => <CargaMultiple key={i} path={x} />)

    // "https://ik.imagekit.io/showimg/cerros-tucumanos/foto_2_yUUVkp8pI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666894144075&tr=w-100"

    // "https://ik.imagekit.io/showimg/cerros-tucumanos/yogurt2_dh6x3LvYq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666901708479&tr=with-100px"

    // https://ik.imagekit.io/showimg/cerros-tucumanos/tr:w-300,h-300/yogurt2_dh6x3LvYq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666901708479
    // // https://ik.imagekit.io/demo/tr:w-300,h-300/medium_cafe_B1iTdD0C.jpg

    return (
        <div>
            {/* <IKContext
                urlEndpoint={urlEndpoint}
                transformationPosition="/cerros-tucumanos"
            > */}
            {/* {datos} */}
            {/* <IKImage
                urlEndpoint={urlEndpoint}
                src={imagenes.datosGaleria[0].path}
                transformation={[{ width: 100 }]}
                lqip={{ active: true, quality: 20 }}
            /> */}
            {/* <IKImage
                urlEndpoint={urlEndpoint}
                src={imagenes.datosGaleria[1].path}
                transformation={[{ width: 100 }]}
                lqip={{ active: true, quality: 20 }}
            /> */}
            {/* </IKContext> */}
        </div>
    )
};

export default Fotos;