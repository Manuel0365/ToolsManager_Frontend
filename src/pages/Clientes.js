import React, { useState } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { pageStyles as s } from './css/pageStyles';

const mockClientes = [
  { id: 1, nombre: 'Carlos Mendoza', telefono: '+52 55 1234 5678', email: 'carlos.m@email.com', ventas: 12, deuda: 'MX$0.00' },
  { id: 2, nombre: 'Ferretería Norte', telefono: '+52 33 9876 5432', email: 'contacto@ferreterianorte.com', ventas: 8, deuda: 'MX$450.00' },
  { id: 3, nombre: 'Roberto Silva', telefono: '+52 81 5555 0001', email: 'rsilva@gmail.com', ventas: 5, deuda: 'MX$0.00' },
  { id: 4, nombre: 'Pedrito Hernández', telefono: '+52 35 3268 9200', email: 'dpjdjowel@ejemplo.com', ventas: 5, deuda: '$50.00' },
  { id: 5, nombre: 'Constructora Vega SA', telefono: '+52 55 4444 7890', email: 'compras@vegasa.mx', ventas: 20, deuda: 'MX$0.00' },
  { id: 6, nombre: 'Ana Lucía Torres', telefono: '+52 55 6677 8899', email: 'ana.torres@email.com', ventas: 3, deuda: 'MX$0.00' },
];

const Clientes = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const filtered = mockClientes.filter(c =>
    c.nombre.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase()) ||
    c.telefono.includes(search)
  );

  return (
    <div style={s.page}>
      <div style={s.header}>
        <div>
          <h1 style={s.title}>Clientes</h1>
          <p style={s.sub}>{mockClientes.length} clientes registrados</p>
        </div>
        <button style={s.btnPrimary} onClick={() => navigate('/agregar-cliente')}>
          <FiPlus size={16} /> Agregar Cliente
        </button>
      </div>

      <div style={{ ...s.searchWrap, marginBottom: 16 }}>
        <FiSearch size={16} style={s.searchIcon} />
        <input style={s.searchInput} placeholder="Buscar por nombre, teléfono o email..." value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      <div style={s.tableCard}>
        <table style={s.table}>
          <thead>
            <tr>
              {['Cliente', 'Teléfono', 'Email', 'Ventas', 'Deuda'].map(h => (
                <th key={h} style={s.th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} style={s.tr}>
                <td style={s.td}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={avatarStyle(c.nombre)}>
                      {c.nombre.charAt(0)}
                    </div>
                    <span style={{ fontWeight: 600, color: '#0f172a' }}>{c.nombre}</span>
                  </div>
                </td>
                <td style={{ ...s.td, color: '#64748b' }}>{c.telefono}</td>
                <td style={{ ...s.td, color: '#2563eb' }}>{c.email}</td>
                <td style={s.td}>
                  <span style={s.badgeBlue}>{c.ventas} ventas</span>
                </td>
                <td style={{ ...s.td, color: c.deuda !== 'MX$0.00' ? '#dc2626' : '#64748b', fontWeight: c.deuda !== 'MX$0.00' ? 600 : 400 }}>
                  {c.deuda}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const colors = ['#16a34a', '#2563eb', '#7c3aed', '#d97706', '#0891b2', '#be185d'];
const avatarStyle = (name) => ({
  width: 32,
  height: 32,
  borderRadius: '50%',
  background: colors[name.charCodeAt(0) % colors.length] + '22',
  color: colors[name.charCodeAt(0) % colors.length],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 700,
  fontSize: 13,
  flexShrink: 0,
});

export default Clientes;
