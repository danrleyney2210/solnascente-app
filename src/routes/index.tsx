import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextProvider, useContextSite } from "../context/Context";
import { Home } from "../pages/home";
import { Reservas } from "../pages/reservas";
import { Usuarios } from "../pages/usuarios";
import { Grupos } from "../pages/grupos";
import { Auth } from "../pages/auth";
import { ProtectedRoute } from "./ProtectedRoute";

const Rotas = () => {
  const { isAuth } = useContextSite();

  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/grupos"
            element={
              <ProtectedRoute>
                <Grupos />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reservas"
            element={
              <ProtectedRoute>
                <Reservas />
              </ProtectedRoute>
            }
          />
          <Route
            path="/usuarios"
            element={
              <ProtectedRoute>
                <Usuarios />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ContextProvider>
    </Router>
  );
};

export default Rotas;
