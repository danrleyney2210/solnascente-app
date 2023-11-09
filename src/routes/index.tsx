import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextProvider, useContextSite } from "../context/Context";
import { Home } from "../pages/home";
import { Reservas } from "../pages/reservas";
import { Usuarios } from "../pages/usuarios";
import { Grupos } from "../pages/grupos";
import { Auth } from "../pages/auth";
import { DetalheGrupo } from "../pages/detalheGrupo";


const Rotas = () => {
  const { isAuth } = useContextSite()

  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/grupos" element={<Grupos />} />
          <Route path="/grupos/detalhe" element={<DetalheGrupo />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
};

export default Rotas;
