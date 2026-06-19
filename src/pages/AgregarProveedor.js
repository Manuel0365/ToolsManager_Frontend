import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook para redirigir

const AgregarCliente = () => {
    const navigate = useNavigate(); // Inicializa el hook de navegación

  return (
    <div
      className="p-4"
      style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}
    >
      {/* Encabezado */}
      <h1>Agregar Nuevo Proveedor</h1>

      {/* Formulario principal */}
      <form className="mt-4">
        <div className="row">
          {/* Nombre y Apellido */}
          <div className="col-md-6 mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre del Proveedor
            </label>
            <input
              type="text"
              id="nombre"
              className="form-control"
              placeholder="Ej: Proveedor de Tornillos"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="apellido" className="form-label">
              Nombre del Contacto
            </label>
            <input
              type="text"
              id="apellido"
              className="form-control"
              placeholder="Ingresa el nombre"
              required
            />
          </div>

          {/* Teléfono */}
          <div className="col-md-12 mb-3">
            <label htmlFor="telefono" className="form-label">
              Teléfono
            </label>
            <div className="input-group">
              <span className="input-group-text">+52</span>
              <input
                type="tel"
                id="telefono"
                className="form-control"
                placeholder="Ingresar teléfono"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="col-md-12 mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Ingresar email"
            />
          </div>     
        </div>

        {/* Botones */}
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-outline-secondary me-2" onClick={() => navigate('/clientes')}>
            Cancelar
          </button>
          <button type="submit" className="btn btn-success">
            Crear Proveedor
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgregarCliente;
