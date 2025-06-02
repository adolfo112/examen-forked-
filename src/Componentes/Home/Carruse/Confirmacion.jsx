import React from "react";
import { useNavigate } from "react-router-dom";

const Confirmacion = () => {
  const navigate = useNavigate();

  return (
    <div className="confirmacion">
      <h1>VENTA REALIZADA CON EXITO</h1>
      <button onClick={() => navigate("/")}>
        Volver a la pagina principal
      </button>

      <h2>NUESTRAS OFICINAS</h2>
      <ul>
        <li>Av. Arce - SoftTech s.r.l. - Subsuelo 788</li>
        <li>Cotacota - Oficina 767</li>
        <li>Los pinos - Oficina 345</li>
      </ul>

      <h2>METODOS DE PAGO</h2>
      {/* Aquí puedes agregar los métodos de pago */}
    </div>
  );
};

export default Confirmacion;
