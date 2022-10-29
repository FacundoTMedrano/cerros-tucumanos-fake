import React, { useEffect, useState } from "react";
const Contacto = () => {

    const datos = {
        nombre: "",
        email: "",
        texto: ""
    }
    const [formulario, setFormulario] = useState(datos);

    const cambios = (e) => {
        const { name, value } = e.target;
        console.log(e.target.name, e.target.value)
        setFormulario(prev => {
            return { ...prev, [name]: value }
        })
    };

    return (
        <div>
            <section>
                <h1>Nuestra Empresa</h1>
                <p>Envienos su consulta o inquietud, y le responderemos a la brevedad, le recordamos que nuestra area de entrega directa es en San Miguel de Tucuman y alrededores. Tambien realizamos entregas en el interior de Tucuman y Santiago del Estero.</p>
                <div>
                    <form className="contactoForm">
                        <label htmlFor="nombre">nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            onChange={cambios}
                            required
                        />
                        <label htmlFor="email">email</label>
                        <input
                            type="email"
                            required
                            id="email"
                            name="email"
                            onChange={cambios}
                        />
                        <label htmlFor="texto">nota</label>
                        <textarea
                            id="texto"
                            required
                            name="texto"
                            onChange={cambios}
                        />
                    </form>
                </div>

            </section>
        </div>
    )
};
export default Contacto;