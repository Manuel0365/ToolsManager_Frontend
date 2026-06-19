import React, { useState } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { pageStyles as s } from './css/pageStyles';

const mockCompras = [
  { id: '#C-005', fecha: 'Hoy, 10:15 a.m.', tipo: 'Compra', registradoPor: 'Leonardo E.', proveedor: 'Distribuidora Herramienta MX', estado: 'Pagada', total: 'MX$3,200.00', deuda: 'MX$0.00' },
  { id: '#C-004', fecha: 'Ayer, 04:30 p.m.', tipo: 'Gasto', registradoPor: 'Leonardo E.', proveedor: '—', estado: 'Pagada', total: 'MX$450.00', deuda: 'MX$0.00' },
  { id: '#C-003', fecha: 'Ayer, 02:10 p.m.', tipo: 'Compra', registradoPor: 'Leonardo E.', proveedor: 'Proveedor de Tornillos', estado: 'Pendiente', total: 'MX$780.50', deuda: 'MX$780.50' },
  { id: '#C-002', fecha: '16 jun, 09:00 a.m.', tipo: 'Compra', registradoPor: 'Leonardo E.', proveedor: 'Grupo Pinturas SA', estado: 'Pagada', total: 'MX$1,100.00', deuda: 'MX$0.00' },
  { id: '#C-001', fecha: '15 jun, 03:05 a.m.', tipo: 'Compra', registradoPor: 'Leonardo E.', proveedor: 'Proveedor de Lechetas', estado: 'Pagada', total: 'MX$9.50', deuda: 'MX$0.00' },
];

const Compras = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [tipo, setTipo] = useState('');
  const [estado, setEstado] = useState('');

  const filtered = mockCompras.filter(c => {
    const matchSearch = !search || c.proveedor.toLowerCase().includes(search.toLowerCase()) || c.id.includes(search);
    const matchTipo = !tipo || c.tipo === tipo;
    const matchEstado = !estado || c.estado === estado;
    return matchSearch && matchTipo && matchEstado;
  });

  return (
    <div style={s.page}>
      <div style={s.header}>
        <div>
          <h1 style={s.title}>Compras</h1>
          <p style={s.sub}>Registra compras de inventario y gastos operativos</p>
        </div>
        <button style={s.btnPrimary} onClick={() => navigate('/agregar-compra')}>
          <FiPlus size={16} /> Nueva Compra o Gasto
        </button>
      </div>

      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        <div style={{ ...s.searchWrap, flex: 1, marginBottom: 0 }}>
          <FiSearch size={16} style={s.searchIcon} />
          <input style={s.searchInput} placeholder="Buscar por proveedor, número de compra..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <select style={{ ...s.searchInput, width: 140, paddingLeft: 12 }} value={estado} onChange={e => setEstado(e.target.value)}>
          <option value="">Estado</option>
          <option value="Pagada">Pagada</option>
          <option value="Pendiente">Pendiente</option>
        </select>
        <select style={{ ...s.searchInput, width: 130, paddingLeft: 12 }} value={tipo} onChange={e => setTipo(e.target.value)}>
          <option value="">Tipo</option>
          <option value="Compra">Compra</option>
          <option value="Gasto">Gasto</option>
        </select>
      </div>

      <div style={s.tableCard}>
        <table style={s.table}>
          <thead>
            <tr>
              {['Compra', 'Fecha', 'Tipo', 'Registrado Por', 'Proveedor', 'Estado', 'Total', 'Deuda'].map(h => (
                <th key={h} style={s.th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} style={s.tr}>
                <td style={s.td}><span style={s.mono}>{c.id}</span></td>
                <td style={{ ...s.td, color: '#64748b', fontSize: 13 }}>{c.fecha}</td>
                <td style={s.td}>
                  <span style={c.tipo === 'Compra' ? s.badgeBlue : s.badgeNeutral}>{c.tipo}</span>
                </td>
                <td style={{ ...s.td, color: '#64748b' }}>{c.registradoPor}</td>
                <td style={{ ...s.td, fontWeight: 500, color: '#2563eb' }}>{c.proveedor}</td>
                <td style={s.td}>
                  <span style={c.estado === 'Pagada' ? s.badgeSuccess : s.badgeWarning}>{c.estado}</span>
                </td>
                <td style={{ ...s.td, fontWeight: 700, color: '#0f172a' }}>{c.total}</td>
                <td style={{ ...s.td, color: c.deuda !== 'MX$0.00' ? '#dc2626' : '#64748b', fontWeight: c.deuda !== 'MX$0.00' ? 600 : 400 }}>{c.deuda}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Compras;
