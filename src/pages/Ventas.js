import React, { useState } from 'react';
import { FiPlus, FiSearch, FiDownload } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { pageStyles as s } from './css/pageStyles';

const mockVentas = [
  { id: '#V-008', fecha: 'Hoy, 11:42 a.m.', cliente: 'Carlos Mendoza', pago: 'Efectivo', total: 'MX$234.50', deuda: 'MX$0.00', productos: 'Entregados', vendedor: 'Leonardo E.', estado: 'Pagada' },
  { id: '#V-007', fecha: 'Hoy, 11:05 a.m.', cliente: 'Público en General', pago: 'Efectivo', total: 'MX$89.00', deuda: 'MX$0.00', productos: 'Entregados', vendedor: 'Leonardo E.', estado: 'Pagada' },
  { id: '#V-006', fecha: 'Hoy, 10:22 a.m.', cliente: 'Ferretería Norte', pago: 'Transferencia', total: 'MX$450.30', deuda: 'MX$0.00', productos: 'Entregados', vendedor: 'Leonardo E.', estado: 'Pagada' },
  { id: '#V-005', fecha: 'Hoy, 09:51 a.m.', cliente: 'Roberto Silva', pago: 'Efectivo', total: 'MX$175.00', deuda: 'MX$0.00', productos: 'Entregados', vendedor: 'Leonardo E.', estado: 'Pagada' },
  { id: '#V-004', fecha: 'Hoy, 02:35 a.m.', cliente: 'Público en General', pago: 'Efectivo', total: 'MX$57.00', deuda: 'MX$0.00', productos: 'Entregados', vendedor: 'Leonardo E.', estado: 'Pagada' },
  { id: '#V-003', fecha: 'Hoy, 02:34 a.m.', cliente: 'Público en General', pago: 'Efectivo', total: 'MX$19.95', deuda: 'MX$0.00', productos: 'Entregados', vendedor: 'Leonardo E.', estado: 'Pagada' },
  { id: '#V-002', fecha: 'Hoy, 02:33 a.m.', cliente: 'Público en General', pago: 'Efectivo', total: 'MX$68.15', deuda: 'MX$0.00', productos: 'Entregados', vendedor: 'Leonardo E.', estado: 'Prueba' },
  { id: '#V-001', fecha: 'Hoy, 02:33 a.m.', cliente: 'Público en General', pago: 'Efectivo', total: 'MX$550.50', deuda: 'MX$0.00', productos: 'Entregados', vendedor: 'Leonardo E.', estado: 'Pagada' },
];

const Ventas = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [estadoFilter, setEstadoFilter] = useState('');

  const filtered = mockVentas.filter(v => {
    const matchSearch = !search || v.cliente.toLowerCase().includes(search.toLowerCase()) || v.id.includes(search);
    const matchEstado = !estadoFilter || v.estado === estadoFilter;
    return matchSearch && matchEstado;
  });

  const total = filtered.reduce((acc, v) => acc + parseFloat(v.total.replace('MX$', '').replace(',', '')), 0);

  const badgeEstado = (estado) => {
    if (estado === 'Pagada') return s.badgeSuccess;
    if (estado === 'Prueba') return s.badgeWarning;
    return s.badgeNeutral;
  };

  return (
    <div style={s.page}>
      <div style={s.header}>
        <div>
          <h1 style={s.title}>Ventas</h1>
          <p style={s.sub}>{mockVentas.length} ventas registradas · Total del día: <strong style={{ color: '#16a34a' }}>MX${total.toFixed(2)}</strong></p>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button style={s.btnSecondary}>
            <FiDownload size={15} /> Descargar
          </button>
          <button style={s.btnPrimary} onClick={() => navigate('/nueva-venta')}>
            <FiPlus size={16} /> Nueva Venta
          </button>
        </div>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        <div style={{ ...s.searchWrap, flex: 1, marginBottom: 0 }}>
          <FiSearch size={16} style={s.searchIcon} />
          <input style={s.searchInput} placeholder="Buscar por cliente, ID de venta..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <select style={{ ...s.searchInput, width: 160, paddingLeft: 12 }} value={estadoFilter} onChange={e => setEstadoFilter(e.target.value)}>
          <option value="">Todos los estados</option>
          <option value="Pagada">Pagada</option>
          <option value="Prueba">Prueba</option>
        </select>
      </div>

      <div style={s.tableCard}>
        <table style={s.table}>
          <thead>
            <tr>
              {['Venta', 'Fecha', 'Cliente', 'Pago', 'Estado', 'Total', 'Deuda', 'Vendedor'].map(h => (
                <th key={h} style={s.th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((v) => (
              <tr key={v.id} style={s.tr}>
                <td style={s.td}><span style={s.mono}>{v.id}</span></td>
                <td style={{ ...s.td, color: '#64748b', fontSize: 13 }}>{v.fecha}</td>
                <td style={{ ...s.td, fontWeight: 500 }}>{v.cliente}</td>
                <td style={{ ...s.td, color: '#64748b' }}>{v.pago}</td>
                <td style={s.td}><span style={badgeEstado(v.estado)}>{v.estado}</span></td>
                <td style={{ ...s.td, fontWeight: 700, color: '#0f172a' }}>{v.total}</td>
                <td style={s.td}>{v.deuda}</td>
                <td style={{ ...s.td, color: '#64748b' }}>{v.vendedor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ventas;
