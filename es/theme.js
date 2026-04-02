var theme = {
  colors: {
    background: '#0f0f14',
    surface: 'rgba(255, 255, 255, 0.05)',
    surfaceHover: 'rgba(255, 255, 255, 0.08)',
    surfaceActive: 'rgba(99, 102, 241, 0.15)',
    accentPrimary: '#6366f1',
    accentSecondary: '#8b5cf6',
    accentGradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    textPrimary: 'rgba(255, 255, 255, 0.95)',
    textSecondary: 'rgba(255, 255, 255, 0.6)',
    textMuted: 'rgba(255, 255, 255, 0.35)',
    border: 'rgba(255, 255, 255, 0.08)',
    borderHover: 'rgba(255, 255, 255, 0.15)',
    danger: '#ef4444',
    dangerHover: '#dc2626',
    warning: '#f59e0b',
    success: '#10b981'
  },
  glass: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.08)'
  },
  shadows: {
    sm: '0 2px 8px rgba(0, 0, 0, 0.3)',
    md: '0 8px 32px rgba(0, 0, 0, 0.4)',
    lg: '0 16px 48px rgba(0, 0, 0, 0.5)',
    glow: '0 0 20px rgba(99, 102, 241, 0.3)'
  },
  radius: {
    sm: '6px',
    md: '10px',
    lg: '16px'
  },
  transition: {
    default: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)'
  },
  layout: {
    toolbarWidth: 56,
    sidebarWidth: 300,
    footerHeight: 28
  }
};

export default theme;