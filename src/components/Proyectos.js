import { motion } from "framer-motion";
const Proyectos = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <section>
                <h2>Proyecto “Quesería”</h2>
                <p>A comienzos del año 2013 se incorporaron las tinas para elaboración de queso para incrementar la oferta de productos lácteos. De ese modo se comenzó a elaborar queso mozzarella, cremoso, tybo o barra y ricota. El queso es un producto que insume gran cantidad de leche, por lo que debió incorporar nuevos tambos para que provean la materia prima, lo que permitirá crear un establecimiento productor a futuro.
                    Debido a la escasa industrialización de leche en el norte, uno de los objetivos a resolver, fue el del transporte de leche cruda, ya que no había una frecuencia de retiros de leche por parte de la escasa oferta de vehículos acondicionados a tal fin en la zona. Con el fin de minimizar este inconveniente, a comienzos del año 2014 se resolvió incorporar un segundo camión de transporte propio de leche en camiones cisterna. El ultimo galpon / deposito inaugurado en diciembre de 2014, ha ampliado nuestra superficie total cubierta llegando a los 1200 m2. </p>
            </section>
            <section>
                <h2>Proyecto “Porcino”</h2>
                <p>Actualmente se está trabajando en el campo para utilizar el actual sobrante del suero de queso para ser destinado como parte de la dieta alimentaria porcina, proyecto que se espera materializar a fines de este año 2015, para poder así, al suero de queso que hoy debemos tratar como efluente, transformarlo en carne de cerdo. </p>
            </section>
            <section>
                <h2>Un Nuevo Proyecto</h2>
                <p>El último proyecto del plan de desarrollo, previsto inaugurar en mayo de 2016, fue la instalación de un centro de distribución en la ciudad de Termas de Río Hondo en la provincia de Santiago del Estero. Con tal finalidad se adquirió recientemente una propiedad en una ubicación estratégica de la ciudad para asistir la gastronomía de esta localidad, plaza que es atendida por “Cerros Tucumanos” desde hace más de quince años comprendiendo a la totalidad de las fábricas de alfajores con la provisión del dulce de leche.
                    El objetivo a mediano plazo es utilizar la capacidad recientemente instalada de la fábrica y pasar de elaborar 18000 lts/día actuales, a 25000 lts/día; y así poder integrar la cadena productiva desde el inicio en el tambo, transporte de leche en camiones cisternas propios, fábrica-usina de elaboración, y transporte a los propios puntos de venta. </p>
            </section>

        </motion.div>
    )
};
export default Proyectos;