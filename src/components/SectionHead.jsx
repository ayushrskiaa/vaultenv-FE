export default function SectionHead({ num, label, title, children }) {
  return (
    <div style={{
      marginBottom: 'var(--s-12)',
    }}>
      <div style={{
        fontSize: 'var(--t-micro)',
        fontWeight: 'var(--w-medium)',
        color: 'var(--fg-tertiary)',
        marginBottom: 'var(--s-4)',
        letterSpacing: 'var(--ls-caps)',
        textTransform: 'uppercase',
        fontFamily: 'var(--font-mono)',
      }}>
        <span style={{ color: 'var(--vault-amber)', fontSize: '16px', marginRight: '2px' }}>/</span>
        <span>{num}</span>
        <span style={{ marginLeft: '8px' }}>{label}</span>
      </div>
      <h2 style={{
        fontSize: 'var(--t-h2)',
        fontWeight: 'var(--w-semibold)',
        lineHeight: 'var(--lh-snug)',
        marginBottom: 'var(--s-5)',
        color: 'var(--fg-primary)',
      }}>
        {title}
      </h2>
      {children && (
        <p style={{
          fontSize: 'var(--t-body)',
          color: 'var(--fg-secondary)',
          lineHeight: 'var(--lh-loose)',
          maxWidth: '600px',
        }}>
          {children}
        </p>
      )}
    </div>
  );
}
