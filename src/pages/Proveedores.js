import React, { useState } from 'react';
import { FiPlus, FiSearch, FiShoppingBag } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { pageStyles as s } from './css/pageStyles';

const mockProveedores = [
  { id: 1, nombre: 'Distribuidora Herramienta MX', contacto: 'Jorge Ramírez', telefono: '+52 55 1000 2000', compras: 8, ultimaCompra: 'Hoy, 10:15 a.m.' },
  { id: 2, nombre: 'Grupo Pinturas SA', contacto: 'Lucía Vega', telefono: '+52 33 2000 3000', compras: 5, ultimaCompra: '16 jun, 09:00 a.m.' },
  { id: 3, nombre: 'Proveedor de Tornillos', contacto: 'Pedrito', telefono: '+52 55 3101 7403', compras: 3, ultimaCompra: 'Ayer, 04:30 p.m.' },
  { id: 4, nombre: 'Proveedor de Lechetas', contacto: 'Ana Gómez', telefono: '+52 81 4444 5555', compras: 1, ultimaCompra: '15 jun, 03:05 a.m.' },
  { id: 5, nombre: 'Eléctricos del Norte', contacto: 'Marcos Torres', telefono: '+52 55 6677 0011', compras: 4, ultimaCompra: '10 jun, 02:00 p.m.' },
];

const Proveedores = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const filtered = mockProveedores.filter(p =>
    p.nombre.toLowerCase().includes(search.toLowerCase()) ||
    p.contacto.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={s.page}>
      <div style={s.header}>
        <div>
          <h1 style={s.title}>Proveedores</h1>
          <p style={s.sub}>Gestiona tus proveedores y mantén tus compras organizadas</p>
        </div>
        <button style={s.btnPrimary} onClick={() => navigate('/agregar-proveedor')}>
          <FiPlus size={16} /> Agregar Proveedor
        </button>
      </div>

      <div style={{ ...s.searchWrap, marginBottom: 16 }}>
        <FiSearch size={16} style={s.searchIcon} />
        <input style={s.searchInput} placeholder="Buscar proveedor o contacto..." value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      <div style={s.tableCard}>
        <table style={s.table}>
          <thead>
            <tr>
              {['Nombre', 'Contacto', 'Teléfono', 'Compras', 'Última Compra', 'Acción'].map(h => (
                <th key={h} style={s.th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} style={s.tr}>
                <td style={{ ...s.td, fontWeight: 600, color: '#0f172a' }}>{p.nombre}</td>
                <td style={{ ...s.td, color: '#64748b' }}>{p.contacto}</td>
                <td style={{ ...s.td, color: '#64748b' }}>{p.telefono}</td>
                <td style={s.td}><span style={s.badgeBlue}>{p.compras} compras</span></td>
                <td style={{ ...s.td, color: '#64748b', fontSize: 13 }}>{p.ultimaCompra}</td>
                <td style={s.td}>
                  <button
                    style={{ ...s.btnSecondary, padding: '6px 14px', fontSize: 13 }}
                    onClick={() => navigate('/agregar-compra')}
                  >
                    <FiShoppingBag size={13} /> Realizar Compra
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Proveedores;
