import './globals.css'

export const metadata = {
  title: 'vaultenv — keep secrets off your screen, out of your logs, and away from agents',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'><rect x='3' y='11' width='18' height='12' rx='2.5' fill='%23cc8a14' opacity='0.2' stroke='%23cc8a14' stroke-width='1.8'/><path d='M7.5 11V8a4.5 4.5 0 0 1 9 0v3' stroke='%23cc8a14' stroke-width='1.8' stroke-linecap='round'/><circle cx='12' cy='17' r='1.5' fill='%23cc8a14'/><line x1='12' y1='18.5' x2='12' y2='20.5' stroke='%23cc8a14' stroke-width='1.8' stroke-linecap='round'/></svg>",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
