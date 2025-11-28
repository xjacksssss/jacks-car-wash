import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jacks Car Wash | Professional Car Wash Services in Shepperton',
  description: 'Over 15 years of experience delivering quality car wash services and exceptional customer service in Shepperton and beyond. Get a free quote today!',
  keywords: ['car wash shepperton', 'car detailing', 'vehicle cleaning', 'professional car wash', 'shepperton car services'],
  authors: [{ name: 'Jacks Car Wash' }],
  openGraph: {
    title: 'Jacks Car Wash | Professional Car Wash Services in Shepperton',
    description: 'Over 15 years of experience delivering quality car wash services and exceptional customer service in Shepperton and beyond.',
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
    title: 'Jacks Car Wash | Professional Car Wash Services',
    description: 'Over 15 years of experience delivering quality car wash services in Shepperton.',
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
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
        {/* Google Analytics - Replace with actual GA ID */}
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
      <body className={`${inter.variable} ${poppins.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}