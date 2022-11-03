import imagenes from "../imagenes";
import { IKImage } from "imagekitio-react";
const Historia = () => {
    return (
        <div
            className="contenedorHistoria"
        >
            <article>
                <h1 className="tituloPrincipalHistoria">Historia de un Proyecto en permanente Expansion</h1>
                <section>
                    <h2>Antecedentes</h2>
                    <IKImage
                        className="floatHistoria"
                        urlEndpoint={imagenes.urlEndpoint}
                        path={imagenes.logoCerrosTucumanos}
                        transformation={[{ "w": "200" }]}
                        lqip={{ active: true, quality: 20 }}
                    />
                    <p className="parrafo-negrita"><b>La Empresa unipersonal de José Lucas Medici viene desarrollando sus actividades desde noviembre de 1989, encontrándose él mismo al frente de su gerenciamiento general, previéndose su continuidad permanente. </b></p>

                    <p>La idea surgió en el año 1989, luego de efectuar los primeros pasos comerciales vendiendo los productos elaborados por los Monjes Benedictinos de la abadía Cristo Rey, situada en El Siambón a 70 Km. al noroeste de la provincia de Tucumán. Pasados unos meses de la comercialización de los productos que ellos realizaban (miel de abejas, dulce de leche y dulces regionales), devino un periodo de desabastecimiento general de materias primas; lo que diera origen a una pausa productiva, mermando la comercialización de sus productos. </p>

                    <p className="parrafo-cursiva"><em>En esas circunstancias y alejado de la relación con la abadía, se optó por comprar y fraccionar en forma personal y particular, un tambor de miel para poder suplir estos faltantes y así cumplir con los requerimientos de los clientes. </em></p>
                    <p>Al acentuarse este quiebre de stock, se continuó envasando miel en saches de un kilo, manufactura que se realizaba en el domicilio particular de Lucas Medici. Cuando se pensó en una marca que identificara al producto, fue que vino a la mente el nombre de algo que tanto identifica a la tierra Tucumana como son sus cerros. Y de ellos el cerro San Javier con su inconfundible escultura del también tucumano Juan Carlos Iramain: “El Cristo Bendicente”, anclado en la cima del mismo, visible desde San Miguel de Tucumán, la que recibe su mirada y se encuentra a sus pies. Tal imagen acompañará por siempre al logo de la empresa. </p>
                </section>
                <section>
                    <h2>"Desarrollo del Proyecto"</h2>
                    <p>En el lapso del desarrollo productivo/comercial, se logró perfeccionar una adecuada capacitación técnica e industrial tanto en el manejo de los productos apícolas como el desarrollo de fórmulas de dulces y mermeladas que fueran experimentadas satisfactoriamente, habiendo contado con asesores de “dulceros” de las provincias de Santa Fe, Córdoba y Tucumán; a los que agregaría posteriormente una variada línea de productos lácteos, elaborados con materia prima de alta calidad obtenida de la cuenca lechera de Trancas, provincia de Tucumán. </p>

                    <p>La permanente investigación le permitió lograr un alto desarrollo tanto de los productos apícolas (miel, jalea real, ceras, propóleos, cremas, polen y sus mezclas alimenticias y medicinales); como de los dulces y mermeladas (leche, cayote, zapallo, frutilla y otras frutas de estación), llegando a obtener de estos últimos muestras óptimas y acabadas de alta calidad para su industrialización y posterior comercialización. El entusiasmo que produjo la exitosa experimentación le llevó a iniciar una actividad industrial de productos alimenticios en gran escala. Para ello, en primer lugar diseñó y concretó una planta productiva en un local propio ubicado en calle Santiago del Estero 4197 de la ciudad de San Miguel de Tucumán, iniciando sus actividades en el mes de noviembre de 1991, con inscripción en las entidades pertinentes, como el Instituto de Bromatología de la Provincia de Tucumán y AFIP. </p>

                    <p>Conjuntamente con la miel de abejas, se elaboraban otros productos de origen apícola como polen, Jalea Real, polen con miel, propóleos y una crema a base de vaselina sólida y jalea real. El principal canal de comercialización hasta ese entonces eran las dietéticas y herboristerías, pero en agosto de 1992 sobrevino a la actividad una gran crisis, por el rechazo de los consumidores a los productos apícolas, debido al temor que generalizó una intoxicación en varios puntos del país, por una contaminación de un subproducto apícola, el propóleos. Ante esta coyuntura se orientó el esfuerzo a la venta de miel pura de abejas, relegando a un segundo plano a nuestro fuerte inicial, (los preparados apícolas). Fue así que iniciamos otro canal comercial, mas dirigido al supermercadismo y mayoristas con nuestra miel de abejas, a la que posicionamos como primera marca en las grandes cadenas de supermercados. Para lograr el fraccionado de miel y comercialización de miel, ya trabajaban en el emprendimiento cuatro personas sumando a Medici. </p>

                </section>
                <section>
                    <h2>"Comienzo de la Producción"</h2>
                    <p>A fines del año 94, una industria láctea de Tucumán (COOTAM) afrontó graves problemas económicos cesando su producción. Como consecuencia de ello dejó de comprar leche, por lo que un tambero nos propuso hacer dulce de leche con la leche del tambo de su propiedad. Fue así que luego de hacer la infraestructura para ello, en agosto del año 1996 se concreta la primera elaboración de dulce de leche para repostería, comenzando con una producción diaria de 500 lts de leche (unos 230 Kg. de dulce de leche), que se trasladaba en una camioneta desde el tambo en Benjamín Paz (Trancas) hasta fábrica. Al incorporar la elaboración del dulce de leche, se demandó más mano de obra. En ese entonces había 3 operarios en dulcería, 2 en fraccionado de miel y un administrativo. </p>
                </section>
            </article>
        </div>
    )
};

export default Historia;