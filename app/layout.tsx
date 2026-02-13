import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ResponsiveProvider } from '@/components/ui/Responsive';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Muhammad Ubaid Raza - AI & Web3 Developer',
  description: 'Portfolio of Muhammad Ubaid Raza - Hafiz, Alim & Software Engineer',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ResponsiveProvider>
          <div id="cursor-dot" className="cursor-dot"></div>
          <div id="cursor-outline" className="cursor-outline"></div>
          {children}
        </ResponsiveProvider>
      </body>
    </html>
  );
}