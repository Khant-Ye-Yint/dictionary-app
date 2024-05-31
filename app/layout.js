'use client';

import { Roboto_Mono } from 'next/font/google';
import './globals.css';

const roboto = Roboto_Mono({ subsets: ['latin'] });

import NavBar from './components/NavBar';
import { useThemeStore } from '@/store/theme';

export default function RootLayout({ children }) {
  const isDark = useThemeStore((state) => state.dark);

  return (
    <html lang="en" className={isDark ? 'dark' : ''}>
      <body className={`${roboto.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
