import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiShoppingCart, FiDollarSign, FiPackage, FiShoppingBag,
  FiBarChart2, FiUsers, FiTruck, FiPieChart, FiHome, FiLogOut, FiTool
} from 'react-icons/fi';

const navItems = [
  { to: '/home',         icon: FiHome,         label: 'Inicio' },
  { to: '/nueva-venta',  icon: FiShoppingCart,  label: 'Nueva Venta' },
  { to: '/cajaprincipal',icon: FiDollarSign,    label: 'Caja Principal' },
  { to: '/productos',    icon: FiPackage,       label: 'Productos' },
  { to: '/compras',      icon: FiShoppingBag,   label: 'Compras' },
  { to: '/ventas',       icon: FiBarChart2,     label: 'Ventas' },
  { to: '/clientes',     icon: FiUsers,         label: 'Clientes' },
  { to: '/proveedores',  icon: FiTruck,         label: 'Proveedores' },
  { to: '/reportes',     icon: FiPieChart,      label: 'Reportes' },
];

const Sidebar = () => {
  const location = useLocation();
  if (location.pathname === '/') return null;

  return (
    <div style={styles.wrapper}>
      {/* Logo */}
      <div style={styles.logoArea}>
        <div style={styles.logoIcon}>
          <FiTool size={20} color="#22c55e" />
        </div>
        <span style={styles.logoText}>ToolsManager</span>
      </div>

      <div style={styles.divider} />

      {/* Nav links */}
      <nav style={styles.nav}>
        {navItems.map(({ to, icon: Icon, label }) => {
          const active = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              style={{
                ...styles.navLink,
                ...(active ? styles.navLinkActive : {}),
              }}
            >
              <Icon size={18} style={{ flexShrink: 0 }} />
              <span>{label}</span>
              {active && <div style={styles.activePill} />}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div style={styles.footer}>
        <div style={styles.divider} />
        <div style={styles.userRow}>
          <div style={styles.avatar}>MC</div>
          <div>
            <div style={styles.userName}>Manuel Cruz</div>
            <div style={styles.userRole}>Administrador</div>
          </div>
        </div>
        <Link to="/" style={styles.logoutBtn}>
          <FiLogOut size={16} />
          <span>Cerrar Sesión</span>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    width: 240,
    minWidth: 240,
    height: '100vh',
    background: '#0f172a',
    display: 'flex',
    flexDirection: 'column',
    position: 'sticky',
    top: 0,
    overflowY: 'auto',
  },
  logoArea: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '24px 20px 20px',
  },
  logoIcon: {
    width: 36,
    height: 36,
    background: 'rgba(34,197,94,0.15)',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#f1f5f9',
    fontWeight: 700,
    fontSize: 16,
    letterSpacing: '-0.3px',
  },
  divider: {
    height: 1,
    background: 'rgba(255,255,255,0.07)',
    margin: '0 16px',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    padding: '12px 10px',
    flex: 1,
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '9px 12px',
    borderRadius: 8,
    color: '#94a3b8',
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 500,
    transition: 'all 0.15s',
    position: 'relative',
  },
  navLinkActive: {
    color: '#22c55e',
    background: 'rgba(34,197,94,0.1)',
  },
  activePill: {
    position: 'absolute',
    right: 8,
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: '#22c55e',
  },
  footer: {
    padding: '0 10px 16px',
  },
  userRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '14px 10px 10px',
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: '50%',
    background: 'rgba(34,197,94,0.2)',
    color: '#22c55e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    fontWeight: 700,
    flexShrink: 0,
  },
  userName: {
    color: '#f1f5f9',
    fontSize: 13,
    fontWeight: 600,
  },
  userRole: {
    color: '#64748b',
    fontSize: 11,
  },
  logoutBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '8px 12px',
    borderRadius: 8,
    color: '#64748b',
    textDecoration: 'none',
    fontSize: 13,
    fontWeight: 500,
    marginTop: 4,
  },
};

export default Sidebar;
