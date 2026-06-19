import React, { useState } from 'react';
import { FiSearch, FiTrash2, FiMinus, FiPlus, FiCreditCard, FiDollarSign } from 'react-icons/fi';

const catalogoProductos = [
  { id: 1, nombre: 'Aerosol WD-40 400ml', precio: 155.00, sku: 'WD-001' },
  { id: 2, nombre: 'Cinta Métrica Truper 5m', precio: 89.00, sku: 'CM-005' },
  { id: 3, nombre: 'Desarmador Plano 6"', precio: 42.00, sku: 'DP-006' },
  { id: 4, nombre: 'Cinta Teflón x3', precio: 18.00, sku: 'CT-X3' },
  { id: 5, nombre: 'Clavos 3" (kg)', precio: 22.00, sku: 'CL-003' },
  { id: 6, nombre: 'Broca de Acero 1/2"', precio: 28.50, sku: 'BA-012' },
];

const NuevaVenta = () => {
  const [carrito, setCarrito] = useState([
    { ...catalogoProductos[0], cantidad: 1 },
  ]);
  const [busqueda, setBusqueda] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [metodoPago, setMetodoPago] = useState('efectivo');

  const sugerencias = catalogoProductos.filter(p =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) && busqueda.length > 0
  );

  const agregarProducto = (prod) => {
    setCarrito(prev => {
      const existe = prev.find(p => p.id === prod.id);
      if (existe) return prev.map(p => p.id === prod.id ? { ...p, cantidad: p.cantidad + 1 } : p);
      return [...prev, { ...prod, cantidad: 1 }];
    });
    setBusqueda('');
    setShowSearch(false);
  };

  const cambiarCantidad = (id, delta) => {
    setCarrito(prev =>
      prev.map(p => p.id === id ? { ...p, cantidad: Math.max(1, p.cantidad + delta) } : p)
    );
  };

  const eliminar = (id) => setCarrito(prev => prev.filter(p => p.id !== id));

  const subtotal = carrito.reduce((a, p) => a + p.precio * p.cantidad, 0);
  const iva = subtotal * 0.16;
  const total = subtotal + iva;

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Nueva Venta</h1>

      <div style={styles.layout}>
        {/* Left — product search + cart */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Search */}
          <div style={styles.card}>
            <div style={styles.searchWrap}>
              <FiSearch size={16} style={styles.searchIcon} />
              <input
                style={styles.searchInput}
                placeholder="Buscar producto por nombre, SKU o código de barras..."
                value={busqueda}
                onChange={e => { setBusqueda(e.target.value); setShowSearch(true); }}
                onFocus={() => setShowSearch(true)}
              />
            </div>
            {showSearch && sugerencias.length > 0 && (
              <div style={styles.dropdown}>
                {sugerencias.map(p => (
                  <div key={p.id} style={styles.dropdownItem} onClick={() => agregarProducto(p)}>
                    <div>
                      <p style={styles.dropName}>{p.nombre}</p>
                      <p style={styles.dropSku}>{p.sku}</p>
                    </div>
                    <span style={styles.dropPrice}>MX${p.precio.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Productos en la venta</h3>
            {carrito.length === 0
              ? <p style={styles.emptyMsg}>No hay productos agregados. Busca un producto arriba.</p>
              : carrito.map(p => (
                <div key={p.id} style={styles.cartRow}>
                  <div style={styles.cartInfo}>
                    <p style={styles.cartName}>{p.nombre}</p>
                    <p style={styles.cartSku}>MX${p.precio.toFixed(2)} / ud</p>
                  </div>
                  <div style={styles.qtyControl}>
                    <button style={styles.qtyBtn} onClick={() => cambiarCantidad(p.id, -1)}>
                      <FiMinus size={12} />
                    </button>
                    <span style={styles.qtyNum}>{p.cantidad}</span>
                    <button style={styles.qtyBtn} onClick={() => cambiarCantidad(p.id, +1)}>
                      <FiPlus size={12} />
                    </button>
                  </div>
                  <span style={styles.cartTotal}>MX${(p.precio * p.cantidad).toFixed(2)}</span>
                  <button style={styles.deleteBtn} onClick={() => eliminar(p.id)}>
                    <FiTrash2 size={14} />
                  </button>
                </div>
              ))}
          </div>
        </div>

        {/* Right — summary + payment */}
        <div style={styles.sidebar}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Resumen</h3>
            <div style={styles.summaryRow}>
              <span style={styles.summaryLabel}>Subtotal</span>
              <span>MX${subtotal.toFixed(2)}</span>
            </div>
            <div style={styles.summaryRow}>
              <span style={styles.summaryLabel}>IVA 16%</span>
              <span>MX${iva.toFixed(2)}</span>
            </div>
            <div style={styles.totalRow}>
              <span style={styles.totalLabel}>Total</span>
              <span style={styles.totalValue}>MX${total.toFixed(2)}</span>
            </div>

            <div style={{ marginTop: 20 }}>
              <p style={styles.payLabel}>Método de pago</p>
              <div style={styles.payOptions}>
                <button
                  style={{ ...styles.payBtn, ...(metodoPago === 'efectivo' ? styles.payBtnActive : {}) }}
                  onClick={() => setMetodoPago('efectivo')}
                >
                  <FiDollarSign size={16} /> Efectivo
                </button>
                <button
                  style={{ ...styles.payBtn, ...(metodoPago === 'tarjeta' ? styles.payBtnActive : {}) }}
                  onClick={() => setMetodoPago('tarjeta')}
                >
                  <FiCreditCard size={16} /> Tarjeta
                </button>
              </div>
            </div>

            <button style={styles.cobrarBtn}>
              Cobrar MX${total.toFixed(2)}
            </button>
            <button style={styles.cancelBtn}>
              Cancelar Venta
            </button>
          </div>

          <div style={{ ...styles.card, background: '#f8fafc' }}>
            <p style={{ fontSize: 12, color: '#94a3b8', margin: 0, textAlign: 'center' }}>
              Cliente: <strong style={{ color: '#374151' }}>Público en General</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: { padding: 32, background: '#f1f5f9', minHeight: '100vh', fontFamily: "'Segoe UI', sans-serif" },
  title: { fontSize: 26, fontWeight: 700, color: '#0f172a', margin: '0 0 24px' },
  layout: { display: 'flex', gap: 20, alignItems: 'flex-start' },
  card: { background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 1px 3px rgba(0,0,0,0.07)', border: '1px solid #f1f5f9' },
  cardTitle: { fontSize: 15, fontWeight: 600, color: '#0f172a', margin: '0 0 16px' },
  searchWrap: { position: 'relative' },
  searchIcon: { position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', pointerEvents: 'none' },
  searchInput: { width: '100%', padding: '11px 12px 11px 38px', border: '1.5px solid #e2e8f0', borderRadius: 8, fontSize: 14, outline: 'none', boxSizing: 'border-box' },
  dropdown: { marginTop: 8, border: '1px solid #e2e8f0', borderRadius: 8, overflow: 'hidden' },
  dropdownItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', cursor: 'pointer', borderBottom: '1px solid #f8fafc', transition: 'background 0.1s' },
  dropName: { fontSize: 14, fontWeight: 500, color: '#0f172a', margin: '0 0 2px' },
  dropSku: { fontSize: 12, color: '#94a3b8', margin: 0 },
  dropPrice: { fontWeight: 700, color: '#16a34a', fontSize: 14 },
  emptyMsg: { color: '#94a3b8', fontSize: 14, textAlign: 'center', padding: '20px 0', margin: 0 },
  cartRow: { display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0', borderBottom: '1px solid #f8fafc' },
  cartInfo: { flex: 1 },
  cartName: { fontSize: 14, fontWeight: 500, color: '#0f172a', margin: '0 0 2px' },
  cartSku: { fontSize: 12, color: '#94a3b8', margin: 0 },
  qtyControl: { display: 'flex', alignItems: 'center', gap: 8, background: '#f1f5f9', borderRadius: 8, padding: '4px 8px' },
  qtyBtn: { background: 'none', border: 'none', cursor: 'pointer', color: '#374151', display: 'flex', alignItems: 'center', padding: 2 },
  qtyNum: { fontSize: 14, fontWeight: 600, color: '#0f172a', minWidth: 24, textAlign: 'center' },
  cartTotal: { fontSize: 14, fontWeight: 700, color: '#0f172a', minWidth: 70, textAlign: 'right' },
  deleteBtn: { background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', display: 'flex', alignItems: 'center', padding: 4 },
  sidebar: { width: 280, display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 },
  summaryRow: { display: 'flex', justifyContent: 'space-between', fontSize: 14, color: '#374151', marginBottom: 10 },
  summaryLabel: { color: '#64748b' },
  totalRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: 12, marginTop: 4 },
  totalLabel: { fontSize: 16, fontWeight: 600, color: '#0f172a' },
  totalValue: { fontSize: 22, fontWeight: 700, color: '#0f172a' },
  payLabel: { fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8, marginTop: 0 },
  payOptions: { display: 'flex', gap: 8 },
  payBtn: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '8px', border: '1.5px solid #e2e8f0', borderRadius: 8, background: '#f8fafc', cursor: 'pointer', fontSize: 13, fontWeight: 500, color: '#374151' },
  payBtnActive: { border: '1.5px solid #16a34a', background: '#dcfce7', color: '#16a34a' },
  cobrarBtn: { width: '100%', marginTop: 20, padding: '13px', background: '#16a34a', color: '#fff', border: 'none', borderRadius: 8, fontSize: 16, fontWeight: 700, cursor: 'pointer' },
  cancelBtn: { width: '100%', marginTop: 8, padding: '10px', background: 'none', color: '#94a3b8', border: 'none', fontSize: 13, cursor: 'pointer' },
};

export default NuevaVenta;
