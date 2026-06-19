import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook para redirigir

const AgregarProducto = () => {
  const navigate = useNavigate(); // Inicializa el hook de navegación

  return (
    <div
      className="p-4"
      style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}
    >
      <h1>Crear Producto</h1>

      {/* Formulario principal */}
      <form className="mt-4">
        <div className="row mb-4">
          {/* Datos del producto */}
          <div className="col-md-6">
            <h5>Datos del producto</h5>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre del producto*
              </label>
              <input
                type="text"
                id="nombre"
                className="form-control"
                placeholder="Ej: Clavos de albañilería"
                required
              />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="codigoBarras" className="form-label">
                  Código de barras
                </label>
                <input
                  type="text"
                  id="codigoBarras"
                  className="form-control"
                  placeholder="Opcional"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="sku" className="form-label">
                  Precio de Venta
                </label>
                <input
                  type="text"
                  id="sku"
                  className="form-control"
                  placeholder="$"
                />
              </div>
            </div>
          </div>

          {/* Imágenes */}
          <div className="col-md-6">
            <h5>Imágenes</h5>
            <div
              className="d-flex justify-content-center align-items-center border"
              style={{
                height: '150px',
                borderRadius: '8px',
                border: '2px dashed #ccc',
                cursor: 'pointer',
                backgroundColor: '#f9f9f9',
              }}
            >
              <span className="text-muted">Añadir imagen</span>
            </div>
          </div>
        </div>

        {/* Datos adicionales */}
        <div className="row mb-4">
          <h5>Datos Adicionales</h5>
          <div className="col-md-4 mb-3">
            <label htmlFor="unidadVenta" className="form-label">
              Unidad de venta
            </label>
            <select id="unidadVenta" className="form-select">
              <option>Unidad</option>
              <option>Caja</option>
              <option>Paquete</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="categoria" className="form-label">
              Categoría
            </label>
            <input
              type="text"
              id="categoria"
              className="form-control"
              placeholder="Categoría del producto"
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="marca" className="form-label">
              Marca
            </label>
            <input
              type="text"
              id="marca"
              className="form-control"
              placeholder="Marca del producto"
            />
          </div>
          <div className="col-12">
            <label htmlFor="descripcion" className="form-label">
              Descripción
            </label>
            <textarea
              id="descripcion"
              className="form-control"
              rows="3"
              placeholder="Agrega una descripción o información adicional de tu producto"
            ></textarea>
          </div>
        </div>

        {/* Botones */}
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-outline-secondary me-2" onClick={() => navigate('/Productos')}>
            Cancelar
          </button>
          <button type="submit" className="btn btn-success">
            Crear Producto
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgregarProducto;
