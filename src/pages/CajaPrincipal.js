import React, { useState } from 'react';
import { FiPlus, FiArrowDownLeft, FiScissors, FiTrendingUp, FiTrendingDown, FiDollarSign } from 'react-icons/fi';

const movimientos = [
  { tipo: 'Ingreso', motivo: 'Venta #V-008', monto: '+MX$234.50', hora: '11:42 a.m.', color: '#16a34a', bg: '#dcfce7' },
  { tipo: 'Ingreso', motivo: 'Venta #V-007', monto: '+MX$89.00', hora: '11:05 a.m.', color: '#16a34a', bg: '#dcfce7' },
  { tipo: 'Egreso', motivo: 'Pago proveedor', monto: '-MX$450.00', hora: '10:30 a.m.', color: '#dc2626', bg: '#fee2e2' },
  { tipo: 'Ingreso', motivo: 'Venta #V-006', monto: '+MX$450.30', hora: '10:22 a.m.', color: '#16a34a', bg: '#dcfce7' },
  { tipo: 'Ingreso', motivo: 'Venta #V-005', monto: '+MX$175.00', hora: '09:51 a.m.', color: '#16a34a', bg: '#dcfce7' },
  { tipo: 'Egreso', motivo: 'Gasto operativo', monto: '-MX$80.00', hora: '08:00 a.m.', color: '#dc2626', bg: '#fee2e2' },
];

const CajaPrincipal = () => {
  const [showModal, setShowModal] = useState(null);

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Caja Principal</h1>
          <p style={styles.sub}>Registra ingresos y egresos en efectivo de tu caja</p>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button style={styles.btnOutline} onClick={() => setShowModal('ingreso')}>
            <FiPlus size={15} /> Ingresar Efectivo
          </button>
          <button style={styles.btnOutline} onClick={() => setShowModal('egreso')}>
            <FiArrowDownLeft size={15} /> Retirar Efectivo
          </button>
          <button style={styles.btnPrimary}>
            <FiScissors size={15} /> Hacer Corte de Caja
          </button>
        </div>
      </div>

      {/* Summary cards */}
      <div style={styles.summaryGrid}>
        <div style={styles.summaryCard}>
          <div style={{ ...styles.summaryIcon, background: '#dcfce7' }}>
            <FiTrendingUp size={20} color="#16a34a" />
          </div>
          <div>
            <p style={styles.summaryLabel}>Ingresos del Día</p>
            <h2 style={{ ...styles.summaryValue, color: '#16a34a' }}>MX$948.80</h2>
          </div>
        </div>
        <div style={styles.summaryCard}>
          <div style={{ ...styles.summaryIcon, background: '#fee2e2' }}>
            <FiTrendingDown size={20} color="#dc2626" />
          </div>
          <div>
            <p style={styles.summaryLabel}>Egresos del Día</p>
            <h2 style={{ ...styles.summaryValue, color: '#dc2626' }}>MX$530.00</h2>
          </div>
        </div>
        <div style={styles.summaryCard}>
          <div style={{ ...styles.summaryIcon, background: '#dbeafe' }}>
            <FiDollarSign size={20} color="#2563eb" />
          </div>
          <div>
            <p style={styles.summaryLabel}>Efectivo al Inicio</p>
            <h2 style={{ ...styles.summaryValue, color: '#2563eb' }}>MX$0.00</h2>
          </div>
        </div>
        <div style={{ ...styles.summaryCard, background: '#0f172a' }}>
          <div style={{ ...styles.summaryIcon, background: 'rgba(34,197,94,0.15)' }}>
            <FiDollarSign size={20} color="#22c55e" />
          </div>
          <div>
            <p style={{ ...styles.summaryLabel, color: '#94a3b8' }}>Total Esperado</p>
            <h2 style={{ ...styles.summaryValue, color: '#22c55e' }}>MX$418.80</h2>
          </div>
        </div>
      </div>

      {/* Movements */}
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>Movimientos del Día</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {movimientos.map((m, i) => (
            <div key={i} style={styles.movRow}>
              <div style={{ ...styles.movIcon, background: m.bg }}>
                {m.tipo === 'Ingreso'
                  ? <FiTrendingUp size={15} color={m.color} />
                  : <FiTrendingDown size={15} color={m.color} />}
              </div>
              <div style={{ flex: 1 }}>
                <p style={styles.movMotivo}>{m.motivo}</p>
                <p style={styles.movTipo}>{m.tipo} · {m.hora}</p>
              </div>
              <span style={{ color: m.color, fontWeight: 700, fontSize: 15 }}>{m.monto}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal simple */}
      {showModal && (
        <div style={styles.overlay} onClick={() => setShowModal(null)}>
          <div style={styles.modal} onClick={e => e.stopPropagation()}>
            <h3 style={{ margin: '0 0 16px', color: '#0f172a' }}>
              {showModal === 'ingreso' ? 'Ingresar Efectivo' : 'Retirar Efectivo'}
            </h3>
            <label style={styles.label}>Monto $</label>
            <input style={styles.modalInput} type="number" placeholder="0.00" />
            <label style={styles.label}>Motivo</label>
            <input style={styles.modalInput} type="text" placeholder="Descripción del movimiento" />
            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 20 }}>
              <button style={styles.btnOutline} onClick={() => setShowModal(null)}>Cancelar</button>
              <button style={styles.btnPrimary} onClick={() => setShowModal(null)}>Guardar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  page: { padding: 32, background: '#f1f5f9', minHeight: '100vh', fontFamily: "'Segoe UI', sans-serif" },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 },
  title: { fontSize: 26, fontWeight: 700, color: '#0f172a', margin: '0 0 4px' },
  sub: { color: '#64748b', fontSize: 13, margin: 0 },
  btnPrimary: { display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', background: '#16a34a', color: '#fff', border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer' },
  btnOutline: { display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', background: '#fff', color: '#374151', border: '1.5px solid #e2e8f0', borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: 'pointer' },
  summaryGrid: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 24 },
  summaryCard: { background: '#fff', borderRadius: 12, padding: 20, display: 'flex', alignItems: 'center', gap: 16, boxShadow: '0 1px 3px rgba(0,0,0,0.07)', border: '1px solid #f1f5f9' },
  summaryIcon: { width: 44, height: 44, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  summaryLabel: { color: '#64748b', fontSize: 13, fontWeight: 500, margin: '0 0 4px' },
  summaryValue: { fontSize: 22, fontWeight: 700, margin: 0 },
  card: { background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 1px 3px rgba(0,0,0,0.07)', border: '1px solid #f1f5f9' },
  cardTitle: { fontSize: 15, fontWeight: 600, color: '#0f172a', margin: '0 0 16px' },
  movRow: { display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0', borderBottom: '1px solid #f8fafc' },
  movIcon: { width: 36, height: 36, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  movMotivo: { fontSize: 14, fontWeight: 500, color: '#0f172a', margin: '0 0 2px' },
  movTipo: { fontSize: 12, color: '#94a3b8', margin: 0 },
  overlay: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999 },
  modal: { background: '#fff', borderRadius: 12, padding: 28, width: 360, boxShadow: '0 20px 60px rgba(0,0,0,0.2)' },
  label: { display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6, marginTop: 14 },
  modalInput: { width: '100%', padding: '10px 12px', border: '1.5px solid #e2e8f0', borderRadius: 8, fontSize: 14, outline: 'none', boxSizing: 'border-box' },
};

export default CajaPrincipal;
