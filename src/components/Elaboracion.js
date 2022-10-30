import { motion } from "framer-motion";
const Elaboracion = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <article>
                <h1>La Planta Lactea</h1>
                <p>Aquí le vamos a explicar el proceso de elaboración de algunos productos lácteos. </p>
                <section>
                    <h2>Que aporta el consumo de leche ?</h2>
                    <p>Como todos los seres vivos, los humanos necesitamos materia y energía para el crecimiento y funcionamiento de nuestro cuerpo. A esos nutrientes, los obtenemos de los alimentos. La leche y sus derivados constituyen uno de los alimentos naturales más completos y su valor nutritivo es tal que no puede ser fácilmente reemplazada o sustituida por otros alimentos. Es por ello que el consumo de leche está especialmente indicado para la etapa de crecimiento, ya que aporta gran cantidad de calcio, indispensable para el desarrollo y mantenimiento de los huesos, dientes, músculos, articulaciones, sistema nervioso y para una buena coagulación. Por ejemplo, un vaso de leche (250 cc) aporta un tercio del requerimiento diario de calcio, además de gran cantidad de vitaminas y proteínas. El conjunto de procesos por los cuales los nutrientes son transformados en energía (o materiales que constituyen el cuerpo) se denomina metabolismo. Como se obtiene energía a través de los nutrientes? En las células, los nutrientes entran en contacto con el oxígeno y se oxidan, como resultado, se libera energía y se produce agua y dióxido de carbono. Esta energía liberada (que es energía química) se puede transformar en energía calórica, que se mide en kilocalorías. Los nutrientes se agrupan en cinco grandes grupos: hidratos de carbono, proteínas, lípidos (grasas), vitaminas y minerales, la leche contiene naturalmente una buena cantidad y variedad de estos indispensables nutrientes. Es por ello que la ingesta o consumo de leche, es vital para el desarrollo y crecimiento del cuerpo humano. </p>
                </section>
                <section>
                    <h2>Leche Entera y Descremada</h2>
                    <p>La leche de vaca ordeñada en los tambos, o leche cruda, es enfriada en los propios tambos y luego transportada en camiones térmicos hacia la industria para su proceso. Una vez en planta, es filtrada y recibe el primer proceso, la pasteurización. Este proceso térmico, (llamado así en honor al Dr. Luis Pasteur), sirve para eliminar los microorganismos o bacterias que sean perjudiciales para la salud. En un equipo para tal fin, a medida que la leche circula por una serie de tubos y cañerías, se eleva su temperatura hasta 82*C y luego se la enfría abruptamente a 4*C. Durante este proceso, la leche pasa por una centrífuga que separa la fase liviana (crema o nata) de la pesada (leche desnatada) además de higienizar la leche separándole las partículas pequeñas que no fueron detenidas por los filtros. Al final de este proceso, ya tenemos lista para ser envasada la leche entera o descremada por un lado y la crema de leche por el otro. </p>
                </section>
                <section>
                    <h2>Elaboracion de Yogurt en Cerros Tucumanos</h2>
                    <p>Se llena un làctofermentador (en fábrica vieron dos de 2000 lts y uno de 6000 lts de capacidad) con leche pasteurizada, azúcar y gelatina, se calienta para eliminar las bacterias y microorganismos, porque nosotros pondremos a reproducir dos bacterias que su propia digestión generará la acidez de la leche para convertirla en yogur, ellas son (estreptococus termophilus y lactobasilus Bulgaricus), se lo lleva a temperatura de incubación (es la temperatura optima para el desarrollo de las bacterias) dejándolo en reposo unas 4 hs, tiempo necesario para que las bacterias acidifiquen la leche. Cuando llega a una determinada acidez, se enfría rápidamente, para que las bacterias “duerman” o aletarguen y se detenga así el proceso de acidificación. Ahora si comenzamos a agitar, agregando el sabor y color deseado. </p>
                </section>
                <section>
                    <h2>Elaboracion de Dulce de Leche en Cerros Tucumanos</h2>
                    <p>Se llena un làctofermentador (en fábrica vieron dos de 2000 lts y uno de 6000 lts de capacidad) con leche pasteurizada, azúcar y gelatina, se calienta para eliminar las bacterias y microorganismos, porque nosotros pondremos a reproducir dos bacterias que su propia digestión generará la acidez de la leche para convertirla en yogur, ellas son (estreptococus termophilus y lactobasilus Bulgaricus), se lo lleva a temperatura de incubación (es la temperatura optima para el desarrollo de las bacterias) dejándolo en reposo unas 4 hs, tiempo necesario para que las bacterias acidifiquen la leche. Cuando llega a una determinada acidez, se enfría rápidamente, para que las bacterias “duerman” o aletarguen y se detenga así el proceso de acidificación. Ahora si comenzamos a agitar, agregando el sabor y color deseado. </p>
                </section>
                <section>
                    <h2>Elaboracion de Queso Muzzarella en Cerros Tucumanos</h2>
                    <p>Para elaborar quesos Mozzarella, llenamos una tina de 1000 lts con leche pasteurizada parcialmente descremada, luego le agregamos bacterias lácticas para que (como vimos en el yogur) levante un poco de acidez, calentamos un poquito (unos 40*C) y le agregamos un coagulante (cuajo). En 15 min se habrá separado el suero de la masa que se convertirá en queso, se saca la masa en canastos para que termine de desuerar y se la deja madurar en cámara de frío unos 7 días, luego se la amasa calentando con vapor para que le de la textura de “hilado”, para que cuando se derrita en una pizza se formen hilos y no se corte. De toda esta leche solo nos quedaran unos 120 kg de queso. </p>
                </section>
            </article>
        </motion.div>
    )
};
export default Elaboracion;