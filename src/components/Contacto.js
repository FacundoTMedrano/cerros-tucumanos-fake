import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Contacto = () => {

    const datos = {
        nombre: "",
        email: "",
        texto: ""
    }
    const [formulario, setFormulario] = useState(datos);

    const cambios = (e) => {
        const { name, value } = e.target;
        setFormulario(prev => {
            return { ...prev, [name]: value }
        })
    };

    return (
        <div
            className="c-contacto"
        >
            <div className="tituloContacto">
                <h1>Contacto</h1>
            </div>
            <div className="contactoTargeta">
                <div className="contactoTextoMapa">
                    <h2>Nuestra Empresa</h2>
                    <p>Envienos su consulta o inquietud, y le responderemos a la brevedad, le recordamos que nuestra area de entrega directa es en San Miguel de Tucuman y alrededores. Tambien realizamos entregas en el interior de Tucuman y Santiago del Estero.</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1779.5939127702266!2d-65.178161!3d-26.865773!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1667093784805!5m2!1ses-419!2sar" width="350" height="300" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <p>
                        Detalles de contacto
                        Ruta 306 y Esq. Mendoza Sur,
                        Los Vallistos
                        Tucuman, Argentina
                        Fono: + 54 381 4006813
                        Atencion al cliente: 0800 222 0854
                        Email: info@cerrostucumanos.com
                    </p>
                </div>
                <div className="contactoFormulario">
                    <form className="contactoForm">
                        <input
                            type="text"
                            placeholder="nombre"
                            id="nombre"
                            name="nombre"
                            onChange={cambios}
                            required
                        />
                        <input
                            type="email"
                            placeholder="email"
                            required
                            id="email"
                            name="email"
                            onChange={cambios}
                        />
                        <textarea
                            placeholder="mensaje"
                            id="texto"
                            required
                            name="texto"
                            onChange={cambios}
                        />
                        <div>
                            <button>enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};
export default Contacto;