export default function CommandCard({ num, title, desc, example }) {
  return (
    <div style={{
      padding: 'var(--s-5)',
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--r-lg)',
      boxShadow: 'var(--shadow-inset)',
      transition: `background-color var(--d-fast) var(--ease-out), border-color var(--d-fast) var(--ease-out)`,
      cursor: 'pointer',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = 'var(--bg-surface-2)';
      e.currentTarget.style.borderColor = 'var(--border-default)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'var(--bg-surface)';
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
    }}
    >
      <div style={{
        fontSize: 'var(--t-h3)',
        fontWeight: 'var(--w-bold)',
        color: 'var(--vault-amber)',
        marginBottom: 'var(--s-2)',
      }}>
        {num}
      </div>
      <div style={{
        fontSize: 'var(--t-h3)',
        fontWeight: 'var(--w-semibold)',
        color: 'var(--fg-primary)',
        marginBottom: 'var(--s-2)',
      }}>
        {title}
      </div>
      <div style={{
        fontSize: 'var(--t-small)',
        color: 'var(--fg-secondary)',
        marginBottom: 'var(--s-3)',
        lineHeight: 'var(--lh-snug)',
      }}>
        {desc}
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--t-mono-s)',
        color: 'var(--fg-tertiary)',
        background: 'var(--bg-terminal)',
        padding: 'var(--s-3)',
        borderRadius: 'var(--r-sm)',
        border: '1px solid var(--border-subtle)',
      }}>
        <span style={{ color: 'var(--c-success)', fontWeight: 'var(--w-semibold)' }}>$ </span>
        {example}
      </div>
    </div>
  );
}
