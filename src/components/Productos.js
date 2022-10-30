import { motion } from "framer-motion";

const Productos = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <article>
                <section>
                    <h2>La Leche y su funcion Nutricional</h2>
                    <p>La leche es un alimento básico que tiene la función primordial de satisfacer los requerimientos nutricionales del ser humano. Y lo consigue gracias a su mezcla en equilibrio de proteínas, grasa, carbohidratos, sales y otros componentes menores dispersos en agua.
                        Nutricionalmente presenta una amplia gama de nutrientes y un alto aporte nutricional en relación con el contenido en calorías; hay buen balance entre los constituyentes mayoritarios: grasa, proteínas y carbohidratos. </p>
                </section>
                <section>
                    <h2>Dulce de Leche</h2>
                    <p>Se confecciona con leche, azúcar, esencia de vainilla. En algunos casos puede incorporarse crema de leche a la leche si se considera necesario. Si bien el dulce original se hace con leche de vaca, también se puede hacer con leche de cabra (aunque no es una variedad habitual). De hecho, cada variante del nombre representa una variante en su elaboración.
                        Argentina, donde se lo conoce como "dulce de leche" está hecho de: leche de vaca, azúcar, un poco de esencia de vainilla y una pizca de bicarbonato de sodio. </p>
                </section>
                <section>
                    <h2>Yogurt</h2>
                    <p>El yogur es un producto popular entre los consumidores, que se obtiene de la fermentación de la leche por microorganismos específicos (streptococcus, thermophilus y lactobacillus bulgaricus). Tiene la característica de ser altamente nutritivo sabroso y fácil digestión. Su consumo en la actualidad se ha llevado en aumento por lo que el mercado lo demanda.
                        . Las bacterias ácido-lácticas constituyen un vasto conjunto de microorganismos benignos, dotados de propiedades similares, que fabrican ácido láctico como producto final del proceso de fermentación. </p>
                </section>
                <section>
                    <h2>Leche entera y Descremada</h2>
                    <p> La leche fresca tiene un olor agradable y sabor dulce.
                        Su densidad relativa varía entre 1,028 y 1,035. Los glóbulos de grasa tienen una densidad relativa inferior a la de la fase líquida y, por lo tanto, ascienden a la superficie para formar nata (crema) cuando se deja reposar la leche en un recipiente. También se llama nata a la lacto albúmina, que es la telilla que aparece en la superficie cuando se ha hervido la leche.
                        La utilización de una centrifugadora acelera la separación de la grasa de la leche entera. Lo que queda después de retirada la primera recibe el nombre de leche desnatada o descremada. La leche con la mitad de grasa es conocida como semidesnatada o semidescremada. </p>
                </section>
            </article>
        </motion.div>
    )
};

export default Productos;