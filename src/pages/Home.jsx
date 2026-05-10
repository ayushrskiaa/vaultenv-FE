import Button from '../components/Button';
import TerminalWindow from '../components/TerminalWindow';
import CommandCard from '../components/CommandCard';
import ThreatCard from '../components/ThreatCard';
import SectionHead from '../components/SectionHead';
import FlowStep from '../components/FlowStep';

export default function Home() {
  return (
    <>
      {/* ============== NAV ============== */}
      <nav style={{
        borderBottom: '1px solid var(--border-default)',
        position: 'sticky',
        top: 0,
        background: 'var(--bg-canvas)',
        zIndex: 100,
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 var(--s-4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}>
          <a href="#top" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--s-2)',
            textDecoration: 'none',
            color: 'var(--fg-primary)',
          }}>
            <span style={{ fontSize: '20px' }}>🔐</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 'var(--w-bold)' }}>
              <span style={{ color: 'var(--vault-amber)' }}>vault</span>env
            </span>
          </a>

          <div style={{
            display: 'flex',
            gap: 'var(--s-6)',
            alignItems: 'center',
          }}>
            <div style={{ display: 'flex', gap: 'var(--s-4)', fontSize: 'var(--t-small)' }}>
              <a href="#problem" style={{ color: 'var(--fg-secondary)', textDecoration: 'none' }}>
                <span style={{ color: 'var(--vault-amber)', fontSize: '12px' }}>/00</span> problem
              </a>
              <a href="#commands" style={{ color: 'var(--fg-secondary)', textDecoration: 'none' }}>
                <span style={{ color: 'var(--vault-amber)', fontSize: '12px' }}>/01</span> commands
              </a>
              <a href="#how" style={{ color: 'var(--fg-secondary)', textDecoration: 'none' }}>
                <span style={{ color: 'var(--vault-amber)', fontSize: '12px' }}>/02</span> how
              </a>
            </div>
            <Button href="https://github.com/ayushrskiaa/vaultenv" variant="ghost" style={{ fontSize: 'var(--t-small)' }}>
              ★ Star
            </Button>
          </div>
        </div>
      </nav>

      {/* ============== HERO ============== */}
      <section id="top" style={{
        paddingTop: 'var(--s-20)',
        paddingBottom: 'var(--s-20)',
        background: 'var(--bg-canvas)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 var(--s-4)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--s-16)',
          alignItems: 'center',
        }}>
          <div>
            <div style={{
              fontSize: 'var(--t-micro)',
              fontWeight: 'var(--w-medium)',
              color: 'var(--fg-tertiary)',
              marginBottom: 'var(--s-5)',
              letterSpacing: 'var(--ls-caps)',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-mono)',
            }}>
              <span style={{ color: 'var(--vault-amber)', fontSize: '16px', marginRight: '4px' }}>/</span>
              <span>00</span>
              <span style={{ marginLeft: '8px' }}>local-first secrets vault</span>
            </div>

            <h1 style={{
              fontSize: 'var(--t-h1)',
              fontWeight: 'var(--w-semibold)',
              lineHeight: 'var(--lh-snug)',
              marginBottom: 'var(--s-5)',
              color: 'var(--fg-primary)',
            }}>
              Keep your keys <em style={{ fontStyle: 'italic', fontWeight: 'inherit' }}>off your screen</em>, out of your <em style={{ fontStyle: 'italic' }}>logs</em>, and away from <em style={{ fontStyle: 'italic' }}>agents</em>.
            </h1>

            <p style={{
              fontSize: 'var(--t-body)',
              color: 'var(--fg-secondary)',
              lineHeight: 'var(--lh-loose)',
              marginBottom: 'var(--s-6)',
            }}>
              Vaultenv stores all your secrets <strong style={{ color: 'var(--fg-primary)', fontWeight: '600' }}>AES-256-GCM</strong> encrypted on your local machine and injects them directly into your app at runtime — without ever exposing them to your shell, your logs, or any AI agent.
            </p>

            <div style={{ display: 'flex', gap: 'var(--s-4)', marginBottom: 'var(--s-6)' }}>
              <Button href="#" variant="primary">$ npm install -g vaultenv</Button>
              <Button href="#how" variant="ghost">How it works →</Button>
            </div>

            <div style={{
              display: 'flex',
              gap: 'var(--s-4)',
              fontSize: 'var(--t-small)',
              color: 'var(--fg-secondary)',
              flexWrap: 'wrap',
            }}>
              <span><span style={{ color: 'var(--vault-amber)' }}>●</span> local-only</span>
              <span>· zero server setup</span>
              <span>· offline</span>
              <span>· MIT-licensed</span>
            </div>
          </div>

          <div>
            <TerminalWindow>
              <div style={{ marginBottom: '12px' }}>
                <span style={{ color: 'var(--fg-tertiary)' }}># register once. encrypted on disk.</span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ color: 'var(--c-success)', fontWeight: 'bold' }}>$</span>
                {' '}vault set <span style={{ color: 'var(--c-info)' }}>OPENAI_API_KEY</span> <span style={{ color: 'var(--fg-tertiary)' }}>"sk-proj-…"</span>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span style={{ color: 'var(--c-success)' }}>✓</span> <span style={{ color: 'var(--fg-tertiary)' }}>"OPENAI_API_KEY" registered in vault.</span>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <span style={{ color: 'var(--fg-tertiary)' }}># inject at runtime — child process only.</span>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span style={{ color: 'var(--c-success)', fontWeight: 'bold' }}>$</span>
                {' '}vault run <span style={{ color: 'var(--fg-tertiary)' }}>--</span> npm start
              </div>

              <div style={{ marginBottom: '12px' }}>
                <span style={{ color: 'var(--fg-tertiary)' }}># anything outside vault run sees nothing.</span>
              </div>
              <div>
                <span style={{ color: 'var(--c-success)', fontWeight: 'bold' }}>$</span>
                {' '}echo <span style={{ color: 'var(--c-info)' }}>$OPENAI_API_KEY</span>
              </div>
              <div>
                <span style={{ color: 'var(--fg-tertiary)' }}>  (empty)</span>
                <span className="cursor"></span>
              </div>
            </TerminalWindow>
          </div>
        </div>
      </section>

      {/* ============== /00 PROBLEM ============== */}
      <section id="problem" style={{
        paddingTop: 'var(--s-16)',
        paddingBottom: 'var(--s-16)',
        background: 'var(--bg-canvas)',
        borderTop: '1px solid var(--border-default)',
      }}>
        <div style={{
          maxWidth: '880px',
          margin: '0 auto',
          padding: '0 var(--s-4)',
        }}>
          <SectionHead
            num="00"
            label="the leak"
            title="Your secrets are everywhere. Every agent run, every log line, every git diff."
          >
            When you develop with AI agents like Claude Code, your real keys flow through a dozen surfaces you don't control. Even when you're careful, secrets leak.
          </SectionHead>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--s-6)',
          }}>
            <ThreatCard num="01" label="Agent reads your .env">
              <span style={{ color: 'var(--fg-tertiary)' }}># .env on disk</span>
              <br />
              <span style={{ color: 'var(--c-info)' }}>OPENAI_API_KEY</span>=<span style={{ color: 'var(--c-danger)' }}>sk-proj-abc123...</span>
              <br />
              <br />
              <span style={{ color: 'var(--fg-tertiary)' }}># agent: read_file('.env')</span>
              <br />
              <span style={{ color: 'var(--vault-amber)' }}>→</span> sees your real API key
            </ThreatCard>

            <ThreatCard num="02" label="Agent reads your logs">
              <span style={{ color: 'var(--fg-tertiary)' }}>// debug.log</span>
              <br />
              console.log(process.env.<span style={{ color: 'var(--c-info)' }}>OPENAI_API_KEY</span>)
              <br />
              <span style={{ color: 'var(--vault-amber)' }}>→</span> <span style={{ color: 'var(--c-danger)' }}>sk-proj-abc123…</span>
            </ThreatCard>

            <ThreatCard num="03" label="Agent reads git history">
              <span style={{ color: 'var(--c-success)', fontWeight: 'bold' }}>$</span> git log --diff-filter=A -- .env
              <br />
              <br />
              <span style={{ color: 'var(--fg-tertiary)' }}># the secret you committed</span>
              <br />
              <span style={{ color: 'var(--fg-tertiary)' }}># three months ago</span>
              <br />
              <span style={{ color: 'var(--vault-amber)' }}>→</span> <span style={{ color: 'var(--c-danger)' }}>sk-proj-abc123…</span>
            </ThreatCard>

            <ThreatCard num="04" label="Vault file stolen from disk">
              <span style={{ color: 'var(--fg-tertiary)' }}>// ~/.secure-vault/vault.encrypted</span>
              <br />
              &#123;<span style={{ color: 'var(--c-info)' }}>"iv"</span>:<span style={{ color: 'var(--fg-tertiary)' }}>"…"</span>,<span style={{ color: 'var(--c-info)' }}>"authTag"</span>:<span style={{ color: 'var(--fg-tertiary)' }}>"…"</span>,
              <br />
              {' '}<span style={{ color: 'var(--c-info)' }}>"data"</span>:<span style={{ color: 'var(--fg-tertiary)' }}>"6f3a9c1e…"</span>&#125;
              <br />
              <span style={{ color: 'var(--vault-amber)' }}>→</span> <span style={{ color: 'var(--c-success)' }}>unreadable without master password</span>
            </ThreatCard>
          </div>
        </div>
      </section>

      {/* ============== /01 COMMANDS ============== */}
      <section id="commands" style={{
        paddingTop: 'var(--s-16)',
        paddingBottom: 'var(--s-16)',
        background: 'var(--bg-canvas)',
        borderTop: '1px solid var(--border-default)',
      }}>
        <div style={{
          maxWidth: '880px',
          margin: '0 auto',
          padding: '0 var(--s-4)',
        }}>
          <SectionHead
            num="01"
            label="the surface"
            title="One binary. Twelve commands. Zero code changes to your app."
          >
            Your code keeps reading process.env.X exactly as before. Vaultenv handles registration, decryption and injection.
          </SectionHead>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--s-5)',
          }}>
            <CommandCard num="/01" title="vault init" desc="Create your encrypted vault. Sets a master password. Runs once per machine." example="vault init" />
            <CommandCard num="/02" title="vault set" desc="Register a secret. Conflict-aware: overwrite, rename, or cancel." example='vault set STRIPE_KEY "sk_…"' />
            <CommandCard num="/03" title="vault list" desc="Names and masked hints only. Real values are never shown." example="vault list" />
            <CommandCard num="/04" title="vault run" desc="Spawn any command with secrets injected as env vars. Child process only." example="vault run -- node app.js" />
            <CommandCard num="/05" title="vault rotate" desc="Replace the value of an existing secret. Type and history preserved." example='vault rotate KEY "new-val"' />
            <CommandCard num="/06" title="vault populate" desc="Bootstrap from .vault-template.json for team onboarding." example="vault populate" />
            <CommandCard num="/07" title="vault lock" desc="Manually clear the session key. New processes lose access immediately." example="vault lock" />
            <CommandCard num="/08" title="vault status" desc="Vault path, lock state, secret count, and last vault run." example="vault status" />
            <CommandCard num="/09" title="vault audit" desc="Local access log. Actions are recorded; values are never logged." example="vault audit --tail 20" />
          </div>
        </div>
      </section>

      {/* ============== /02 HOW IT WORKS ============== */}
      <section id="how" style={{
        paddingTop: 'var(--s-16)',
        paddingBottom: 'var(--s-16)',
        background: 'var(--bg-canvas)',
        borderTop: '1px solid var(--border-default)',
      }}>
        <div style={{
          maxWidth: '880px',
          margin: '0 auto',
          padding: '0 var(--s-4)',
        }}>
          <SectionHead
            num="02"
            label="how it works"
            title="Real keys live in memory, only inside the child process."
          >
            The shell never sees them. The agent context never sees them. They appear, do the work, and vanish when the process exits.
          </SectionHead>

          <div style={{
            padding: 'var(--s-8)',
            background: 'var(--bg-surface)',
            borderRadius: 'var(--r-lg)',
            border: '1px solid var(--border-default)',
            marginBottom: 'var(--s-8)',
          }}>
            <div style={{
              fontSize: 'var(--t-small)',
              fontFamily: 'var(--font-mono)',
              color: 'var(--fg-tertiary)',
              marginBottom: 'var(--s-5)',
            }}>
              / vault run -- node app.js
            </div>
            <h3 style={{
              fontSize: 'var(--t-h3)',
              fontWeight: 'var(--w-semibold)',
              marginBottom: 'var(--s-6)',
              color: 'var(--fg-primary)',
            }}>
              Four steps. <em style={{ fontStyle: 'italic' }}>Zero leaks</em>. The vault file never decrypts to disk.
            </h3>

            <FlowStep
              num="01"
              title="Read master key"
              description="Silently retrieves the session key from the OS Keyring (Keychain on macOS, libsecret on Linux, Credential Manager on Windows)."
            />
            <FlowStep
              num="02"
              title="Decrypt vault"
              description="Opens ~/.secure-vault/vault.encrypted with AES-256-GCM. Secrets stay in process memory, never written to disk."
            />
            <FlowStep
              num="03"
              title="Inject & spawn"
              description="Passes decrypted secrets directly to child process environment. Your app reads process.env exactly as before."
            />
            <FlowStep
              num="04"
              title="Lock on exit"
              description="Child process exits → secrets deallocated from memory. Parent shell has no access. Manually run 'vault lock' to revoke current session."
            />
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer style={{
        borderTop: '1px solid var(--border-default)',
        paddingTop: 'var(--s-12)',
        paddingBottom: 'var(--s-12)',
        background: 'var(--bg-canvas)',
        fontSize: 'var(--t-small)',
      }}>
        <div style={{
          maxWidth: '880px',
          margin: '0 auto',
          padding: '0 var(--s-4)',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--s-8)',
          marginBottom: 'var(--s-6)',
        }}>
          <div>
            <div style={{ fontWeight: 'var(--w-semibold)', marginBottom: 'var(--s-3)' }}>product</div>
            <a href="#" style={{ display: 'block', marginBottom: 'var(--s-2)', color: 'var(--fg-secondary)' }}>GitHub</a>
            <a href="#" style={{ display: 'block', marginBottom: 'var(--s-2)', color: 'var(--fg-secondary)' }}>Docs</a>
            <a href="#" style={{ display: 'block', color: 'var(--fg-secondary)' }}>npm</a>
          </div>
          <div>
            <div style={{ fontWeight: 'var(--w-semibold)', marginBottom: 'var(--s-3)' }}>community</div>
            <a href="#" style={{ display: 'block', marginBottom: 'var(--s-2)', color: 'var(--fg-secondary)' }}>Discord</a>
            <a href="#" style={{ display: 'block', marginBottom: 'var(--s-2)', color: 'var(--fg-secondary)' }}>Twitter</a>
            <a href="#" style={{ display: 'block', color: 'var(--fg-secondary)' }}>Issues</a>
          </div>
          <div>
            <div style={{ fontWeight: 'var(--w-semibold)', marginBottom: 'var(--s-3)' }}>open source</div>
            <a href="https://github.com/ayushrskiaa/vaultenv" style={{ display: 'block', marginBottom: 'var(--s-2)', color: 'var(--fg-secondary)' }}>
              ★ Star vaultenv
            </a>
            <a href="https://github.com/ayushrskiaa" style={{ display: 'block', color: 'var(--fg-secondary)' }}>
              + Follow @ayushrskiaa
            </a>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: 'var(--s-6)',
          textAlign: 'center',
          color: 'var(--fg-tertiary)',
        }}>
          <p>vaultenv © 2026. MIT licensed. Keep your secrets secret.</p>
        </div>
      </footer>
    </>
  );
}
