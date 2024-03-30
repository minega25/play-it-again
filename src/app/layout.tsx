import '../styles/global.css';
import { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import Header from '../components/Header';
import { cn } from '../utils';

export const metadata: Metadata = {
  title: 'Play it again',
  description: 'Play it again',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased container mx-auto px-4',
          fontSans.variable
        )}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
