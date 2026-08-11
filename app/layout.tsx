import type { ReactNode } from 'react';
import { Space_Grotesk, IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-dracula-bg text-dracula-fg antialiased">
        {children}
      </body>
    </html>
  );
}
