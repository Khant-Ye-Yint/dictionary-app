'use client';

import { Roboto_Mono } from 'next/font/google';
import './globals.css';

const roboto = Roboto_Mono({ subsets: ['latin'] });

import NavBar from './components/NavBar';
// import { useThemeStore } from '@/store/theme';
import Cookies from 'js-cookie';

export default function RootLayout({ children }) {
  // const isDark = useThemeStore((state) => state.dark);
  console.log(Cookies.get('theme'));

  return (
    <html lang="en" className={Cookies.get('theme') === 'light' ? '' : 'dark'}>
      <body className={`${roboto.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
