'use client'

import { Inter } from 'next/font/google'
import './globals.css'

import Sidebar from './components/Sidebar';
import RobotList from './components/RobotList';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className="light">
      <body className='h-screen w-screen overflow-x-hidden'>
        <div className="flex h-full">
          <Sidebar />
          <RobotList />
          <main className='w-4/6 h-full overflow-x-hidden bg-green-200 scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-green-200'>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
