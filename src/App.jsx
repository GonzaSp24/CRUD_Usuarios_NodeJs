import { NavLink, Route, Routes, useLocation } from "react-router-dom";

import Home from "./Home"; // Tu página de inicio
import ProductsRoutes from "./products";
import { UnicornProvider } from "./context/UnicornContext";
import UnicornRoutes from "./unicorns";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="container fade-in">
      {!isHome && (
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            ⬅️ Volver al Home
          </NavLink>
          <NavLink
            to="/unicornios"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            🦄 Unicornios
          </NavLink>
          <NavLink
            to="/productos"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            🛒 Productos
          </NavLink>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/unicornios/*"
          element={
            <UnicornProvider>
              <UnicornRoutes />
            </UnicornProvider>
          }
        />
        <Route path="/productos/*" element={<ProductsRoutes />} />
      </Routes>

      
    </div>
  );
}

export default App;
