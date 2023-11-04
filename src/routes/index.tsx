import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextProvider } from "../context/Context";
import { Home } from "../pages/home";
import { Reservas } from "../pages/reservas";
import { Usuarios } from "../pages/usuarios";
import { Grupos } from "../pages/grupos";
import { Auth } from "../pages/auth";

const Rotas = () => {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/grupos" element={<Grupos />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
};

export default Rotas;
