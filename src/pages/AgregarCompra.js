import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook para redirigir

const AgregarCompra = () => {
    const navigate = useNavigate(); // Inicializa el hook de navegación

  return (
    <div
      className="p-4"
      style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}
    >
      {/* Encabezado */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-secondary me-3" onClick={() => navigate('/compras')}>Regresar</button>
          <h1 className="m-0">Agregar Compra</h1>
        </div>
      </div>

      {/* Formulario principal */}
      <form>
        <div className="row">
          {/* Sección izquierda */}
          <div className="col-md-8">
            <div className="mb-3">
              <label htmlFor="concepto" className="form-label">
                Concepto
              </label>
              <input
                type="text"
                id="concepto"
                className="form-control"
                placeholder="Ej: Pago de Luz"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="importe" className="form-label">
                Importe con impuestos $
              </label>
              <input
                type="number"
                id="importe"
                className="form-control"
                placeholder="0"
                required
              />
            </div>
            
            <div className="mt-4">
              <h5>Total a pagar: $0.00</h5>
            </div>
          </div>

          {/* Sección derecha */}
          <div className="col-md-4">
            <div className="mb-3">
              <label htmlFor="proveedor" className="form-label">
                Proveedor
              </label>
              <input
                type="text"
                id="proveedor"
                className="form-control"
                placeholder="Proveedor"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="fechaGasto" className="form-label">
                Fecha del Gasto
              </label>
              <select id="fechaGasto" className="form-select">
                <option>Hoy</option>
                <option>Ayer</option>
                <option>Otra fecha</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="folio" className="form-label">
                Folio
              </label>
              <input
                type="text"
                id="folio"
                className="form-control"
                placeholder="Ingresar Folio Fiscal"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="notas" className="form-label">
                Notas
              </label>
              <textarea
                id="notas"
                className="form-control"
                rows="3"
                placeholder="No hay ninguna nota"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="d-flex justify-content-end mt-4">
          <button type="button" className="btn btn-outline-secondary me-2">
            Cancelar
          </button>
          <button type="submit" className="btn btn-success">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgregarCompra;
