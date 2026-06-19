import React, { useState } from 'react';
import { FiPlus, FiSearch, FiAlertTriangle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { pageStyles as s } from './css/pageStyles';

const mockProductos = [
  { id: 1, nombre: 'Aerosol WD-40 400ml', sku: 'WD-001', categoria: 'Lubricantes', precio: 'MX$155.00', stock: 597, min: 10, estado: 'ok' },
  { id: 2, nombre: 'Cinta Métrica Truper 5m', sku: 'CM-005', categoria: 'Medición', precio: 'MX$89.00', stock: 84, min: 20, estado: 'ok' },
  { id: 3, nombre: 'Taladro Black & Decker 3/8"', sku: 'TB-038', categoria: 'Eléctricos', precio: 'MX$1,250.00', stock: 12, min: 5, estado: 'ok' },
  { id: 4, nombre: 'Broca de Acero 1/2"', sku: 'BA-012', categoria: 'Brocas', precio: 'MX$28.50', stock: 3, min: 10, estado: 'low' },
  { id: 5, nombre: 'Silicón Transparente 300ml', sku: 'ST-300', categoria: 'Sellantes', precio: 'MX$45.00', stock: 2, min: 5, estado: 'low' },
  { id: 6, nombre: 'Lija #120 (pack 10)', sku: 'LJ-120', categoria: 'Abrasivos', precio: 'MX$35.00', stock: 5, min: 15, estado: 'low' },
  { id: 7, nombre: 'Desarmador Plano 6"', sku: 'DP-006', categoria: 'Herramientas', precio: 'MX$42.00', stock: 230, min: 20, estado: 'ok' },
  { id: 8, nombre: 'Clavos 3"  (kg)', sku: 'CL-003', categoria: 'Fijaciones', precio: 'MX$22.00', stock: 410, min: 50, estado: 'ok' },
  { id: 9, nombre: 'Llave Ajustable 12"', sku: 'LA-012', categoria: 'Herramientas', precio: 'MX$185.00', stock: 38, min: 10, estado: 'ok' },
  { id: 10, nombre: 'Cinta Teflón x3', sku: 'CT-X3', categoria: 'Plomería', precio: 'MX$18.00', stock: 4, min: 10, estado: 'low' },
];

const Productos = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const filtered = mockProductos.filter(p =>
    p.nombre.toLowerCase().includes(search.toLowerCase()) ||
    p.sku.toLowerCase().includes(search.toLowerCase()) ||
    p.categoria.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={s.page}>
      <div style={s.header}>
        <div>
          <h1 style={s.title}>Productos</h1>
          <p style={s.sub}>{mockProductos.length} productos registrados · {mockProductos.filter(p => p.estado === 'low').length} con stock bajo</p>
        </div>
        <button style={s.btnPrimary} onClick={() => navigate('/agregar-producto')}>
          <FiPlus size={16} />
          Agregar Producto
        </button>
      </div>

      {/* Search */}
      <div style={s.searchWrap}>
        <FiSearch size={16} style={s.searchIcon} />
        <input
          style={s.searchInput}
          placeholder="Buscar por nombre, SKU o categoría..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div style={s.tableCard}>
        <table style={s.table}>
          <thead>
            <tr>
              {['Producto', 'SKU', 'Categoría', 'Precio Venta', 'Stock', 'Estado'].map(h => (
                <th key={h} style={s.th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr
                key={p.id}
                style={s.tr}
                onClick={() => navigate('/detalles-producto')}
              >
                <td style={{ ...s.td, fontWeight: 600, color: '#0f172a' }}>{p.nombre}</td>
                <td style={s.td}><span style={s.mono}>{p.sku}</span></td>
                <td style={s.td}><span style={s.badgeNeutral}>{p.categoria}</span></td>
                <td style={{ ...s.td, fontWeight: 600 }}>{p.precio}</td>
                <td style={s.td}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    {p.estado === 'low' && <FiAlertTriangle size={13} color="#dc2626" />}
                    <span style={{ color: p.estado === 'low' ? '#dc2626' : '#374151', fontWeight: p.estado === 'low' ? 600 : 400 }}>
                      {p.stock} uds
                    </span>
                  </div>
                </td>
                <td style={s.td}>
                  {p.estado === 'low'
                    ? <span style={s.badgeDanger}>Stock Bajo</span>
                    : <span style={s.badgeSuccess}>Disponible</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Productos;
