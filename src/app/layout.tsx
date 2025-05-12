'use client'

import './globals.css'
import Sidebar from './components/Sidebar'
import RobotList from './components/RobotList'
import { usePathname } from 'next/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/' // 🔍 경로를 '/' 로 변경

  return (
    <html lang="en" className="light">
      <body className="h-screen w-screen overflow-x-hidden">
        {isLoginPage ? (
          <main className="w-full h-full">{children}</main>
        ) : (
          <div className="flex xl:flex-row flex-col h-full">
            <Sidebar />
            <RobotList />
            <main className="w-full xl:w-3/4 h-full overflow-x-hidden bg-gradient-radial from-blue-950 to-blue-900 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-200">
              {children}
            </main>
          </div>
        )}
      </body>
    </html>
  )
}
