import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Venta = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombreCompleto: "Perez Sandoval Pedro",
    producto: "Escener Fujitsu",
    precio: "7000",
    fecha: "31/05/2025",
    hora: "15:07",
    vendedor: "Oscar",
    observaciones: "Ninguno",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmacion");
  };

  return (
    <div className="venta-form">
      <h2>DATOS DEL CLIENTE</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre completo</label>
          <input
            type="text"
            value={formData.nombreCompleto}
            onChange={(e) =>
              setFormData({ ...formData, nombreCompleto: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Producto</label>
          <input
            type="text"
            value={formData.producto}
            onChange={(e) =>
              setFormData({ ...formData, producto: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Precio</label>
          <input
            type="text"
            value={formData.precio}
            onChange={(e) =>
              setFormData({ ...formData, precio: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Fecha</label>
          <input
            type="text"
            value={formData.fecha}
            onChange={(e) =>
              setFormData({ ...formData, fecha: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Hora</label>
          <input
            type="text"
            value={formData.hora}
            onChange={(e) => setFormData({ ...formData, hora: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Nombre del vendedor</label>
          <input
            type="text"
            value={formData.vendedor}
            onChange={(e) =>
              setFormData({ ...formData, vendedor: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Observaciones</label>
          <input
            type="text"
            value={formData.observaciones}
            onChange={(e) =>
              setFormData({ ...formData, observaciones: e.target.value })
            }
          />
        </div>

        <div className="form-buttons">
          <button type="button" onClick={() => navigate(-1)}>
            Cancelar
          </button>
          <button type="submit">Aceptar</button>
        </div>
      </form>
    </div>
  );
};

export default Venta;
