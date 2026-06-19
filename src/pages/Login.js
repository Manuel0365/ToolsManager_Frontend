import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiTool, FiUser, FiLock } from 'react-icons/fi';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div style={styles.page}>
      {/* Left panel — branding */}
      <div style={styles.leftPanel}>
        <div style={styles.brandContent}>
          <div style={styles.iconWrap}>
            <FiTool size={36} color="#22c55e" />
          </div>
          <h1 style={styles.brandTitle}>ToolsManager</h1>
          <p style={styles.brandSub}>
            Sistema de gestión de ventas e inventario para tu negocio
          </p>
          <div style={styles.featureList}>
            {['Control de inventario en tiempo real', 'Ventas y punto de cobro', 'Reportes y estadísticas', 'Gestión de clientes y proveedores'].map(f => (
              <div key={f} style={styles.featureItem}>
                <div style={styles.featureDot} />
                <span style={styles.featureText}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div style={styles.rightPanel}>
        <div style={styles.formCard}>
          <div style={styles.formHeader}>
            <h2 style={styles.formTitle}>Bienvenido de nuevo</h2>
            <p style={styles.formSub}>Ingresa tus credenciales para continuar</p>
          </div>

          <form onSubmit={handleLogin} style={styles.form}>
            <div style={styles.field}>
              <label style={styles.label}>Usuario</label>
              <div style={styles.inputWrap}>
                <FiUser size={16} style={styles.inputIcon} />
                <input
                  type="text"
                  style={styles.input}
                  placeholder="Nombre de usuario"
                  required
                />
              </div>
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Contraseña</label>
              <div style={styles.inputWrap}>
                <FiLock size={16} style={styles.inputIcon} />
                <input
                  type="password"
                  style={styles.input}
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button type="submit" style={styles.btn}>
              Iniciar Sesión
            </button>
          </form>

          <p style={styles.hint}>
            ToolsManager v1.0 &nbsp;·&nbsp; © 2025
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: "'Segoe UI', sans-serif",
  },
  leftPanel: {
    flex: 1,
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 56px',
  },
  brandContent: {
    maxWidth: 400,
  },
  iconWrap: {
    width: 64,
    height: 64,
    background: 'rgba(34,197,94,0.15)',
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },
  brandTitle: {
    color: '#f1f5f9',
    fontSize: 36,
    fontWeight: 800,
    margin: '0 0 12px',
    letterSpacing: '-0.5px',
  },
  brandSub: {
    color: '#94a3b8',
    fontSize: 16,
    lineHeight: 1.6,
    margin: '0 0 40px',
  },
  featureList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  featureDot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: '#22c55e',
    flexShrink: 0,
  },
  featureText: {
    color: '#cbd5e1',
    fontSize: 14,
  },
  rightPanel: {
    width: 480,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f8fafc',
    padding: '40px 32px',
  },
  formCard: {
    width: '100%',
    maxWidth: 380,
  },
  formHeader: {
    marginBottom: 36,
  },
  formTitle: {
    fontSize: 26,
    fontWeight: 700,
    color: '#0f172a',
    margin: '0 0 8px',
  },
  formSub: {
    color: '#64748b',
    fontSize: 14,
    margin: 0,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  label: {
    fontSize: 13,
    fontWeight: 600,
    color: '#374151',
  },
  inputWrap: {
    position: 'relative',
  },
  inputIcon: {
    position: 'absolute',
    left: 12,
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#9ca3af',
    pointerEvents: 'none',
  },
  input: {
    width: '100%',
    padding: '10px 12px 10px 38px',
    border: '1.5px solid #e2e8f0',
    borderRadius: 8,
    fontSize: 14,
    color: '#0f172a',
    background: '#fff',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  },
  btn: {
    padding: '12px',
    background: '#16a34a',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    fontSize: 15,
    fontWeight: 600,
    cursor: 'pointer',
    marginTop: 4,
    transition: 'background 0.2s',
  },
  hint: {
    textAlign: 'center',
    color: '#94a3b8',
    fontSize: 12,
    marginTop: 32,
  },
};

export default Login;
