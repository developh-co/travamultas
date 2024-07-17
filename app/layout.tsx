import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trava Multas ✋ - Contestação de Multas de Trânsito',
  description:
    'Simplificamos a contestação de multas de trânsito para si. Aceda ao nosso site e descubra como evitar penalizações injustas de forma rápida e eficaz.',
  openGraph: {
    title: 'Trava Multas ✋ - Contestação de Multas de Trânsito',
    description:
      'Simplificamos a contestação de multas de trânsito para si. Aceda ao nosso site e descubra como evitar penalizações injustas de forma rápida e eficaz.',
    url: 'https://www.travamultas.com/',
    siteName: 'Trava Multas ✋ - Contestação de Multas de Trânsito',
    locale: 'pt-PT',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trava Multas ✋ - Contestação de Multas de Trânsito',
    description:
      'Simplificamos a contestação de multas de trânsito para si. Aceda ao nosso site e descubra como evitar penalizações injustas de forma rápida e eficaz.'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
