import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './pages/components/SideBar';
import Login from './pages/Login';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Compras from './pages/Compras';
import Ventas from './pages/Ventas';
import Clientes from './pages/Clientes';
import Proveedores from './pages/Proveedores';
import Reportes from './pages/Reportes';
import CajaPrincipal from './pages/CajaPrincipal';
import AgregarProducto from './pages/AgregarProducto';
import DetallesProducto from './pages/DetallesProducto';
import EditarProducto from './pages/EditarProducto';
import AgregarCompra from './pages/AgregarCompra';
import AgregarCliente from './pages/AgregarCliente';
import AgregarProveedor from './pages/AgregarProveedor';
import NuevaVenta from './pages/NuevaVenta';

const Layout = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/';

  if (isLogin) {
    return <Login />;
  }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar />
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cajaprincipal" element={<CajaPrincipal />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/compras" element={<Compras />} />
          <Route path="/ventas" element={<Ventas />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/proveedores" element={<Proveedores />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/agregar-producto" element={<AgregarProducto />} />
          <Route path="/detalles-producto" element={<DetallesProducto />} />
          <Route path="/editar-producto" element={<EditarProducto />} />
          <Route path="/agregar-compra" element={<AgregarCompra />} />
          <Route path="/agregar-cliente" element={<AgregarCliente />} />
          <Route path="/agregar-proveedor" element={<AgregarProveedor />} />
          <Route path="/nueva-venta" element={<NuevaVenta />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
