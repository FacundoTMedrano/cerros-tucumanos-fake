import { IKImage } from "imagekitio-react";
import imagenes from "../imagenes";

const CargaMultiple = ({ path }) => {
    return (
        <IKImage
            urlEndpoint={imagenes.urlEndpoint}
            path={path}
            transformation={[{ "w": "100" }]}
            lqip={{ active: true, quality: 20 }}
        />
    )
}
export default CargaMultiple;