import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Importar componentes de React Bootstrap
import { FaTrash, FaEdit, FaArrowLeft } from 'react-icons/fa'; // Íconos
import { useNavigate } from 'react-router-dom'; // Importa el hook para redirigir

const DetallesProducto = () => {
  const [showModal, setShowModal] = useState(false); // Estado para controlar el modal

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const navigate = useNavigate(); // Inicializa el hook de navegación

  return (
    <div
      className="p-4"
      style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}
    >
      {/* Encabezado */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-secondary me-3" onClick={() => navigate('/productos')}>
            <FaArrowLeft />
          </button>
          <h1 className="m-0">Detalle del Producto</h1>
        </div>
        <div>
          <button
            className="btn btn-outline-danger me-2 d-flex align-items-center"
            onClick={handleShow} // Muestra el modal al hacer clic
          >
            <FaTrash className="me-2" />
            Eliminar
          </button>
          <button className="btn btn-success d-flex align-items-center" onClick={() => navigate('/editar-producto')}>
            <FaEdit className="me-2" />
            Editar
          </button>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="d-flex gap-4">
        {/* Información del Producto */}
        <div
          className="card flex-grow-1"
          style={{
            padding: '1.5rem',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <p className="text-muted">Categoría: Herramientas</p>
          <h2 className="mb-3">Aerosol WD-40</h2>
          <p className="text-muted">Cód. de Barras: 80123456789</p>
          <div className="d-flex gap-5 mt-4">
            <div>
              <h4 className="m-0">MX$155.00</h4>
              <p className="text-muted">IVA 16%</p>
            </div>
            <div>
              <h4 className="m-0">MX$70.00</h4>
              <p className="text-muted">Incluyendo impuestos</p>
            </div>
            <div>
              <h4 className="m-0">597</h4>
              <p className="text-muted">Unidades</p>
            </div>
          </div>
        </div>

        {/* Imagen del Producto */}
        <div
          className="card"
          style={{
            width: '250px',
            height: '300px',
            padding: '1rem',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src="https://via.placeholder.com/150" // URL de imagen simulada
            alt="Aerosol WD-40"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* Modal de Confirmación */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="text-danger">¿Deseas eliminar este producto?</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>No podrás deshacer esta acción.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={() => alert('Producto eliminado')}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DetallesProducto;
