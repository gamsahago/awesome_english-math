import type { Metadata } from 'next'
import { Noto_Sans_KR, Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansKr = Noto_Sans_KR({ 
  subsets: ["latin"],
  variable: '--font-noto-sans-kr',
  weight: ['400', '500', '600', '700', '800'],
})

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist',
})

export const metadata: Metadata = {
  title: '어썸영어수학전문학원 | 양산 물금 English & Math',
  description: '양산 물금 초등·중학생을 위한 맞춤형 English & Math 전문학원. Systematic Curriculum과 1:1 맞춤 지도로 아이들의 잠재력을 키워드립니다.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="bg-background">
      <body className={`${notoSansKr.variable} ${geist.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
