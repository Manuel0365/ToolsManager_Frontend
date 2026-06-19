import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FiTrendingUp, FiShoppingCart, FiPackage, FiUsers,
  FiArrowUpRight, FiArrowDownRight, FiPlus, FiBarChart2,
  FiDollarSign, FiTruck
} from 'react-icons/fi';
import './css/Home.css';

const kpis = [
  {
    label: 'Ingresos del Día',
    value: 'MX$1,245.80',
    change: '+12.5%',
    positive: true,
    sub: 'vs. ayer MX$1,107.40',
    icon: FiTrendingUp,
    color: '#16a34a',
    bg: '#dcfce7',
  },
  {
    label: 'Ventas Realizadas',
    value: '8 ventas',
    change: '+3',
    positive: true,
    sub: 'vs. ayer 5 ventas',
    icon: FiShoppingCart,
    color: '#2563eb',
    bg: '#dbeafe',
  },
  {
    label: 'Productos en Stock',
    value: '247',
    change: '-4',
    positive: false,
    sub: '6 productos con stock bajo',
    icon: FiPackage,
    color: '#d97706',
    bg: '#fef3c7',
  },
  {
    label: 'Clientes Registrados',
    value: '156',
    change: '+2',
    positive: true,
    sub: 'Nuevos este mes: 8',
    icon: FiUsers,
    color: '#7c3aed',
    bg: '#ede9fe',
  },
];

const quickActions = [
  { label: 'Nueva Venta', icon: FiShoppingCart, to: '/nueva-venta', color: '#16a34a' },
  { label: 'Agregar Producto', icon: FiPackage, to: '/agregar-producto', color: '#2563eb' },
  { label: 'Nueva Compra', icon: FiTruck, to: '/agregar-compra', color: '#d97706' },
  { label: 'Ver Reportes', icon: FiBarChart2, to: '/reportes', color: '#7c3aed' },
  { label: 'Agregar Cliente', icon: FiUsers, to: '/agregar-cliente', color: '#0891b2' },
  { label: 'Caja Principal', icon: FiDollarSign, to: '/cajaprincipal', color: '#be185d' },
];

const recentSales = [
  { id: '#V-008', client: 'Carlos Mendoza', amount: 'MX$234.50', time: 'hace 15 min', status: 'Pagada' },
  { id: '#V-007', client: 'Público en General', amount: 'MX$89.00', time: 'hace 38 min', status: 'Pagada' },
  { id: '#V-006', client: 'Ferretería Norte', amount: 'MX$450.30', time: 'hace 1 h', status: 'Pagada' },
  { id: '#V-005', client: 'Roberto Silva', amount: 'MX$175.00', time: 'hace 2 h', status: 'Pagada' },
  { id: '#V-004', client: 'Público en General', amount: 'MX$57.00', time: 'hace 3 h', status: 'Pagada' },
];

const lowStock = [
  { name: 'Broca de Acero 1/2"', stock: 3, min: 10 },
  { name: 'Silicón Transparente 300ml', stock: 2, min: 5 },
  { name: 'Lija #120 (pack 10)', stock: 5, min: 15 },
  { name: 'Cinta Teflón x3', stock: 4, min: 10 },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Panel Principal</h1>
          <p className="dashboard-sub">Miércoles, 18 de junio de 2025</p>
        </div>
        <button className="btn-primary-dash" onClick={() => navigate('/nueva-venta')}>
          <FiPlus size={16} />
          Nueva Venta
        </button>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
        {kpis.map((k) => (
          <div key={k.label} className="kpi-card">
            <div className="kpi-top">
              <div>
                <p className="kpi-label">{k.label}</p>
                <h2 className="kpi-value">{k.value}</h2>
              </div>
              <div className="kpi-icon" style={{ background: k.bg }}>
                <k.icon size={22} color={k.color} />
              </div>
            </div>
            <div className="kpi-bottom">
              <span className={`kpi-change ${k.positive ? 'positive' : 'negative'}`}>
                {k.positive ? <FiArrowUpRight size={13} /> : <FiArrowDownRight size={13} />}
                {k.change}
              </span>
              <span className="kpi-sub">{k.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom grid */}
      <div className="dashboard-grid">
        {/* Recent Sales */}
        <div className="dash-card">
          <div className="card-header">
            <h3 className="card-title">Ventas Recientes</h3>
            <button className="card-link" onClick={() => navigate('/ventas')}>
              Ver todas →
            </button>
          </div>
          <table className="dash-table">
            <thead>
              <tr>
                <th>Venta</th>
                <th>Cliente</th>
                <th>Total</th>
                <th>Hora</th>
              </tr>
            </thead>
            <tbody>
              {recentSales.map((s) => (
                <tr key={s.id}>
                  <td><span className="sale-id">{s.id}</span></td>
                  <td>{s.client}</td>
                  <td><strong>{s.amount}</strong></td>
                  <td><span className="muted">{s.time}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Quick Actions */}
          <div className="dash-card">
            <div className="card-header">
              <h3 className="card-title">Acciones Rápidas</h3>
            </div>
            <div className="quick-grid">
              {quickActions.map((a) => (
                <button key={a.label} className="quick-btn" onClick={() => navigate(a.to)}>
                  <div className="quick-icon" style={{ background: a.color + '18' }}>
                    <a.icon size={18} color={a.color} />
                  </div>
                  <span>{a.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Low Stock Alert */}
          <div className="dash-card">
            <div className="card-header">
              <h3 className="card-title">Alerta de Stock Bajo</h3>
              <button className="card-link" onClick={() => navigate('/productos')}>
                Ver productos →
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {lowStock.map((p) => (
                <div key={p.name} className="stock-row">
                  <div>
                    <p className="stock-name">{p.name}</p>
                    <p className="stock-min">Mínimo: {p.min} uds</p>
                  </div>
                  <span className="badge-danger">{p.stock} uds</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
