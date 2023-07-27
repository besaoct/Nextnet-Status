import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import NetworkStatus from './components/NetworkStatus'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nextnet Status',
  description: 'Detect realtime network status in your react/nextjs app',
  viewport:'width=device-width, initial-scale=1.0'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body className={`${inter.className} bg-gray-950 flex w-full h-full`}
      >
        <NetworkStatus/>
        {children}
      </body>
    </html>
  )
}
