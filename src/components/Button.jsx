export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  ...props
}) {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--s-2)',
    padding: 'var(--s-3) var(--s-4)',
    borderRadius: 'var(--r-md)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--t-body)',
    fontWeight: 'var(--w-semibold)',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: `background-color var(--d-fast) var(--ease-out), color var(--d-fast) var(--ease-out), border-color var(--d-fast) var(--ease-out)`,
    ...props.style
  };

  const variants = {
    primary: {
      background: 'var(--vault-amber)',
      color: '#0c0d10',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--fg-primary)',
      border: '1px solid var(--border-default)',
    },
    amber: {
      background: 'var(--vault-amber)',
      color: '#0c0d10',
    },
  };

  const style = { ...baseStyle, ...variants[variant] };

  if (href) {
    return (
      <a href={href} style={style} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button style={style} onClick={onClick} className={className} {...props}>
      {children}
    </button>
  );
}
