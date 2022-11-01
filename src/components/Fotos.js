import imagenes from "../imagenes";
import { IKImage } from 'imagekitio-react';
const Fotos = () => {

    const datos = imagenes.imgGaleria.map((x, i) => {
        return (
            <div className="g-contDivDeimg" key={i}>
                <IKImage
                    className="imgFotos"
                    urlEndpoint={imagenes.urlEndpoint}
                    path={x}
                    transformation={[{ "w": "200", "h": "150" }]}
                    lqip={{ active: true, quality: 20 }}
                />
            </div>
        )
    })

    return (
        <div className="galeriaGrid">
            {datos}
        </div>
    )
};

export default Fotos;