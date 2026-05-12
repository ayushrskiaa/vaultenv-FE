'use client'

import { useState } from 'react'

const GH_ICON = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={{ display: 'inline-block', marginRight: '6px', verticalAlign: '-2px' }}>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
)

const GH_ICON_SM = (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style={{ display: 'inline-block', marginRight: '5px', verticalAlign: '-1px' }}>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
)

const INSTALL_CMD = 'git clone https://github.com/ayushrskiaa/vaultenv && cd vaultenv && npm install && npm link'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  function scrollToStart() {
    document.getElementById('start').scrollIntoView({ behavior: 'smooth' })
  }

  function copyCommand() {
    navigator.clipboard.writeText(INSTALL_CMD).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <>
      {/* ===== MODAL ===== */}
      {modalOpen && (
        <div className="modal active" onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}>
          <div className="modal-content">
            <div className="modal-header">
              <h3>Install vaultenv</h3>
              <button className="modal-close" onClick={() => setModalOpen(false)}>×</button>
            </div>
            <div className="command-box">
              <span className="command-text">{INSTALL_CMD}</span>
              <button className={`copy-btn${copied ? ' copied' : ''}`} onClick={copyCommand}>
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>
            <div className="modal-footer">
              This installs vaultenv globally. Then run{' '}
              <code style={{ background: 'var(--site-bg-2)', padding: '2px 6px', borderRadius: '3px', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                vault init
              </code>{' '}
              to get started.
            </div>
          </div>
        </div>
      )}

      {/* ===== NAV ===== */}
      <nav className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <rect x="3" y="11" width="18" height="12" rx="2.5" fill="var(--site-amber)" opacity="0.15" stroke="var(--site-amber)" strokeWidth="1.8"/>
              <path d="M7.5 11V8a4.5 4.5 0 0 1 9 0v3" stroke="var(--site-amber)" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="12" cy="17" r="1.5" fill="var(--site-amber)"/>
              <line x1="12" y1="18.5" x2="12" y2="20.5" stroke="var(--site-amber)" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            <span><span className="v">vault</span>env</span>
          </a>
          <div className="nav-links">
            <a href="#problem"><span className="num">/00</span> problem</a>
            <a href="#commands"><span className="num">/01</span> commands</a>
            <a href="#how"><span className="num">/02</span> how it works</a>
            <a href="#spec"><span className="num">/03</span> encryption</a>
            <a href="#vs"><span className="num">/04</span> vs others</a>
            <a href="https://github.com/ayushrskiaa/vaultenv" className="btn btn-ghost">{GH_ICON}Star</a>
            <button onClick={() => scrollToStart()} className="btn btn-amber" style={{ border: 'none' }}>Install</button>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section id="top" className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">
                <span className="slash">/</span>
                <span className="num">00</span>
                <span className="label">local-first secrets vault</span>
              </div>
              <h1 className="hero-headline">Keep your keys <em>off your screen</em>, out of your <em>logs</em>, and away from <em>agents</em>.</h1>
              <p className="hero-sub">
                Vaultenv stores all your secrets <b style={{ color: 'var(--site-ink)', fontWeight: '600' }}>AES-256-GCM</b> encrypted on your local machine and injects them directly into your app at runtime — without ever exposing them to your shell, your logs, or any AI agent.
              </p>
              <div className="hero-cta">
                <button onClick={() => scrollToStart()} className="btn btn-primary" style={{ border: 'none', fontFamily: 'var(--font-mono)' }}>$ npm install -g vaultenv</button>
                <a href="#how" className="btn btn-ghost">How it works →</a>
              </div>
              <div className="hero-meta">
                <span><span className="dot"></span> <b>local-only</b></span>
                <span>· zero server setup</span>
                <span>· offline</span>
                <span>· MIT-licensed</span>
              </div>
            </div>
            <div className="term-window">
              <div className="term-titlebar">
                <div className="lights"><span className="r"></span><span className="y"></span><span className="g"></span></div>
                <div className="title">— <b>vault</b> · ~/projects/api</div>
              </div>
              <div className="term-body">
                <span className="com"># register once. encrypted on disk.</span>{'\n'}
                <span className="p">$</span> vault set <span className="key">OPENAI_API_KEY</span> <span className="dim">&quot;sk-proj-…&quot;</span>{'\n'}
                <span className="ok">✓</span> <span className="dim">&quot;OPENAI_API_KEY&quot; registered in vault.</span>{'\n\n'}
                <span className="com"># inject at runtime — child process only.</span>{'\n'}
                <span className="p">$</span> vault run <span className="dim">--</span> npm start{'\n\n'}
                <span className="com"># anything outside vault run sees nothing.</span>{'\n'}
                <span className="p">$</span> echo <span className="key">$OPENAI_API_KEY</span>{'\n'}
                <span className="dim">  (empty)</span><span className="cursor"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== /00 PROBLEM ===== */}
      <section id="problem" className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="slash">/</span><span className="num">00</span><span className="label">the leak</span></div>
            <h2>Your <em>secrets</em> are <em>everywhere</em>. Every agent run, every log line, every git diff.</h2>
            <p>When you develop with AI agents like Claude Code, your real keys flow through a dozen surfaces you don&apos;t control. Even when you&apos;re careful, secrets leak.</p>
          </div>
          <div className="threat-grid">
            <div className="threat-card" data-num="/01">
              <div className="label">Agent reads your <code style={{ background: 'var(--site-bg-2)', padding: '1px 5px', borderRadius: '3px', color: 'var(--site-ink)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>.env</code></div>
              <pre><span className="com"># .env on disk</span>{'\n'}<span className="key">OPENAI_API_KEY</span>=<span style={{ color: '#b53336' }}>sk-proj-abc123...</span>{'\n\n'}<span className="com"># agent: read_file(&apos;.env&apos;)</span>{'\n'}<span className="arr">→</span> sees your real API key</pre>
            </div>
            <div className="threat-card" data-num="/02">
              <div className="label">Agent reads your logs</div>
              <pre><span className="com">// debug.log</span>{'\n'}console.log(process.env.<span className="key">OPENAI_API_KEY</span>){'\n'}<span className="arr">→</span> <span style={{ color: '#b53336' }}>sk-proj-abc123…</span></pre>
            </div>
            <div className="threat-card" data-num="/03">
              <div className="label">Agent reads git history</div>
              <pre><span className="p">$</span> git log --diff-filter=A -- .env{'\n\n'}<span className="com"># the secret you committed</span>{'\n'}<span className="com"># three months ago</span>{'\n'}<span className="arr">→</span> <span style={{ color: '#b53336' }}>sk-proj-abc123…</span></pre>
            </div>
            <div className="threat-card" data-num="/04">
              <div className="label">Vault file stolen from disk</div>
              <pre><span className="com">{'// ~/.secure-vault/vault.encrypted'}</span>{'\n'}{'{'}<span className="key">&quot;iv&quot;</span>:<span className="dim">&quot;…&quot;</span>,<span className="key">&quot;authTag&quot;</span>:<span className="dim">&quot;…&quot;</span>,{'\n'} <span className="key">&quot;data&quot;</span>:<span className="dim">&quot;6f3a9c1e…&quot;</span>{'}'}{'\n'}<span className="arr">→</span> <span style={{ color: '#2f7d3a' }}>unreadable without master password</span></pre>
            </div>
          </div>
        </div>
      </section>

      {/* ===== /01 COMMANDS ===== */}
      <section id="commands" className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="slash">/</span><span className="num">01</span><span className="label">the surface</span></div>
            <h2>One <em>binary</em>. Twelve <em>commands</em>. Zero code changes to your app.</h2>
            <p>Your code keeps reading <code style={{ background: 'var(--site-bg-2)', padding: '1px 5px', borderRadius: '3px', fontFamily: 'var(--font-mono)', fontSize: '0.92em', color: 'var(--site-ink)' }}>process.env.X</code> exactly as before. Vaultenv handles registration, decryption and injection.</p>
          </div>
          <div className="cmd-grid">
            {[
              { n: '/01', title: 'vault init', desc: 'Create your encrypted vault. Sets a master password. Runs once per machine.', ex: 'vault init' },
              { n: '/02', title: 'vault set', desc: 'Register a secret. Conflict-aware: overwrite, rename, or cancel.', ex: 'vault set STRIPE_KEY "sk_…"' },
              { n: '/03', title: 'vault list', desc: 'Names and masked hints only. Real values are never shown.', ex: 'vault list' },
              { n: '/04', title: 'vault run', desc: 'Spawn any command with secrets injected as env vars. Child process only.', ex: 'vault run -- node app.js' },
              { n: '/05', title: 'vault rotate', desc: 'Replace the value of an existing secret. Type and history preserved.', ex: 'vault rotate KEY "new-val"' },
              { n: '/06', title: 'vault populate', desc: 'Bootstrap from .vault-template.json for team onboarding.', ex: 'vault populate' },
              { n: '/07', title: 'vault lock', desc: 'Manually clear the session key. New processes lose access immediately.', ex: 'vault lock' },
              { n: '/08', title: 'vault status', desc: 'Vault path, lock state, secret count, and last vault run.', ex: 'vault status' },
              { n: '/09', title: 'vault audit', desc: 'Local access log. Actions are recorded; values are never logged.', ex: 'vault audit --tail 20' },
            ].map((cmd) => (
              <div key={cmd.n} className="cmd-card">
                <div className="num">{cmd.n}</div>
                <div className="title">{cmd.title}</div>
                <div className="desc">{cmd.desc}</div>
                <div className="ex"><span className="p">$</span> {cmd.ex}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== /02 HOW IT WORKS ===== */}
      <section id="how" className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="slash">/</span><span className="num">02</span><span className="label">how it works</span></div>
            <h2>Real keys live in <em>memory</em>, only inside the <em>child process</em>.</h2>
            <p>The shell never sees them. The agent context never sees them. They appear, do the work, and vanish when the process exits.</p>
          </div>
          <div className="flow">
            <div className="flow-inner">
              <div className="label">/ vault run -- node app.js</div>
              <h3>Four steps. <em>Zero leaks</em>. The vault file never decrypts to disk.</h3>
              <div className="flow-steps">
                <div className="flow-step"><div className="n">/ step 01</div><div className="t">Read master key</div><div className="d">Silently retrieves the session key from the OS Keyring (Keychain on macOS, libsecret on Linux, Credential Manager on Windows).</div></div>
                <div className="flow-step"><div className="n">/ step 02</div><div className="t">Decrypt vault</div><div className="d">Opens ~/.secure-vault/vault.encrypted with AES-256-GCM. Secrets stay in process memory, never written to disk.</div></div>
                <div className="flow-step"><div className="n">/ step 03</div><div className="t">Inject &amp; spawn</div><div className="d">Passes decrypted secrets directly to child process environment. Your app reads process.env exactly as before.</div></div>
                <div className="flow-step"><div className="n">/ step 04</div><div className="t">Lock on exit</div><div className="d">Child process exits → secrets deallocated from memory. Parent shell has no access. Manually run &apos;vault lock&apos; to revoke current session.</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== /03 ENCRYPTION SPEC ===== */}
      <section id="spec" className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="slash">/</span><span className="num">03</span><span className="label">encryption spec</span></div>
            <h2>Boring <em>cryptography</em>. Industry primitives. <em>No</em> roll-your-own.</h2>
            <p>Vaultenv is built on Node&apos;s built-in <code style={{ background: 'var(--site-bg-2)', padding: '1px 5px', borderRadius: '3px', fontFamily: 'var(--font-mono)', fontSize: '0.92em' }}>crypto</code> module — the same primitives audited and shipped in TLS, signal, and 1Password.</p>
          </div>
          <div className="spec-grid">
            <table className="spec-table">
              <tbody>
                {[
                  ['Algorithm', 'AES-256-GCM'],
                  ['Key size', '256 bits'],
                  ['Key derivation', 'PBKDF2-SHA256'],
                  ['Iterations', '100,000'],
                  ['Salt', '32 bytes random, unique per install'],
                  ['IV / Nonce', '16 bytes random, unique per write'],
                  ['Auth tag', '16 bytes (tamper detection)'],
                  ['Session key storage', 'OS Keyring'],
                  ['Cleared on shutdown', 'Yes, automatically'],
                ].map(([label, value]) => (
                  <tr key={label}><td>{label}</td><td>{value}</td></tr>
                ))}
              </tbody>
            </table>
            <div className="spec-callout">
              <pre className="ascii">{`    ┌──────────┐
    │  ╭────╮  │
    │  │    │  │
   ╭┴──┴────┴──┴╮
   │            │
   │     ●      │
   │     │      │
   │            │
   ╰────────────╯`}</pre>
              <p>If your machine is stolen powered-off, <strong>the keyring is empty</strong>. The vault file alone is unreadable. There is no password recovery — only re-init.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== /04 VS OTHERS ===== */}
      <section id="vs" className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="slash">/</span><span className="num">04</span><span className="label">vs other tools</span></div>
            <h2>Free. <em>Offline</em>. Zero <em>setup</em>. The local-dev gap.</h2>
            <p>HashiCorp Vault, Doppler and direnv all solve adjacent problems. Vaultenv fills a specific one: agent-resistant secret management on a single dev machine, with no server.</p>
          </div>
          <table className="cmp">
            <thead>
              <tr>
                <th></th>
                <th className="us">Vaultenv</th>
                <th>HashiCorp Vault</th>
                <th>Doppler</th>
                <th>direnv</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Local only</td><td className="us"><span className="ok">✓</span></td><td><span className="no">— server</span></td><td><span className="no">— cloud</span></td><td><span className="ok">✓</span></td></tr>
              <tr><td>Encrypted at rest</td><td className="us"><span className="ok">✓</span></td><td><span className="ok">✓</span></td><td><span className="ok">✓</span></td><td><span className="no">✗</span></td></tr>
              <tr><td>Free</td><td className="us"><span className="ok">✓</span></td><td><span className="partial">partial</span></td><td><span className="partial">partial</span></td><td><span className="ok">✓</span></td></tr>
              <tr><td>Zero server setup</td><td className="us"><span className="ok">✓</span></td><td><span className="no">✗</span></td><td><span className="no">✗</span></td><td><span className="ok">✓</span></td></tr>
              <tr><td>AI agent protection</td><td className="us"><span className="ok">✓</span></td><td><span className="ok">✓</span></td><td><span className="ok">✓</span></td><td><span className="no">✗</span></td></tr>
              <tr><td>Works offline</td><td className="us"><span className="ok">✓</span></td><td><span className="no">✗</span></td><td><span className="no">✗</span></td><td><span className="ok">✓</span></td></tr>
              <tr><td>Setup time</td><td className="us">~1 min</td><td>hours</td><td>~10 min</td><td>~5 min</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== /05 QUICK START ===== */}
      <section id="start" className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="slash">/</span><span className="num">05</span><span className="label">quick start</span></div>
            <h2>Three <em>commands</em>. Sixty <em>seconds</em>. Done.</h2>
          </div>
          <div className="qs-grid">
            <div className="qs-steps">
              <div className="qs-step"><div className="n">/01</div><div><h4>Install</h4><p>Clone the repo, install dependencies, link globally so <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--site-amber)', fontSize: '0.92em' }}>vault</code> works from any directory.</p></div></div>
              <div className="qs-step"><div className="n">/02</div><div><h4>Initialise</h4><p>Set a master password once. Vaultenv creates <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--site-amber)', fontSize: '0.92em' }}>~/.secure-vault/vault.encrypted</code> and unlocks the session.</p></div></div>
              <div className="qs-step"><div className="n">/03</div><div><h4>Register &amp; run</h4><p>Set each secret with a name and value. Then start your app via <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--site-amber)', fontSize: '0.92em' }}>vault run --</code>. Done.</p></div></div>
            </div>
            <div className="term-window">
              <div className="term-titlebar">
                <div className="lights"><span className="r"></span><span className="y"></span><span className="g"></span></div>
                <div className="title">— <b>quick-start</b> · zsh</div>
              </div>
              <div className="term-body">
                <span className="com"># 01 — install</span>{'\n'}
                <span className="p">$</span> git clone github.com/vaultenv/vaultenv{'\n'}
                <span className="p">$</span> cd vaultenv &amp;&amp; npm install &amp;&amp; npm link{'\n\n'}
                <span className="com"># 02 — initialise</span>{'\n'}
                <span className="p">$</span> vault init{'\n'}
                <span className="dim">? Set master password: </span><span className="ok">●●●●●●●●</span>{'\n'}
                <span className="ok">✓</span> Vault created and unlocked.{'\n\n'}
                <span className="com"># 03 — register and run</span>{'\n'}
                <span className="p">$</span> vault set <span className="key">OPENAI_API_KEY</span> <span className="dim">&quot;sk-proj-…&quot;</span>{'\n'}
                <span className="p">$</span> vault set <span className="key">STRIPE_API_KEY</span> <span className="dim">&quot;sk_live_…&quot;</span>{'\n'}
                <span className="p">$</span> vault run <span className="dim">--</span> npm start{'\n'}
                <span className="dim">  (2 secrets injected)</span><span className="cursor"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta">
        <div className="cta-eyebrow">/ &nbsp; start with open source</div>
        <h2>Stop <em>leaking</em>. Start <em>shipping</em>.</h2>
        <p>MIT-licensed. No telemetry. No accounts. Your machine, your keys, your rules.</p>
        <div className="cta-actions">
          <a className="btn btn-primary" href="https://github.com/ayushrskiaa/vaultenv">$ git clone vaultenv ↗</a>
          <a className="btn btn-ghost" href="#how">Read the docs</a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="section footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-col-title">product</div>
              <a href="#">GitHub</a>
              <a href="#">Docs</a>
              <a href="#">npm</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">community</div>
              <a href="#">Discord</a>
              <a href="#">Twitter</a>
              <a href="#">Issues</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">open source</div>
              <a href="https://github.com/ayushrskiaa/vaultenv">{GH_ICON_SM}Star vaultenv</a>
              <a href="https://github.com/ayushrskiaa">{GH_ICON_SM}Follow @ayushrskiaa</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>vaultenv © 2026. MIT licensed. Keep your secrets secret.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
