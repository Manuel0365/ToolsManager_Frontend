import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook para redirigir

const EditarProducto = () => {
  const navigate = useNavigate(); // Inicializa el hook de navegación

  return (
    <div
      className="p-4"
      style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}
    >
      {/* Encabezado */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-secondary me-3" onClick={() => navigate('/detalles-producto')}>Regresar</button>
          <h1 className="m-0">Aerosol WD-40</h1>
        </div>
      </div>

      {/* Formulario principal */}
      <form>
        {/* Datos del Producto */}
        <div className="row mb-4">
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
                value="Aerosol WD-40"
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
                  value="890123456789"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="sku" className="form-label">
                  SKU
                </label>
                <input
                  type="text"
                  id="sku"
                  className="form-control"
                  placeholder="Opcional"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h5>Imágenes</h5>
            <div className="d-flex gap-3">
              <div
                className="border"
                style={{
                  height: '150px',
                  width: '150px',
                  borderRadius: '8px',
                  backgroundImage:
                    "url('https://via.placeholder.com/150')", // Simulación de imagen
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div
                className="d-flex justify-content-center align-items-center border"
                style={{
                  height: '150px',
                  width: '150px',
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
        </div>

        {/* Datos Adicionales */}
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
              value="Herramientas"
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
              placeholder="Buscar o crear marca"
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

        {/* Existencias */}
        <div className="row mb-4">
          <h5>Existencias</h5>
          <div className="col-md-6 mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                id="utilizarExistencias"
                className="form-check-input"
                checked
              />
              <label htmlFor="utilizarExistencias" className="form-check-label">
                Utilizar Existencias
              </label>
            </div>
          </div>
          <div className="col-md-6 d-flex gap-3">
            <div>
              <label htmlFor="cantidad" className="form-label">
                Cantidad
              </label>
              <input
                type="number"
                id="cantidad"
                className="form-control"
                value="597"
              />
            </div>
            <div>
              <label htmlFor="cantidadMinima" className="form-label">
                Cantidad mínima
              </label>
              <input
                type="number"
                id="cantidadMinima"
                className="form-control"
                value="0"
              />
            </div>
          </div>
        </div>

        {/* Secciones adicionales */}
        <div className="row mb-4">
          <h5>Precios de Venta</h5>
          {/* Incluye precios, margen, ganancia */}
        </div>

        <div className="row mb-4">
          <h5>Impuestos</h5>
          {/* Incluye selección de IVA, IEPS */}
        </div>

        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-outline-secondary me-2" onClick={() => navigate('/detalles-producto')}>
            Cancelar
          </button>
          <button type="submit" className="btn btn-success">
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditarProducto;
