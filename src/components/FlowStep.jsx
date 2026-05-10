export default function FlowStep({ num, title, description }) {
  return (
    <div style={{ marginBottom: 'var(--s-8)' }}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 'var(--s-4)',
      }}>
        <div style={{
          fontSize: 'var(--t-micro)',
          fontWeight: 'var(--w-medium)',
          color: 'var(--fg-tertiary)',
          letterSpacing: 'var(--ls-caps)',
          fontFamily: 'var(--font-mono)',
          marginTop: '2px',
          whiteSpace: 'nowrap',
        }}>
          <span style={{ color: 'var(--vault-amber)' }}>/ step </span>
          {num}
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontSize: 'var(--t-h3)',
            fontWeight: 'var(--w-semibold)',
            marginBottom: 'var(--s-2)',
            color: 'var(--fg-primary)',
          }}>
            {title}
          </h3>
          <p style={{
            fontSize: 'var(--t-body)',
            color: 'var(--fg-secondary)',
            lineHeight: 'var(--lh-loose)',
          }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
