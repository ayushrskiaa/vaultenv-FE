export default function ThreatCard({ num, label, children }) {
  return (
    <div style={{
      padding: 'var(--s-5)',
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--r-lg)',
      boxShadow: 'var(--shadow-inset)',
    }}>
      <div style={{
        fontSize: 'var(--t-micro)',
        color: 'var(--fg-tertiary)',
        fontWeight: 'var(--w-medium)',
        marginBottom: 'var(--s-3)',
        letterSpacing: 'var(--ls-caps)',
      }}>
        <span style={{ color: 'var(--vault-amber)', fontSize: '18px', marginRight: '4px' }}>/{num}</span>
        {label}
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--t-mono-s)',
        lineHeight: 'var(--lh-snug)',
        background: 'var(--bg-terminal)',
        padding: 'var(--s-3)',
        borderRadius: 'var(--r-sm)',
        border: '1px solid var(--border-subtle)',
        color: 'var(--fg-primary)',
        overflow: 'auto',
      }}>
        {children}
      </div>
    </div>
  );
}
