import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS, LineElement, BarElement, CategoryScale,
  LinearScale, PointElement, Title, Tooltip, Legend, Filler
} from 'chart.js';
import { FiTrendingUp, FiShoppingCart, FiPackage, FiDollarSign } from 'react-icons/fi';

ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, Filler);

const dias7 = ['Lun 12', 'Mar 13', 'Mié 14', 'Jue 15', 'Vie 16', 'Sáb 17', 'Hoy 18'];

const ventasData = {
  labels: dias7,
  datasets: [{
    label: 'Ventas',
    data: [5, 8, 6, 11, 9, 14, 8],
    borderColor: '#16a34a',
    backgroundColor: 'rgba(22,163,74,0.1)',
    borderWidth: 2.5,
    fill: true,
    tension: 0.4,
    pointBackgroundColor: '#16a34a',
    pointRadius: 4,
  }],
};

const facturacionData = {
  labels: dias7,
  datasets: [{
    label: 'Facturación $',
    data: [620, 980, 750, 1340, 1100, 1820, 1246],
    borderColor: '#2563eb',
    backgroundColor: 'rgba(37,99,235,0.1)',
    borderWidth: 2.5,
    fill: true,
    tension: 0.4,
    pointBackgroundColor: '#2563eb',
    pointRadius: 4,
  }],
};

const productosData = {
  labels: ['WD-40', 'C. Métrica', 'Taladro', 'Clavos', 'Llave Aj.', 'Desarm.'],
  datasets: [{
    label: 'Unidades vendidas',
    data: [45, 32, 8, 120, 15, 60],
    backgroundColor: ['#16a34a', '#2563eb', '#7c3aed', '#d97706', '#0891b2', '#be185d'],
    borderRadius: 6,
  }],
};

const chartOptions = (label) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { mode: 'index', intersect: false },
  },
  scales: {
    x: { grid: { display: false }, ticks: { font: { size: 11 } } },
    y: { beginAtZero: true, grid: { color: '#f1f5f9' }, ticks: { font: { size: 11 } } },
  },
});

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    x: { grid: { display: false }, ticks: { font: { size: 11 } } },
    y: { beginAtZero: true, grid: { color: '#f1f5f9' } },
  },
};

const kpis = [
  { label: 'Ventas Totales (7d)', value: '61 ventas', icon: FiShoppingCart, color: '#2563eb', bg: '#dbeafe' },
  { label: 'Facturación (7d)', value: 'MX$7,856.00', icon: FiDollarSign, color: '#16a34a', bg: '#dcfce7' },
  { label: 'Ticket Promedio', value: 'MX$128.79', icon: FiTrendingUp, color: '#7c3aed', bg: '#ede9fe' },
  { label: 'Prod. más vendido', value: 'Clavos 3"', icon: FiPackage, color: '#d97706', bg: '#fef3c7' },
];

const PERIODOS = ['Por Día', 'Últimos 7 días', 'Este Mes'];

const Reportes = () => {
  const [periodo, setPeriodo] = useState('Últimos 7 días');

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Reportes</h1>
          <p style={styles.sub}>Análisis de ventas y rendimiento del negocio</p>
        </div>
        <div style={styles.tabs}>
          {PERIODOS.map(p => (
            <button
              key={p}
              style={{ ...styles.tab, ...(periodo === p ? styles.tabActive : {}) }}
              onClick={() => setPeriodo(p)}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* KPI row */}
      <div style={styles.kpiGrid}>
        {kpis.map(k => (
          <div key={k.label} style={styles.kpiCard}>
            <div style={{ ...styles.kpiIcon, background: k.bg }}>
              <k.icon size={20} color={k.color} />
            </div>
            <div>
              <p style={styles.kpiLabel}>{k.label}</p>
              <h3 style={styles.kpiValue}>{k.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Charts row 1 */}
      <div style={styles.chartsRow}>
        <div style={styles.chartCard}>
          <h4 style={styles.chartTitle}>Ventas por Día</h4>
          <p style={styles.chartSub}>Número de transacciones registradas</p>
          <div style={{ height: 200 }}>
            <Line data={ventasData} options={chartOptions('Ventas')} />
          </div>
        </div>
        <div style={styles.chartCard}>
          <h4 style={styles.chartTitle}>Facturación por Día</h4>
          <p style={styles.chartSub}>Ingresos totales en pesos</p>
          <div style={{ height: 200 }}>
            <Line data={facturacionData} options={chartOptions('Facturación')} />
          </div>
        </div>
      </div>

      {/* Charts row 2 */}
      <div style={{ ...styles.chartCard, marginTop: 0 }}>
        <h4 style={styles.chartTitle}>Productos Más Vendidos</h4>
        <p style={styles.chartSub}>Unidades vendidas en el período seleccionado</p>
        <div style={{ height: 220 }}>
          <Bar data={productosData} options={barOptions} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: { padding: 32, background: '#f1f5f9', minHeight: '100vh', fontFamily: "'Segoe UI', sans-serif" },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 },
  title: { fontSize: 26, fontWeight: 700, color: '#0f172a', margin: '0 0 4px' },
  sub: { color: '#64748b', fontSize: 13, margin: 0 },
  tabs: { display: 'flex', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, padding: 3, gap: 2 },
  tab: { padding: '7px 16px', border: 'none', borderRadius: 6, background: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 500, color: '#64748b' },
  tabActive: { background: '#0f172a', color: '#fff' },
  kpiGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 20 },
  kpiCard: { background: '#fff', borderRadius: 12, padding: 18, display: 'flex', alignItems: 'center', gap: 14, boxShadow: '0 1px 3px rgba(0,0,0,0.07)', border: '1px solid #f1f5f9' },
  kpiIcon: { width: 44, height: 44, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  kpiLabel: { color: '#64748b', fontSize: 12, fontWeight: 500, margin: '0 0 4px' },
  kpiValue: { color: '#0f172a', fontSize: 17, fontWeight: 700, margin: 0 },
  chartsRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 },
  chartCard: { background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 1px 3px rgba(0,0,0,0.07)', border: '1px solid #f1f5f9' },
  chartTitle: { fontSize: 15, fontWeight: 600, color: '#0f172a', margin: '0 0 2px' },
  chartSub: { color: '#94a3b8', fontSize: 12, margin: '0 0 16px' },
};

export default Reportes;
