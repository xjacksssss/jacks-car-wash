import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jacks Car Wash - Reliable Trade Services in Shepperton',
  description: 'Over 15 years of experience serving the Shepperton community. Fully licensed and insured professionals committed to quality workmanship and customer satisfaction.',
  keywords: ['trade services shepperton', 'reliable trade services', 'local trade professionals', 'shepperton home services', 'shepperton property maintenance'],
  authors: [{ name: 'Jacks Car Wash' }],
  openGraph: {
    title: 'Jacks Car Wash - Reliable Trade Services in Shepperton',
    description: 'Over 15 years of experience serving the Shepperton community. Fully licensed and insured professionals.',
    url: 'https://jackscarwash.com',
    siteName: 'Jacks Car Wash',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jacks Car Wash',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jacks Car Wash - Reliable Trade Services in Shepperton',
    description: 'Over 15 years of experience serving the Shepperton community.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics - Replace GA_MEASUREMENT_ID with your actual ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${roboto.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}