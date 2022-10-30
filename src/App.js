import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Layout from "./components/Layout";
import Productos from "./components/Productos";
import Contacto from "./components/Contacto";
import Historia from "./components/Historia";
import YogurtProbiotico from "./components/YogurtProbiotico";
import ActividadesAgricolas from "./components/ActividadesAgricolas";
import Proyectos from "./components/Proyectos";
import PresenteYFuturo from "./components/PresenteYFuturo";
import NuestrosClientes from "./components/NuestrosClientes";
import Elaboracion from "./components/Elaboracion";
import Fotos from "./components/Fotos";
import Recetas from "./components/Recetas";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="productos" element={<Productos />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="historia" element={<Historia />} />
        <Route path="yogurtproviotico" element={<YogurtProbiotico />} />
        <Route path="actividadesagricolas" element={<ActividadesAgricolas />} />
        <Route path="proyectos" element={<Proyectos />} />
        <Route path="presenteyfuturo" element={<PresenteYFuturo />} />
        <Route path="nuestrosclientes" element={<NuestrosClientes />} />
        <Route path="elaboracion" element={<Elaboracion />} />
        <Route path="fotos" element={<Fotos />} />
        <Route path="recetas" element={<Recetas />} />
      </Route>
    </Routes>
  );
}

export default App;
