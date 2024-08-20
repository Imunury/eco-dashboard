'use client'

import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';
import './globals.css'

import Sidebar from './components/Sidebar';
import RobotList from './components/RobotList';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // 로컬 스토리지에서 테마 설정을 가져오기
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.classList.add(initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <html lang="en" className={theme}>
      <body className='h-screen w-screen overflow-x-hidden'>
        <div className="flex h-full">
          <Sidebar toggleTheme={toggleTheme} theme={theme} />
          <RobotList />
          <main className='w-4/6 h-full overflow-x-hidden'>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
