export default function TerminalWindow({ children, title = '— vault · ~/projects/api' }) {
  return (
    <div style={{
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--r-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
    }}>
      {/* Titlebar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--s-3)',
        padding: 'var(--s-3) var(--s-4)',
        background: 'var(--bg-surface-2)',
        borderBottom: '1px solid var(--border-default)',
        fontSize: '13px',
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ed6a5e' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f5bf4f' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#61c554' }} />
        </div>
        <span style={{ color: 'var(--fg-tertiary)', fontFamily: 'var(--font-mono)' }}>{title}</span>
      </div>

      {/* Terminal body */}
      <div style={{
        padding: 'var(--s-4)',
        background: 'var(--bg-terminal)',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--t-mono)',
        lineHeight: 'var(--lh-snug)',
        color: 'var(--fg-primary)',
        overflow: 'auto',
        minHeight: '300px',
      }}>
        {children}
      </div>
    </div>
  );
}
