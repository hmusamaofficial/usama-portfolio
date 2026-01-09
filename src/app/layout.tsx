import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const firaCode = Fira_Code({ 
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Muhammad Usama | QA Engineer & ERP Testing Specialist',
    template: '%s | Muhammad Usama',
  },
  description: 'Professional QA Engineer specializing in Manual Testing, ERP Systems (ERPX), AI-Powered Testing, and Quality Assurance. 500+ bugs found, 10+ ERP modules tested. Hire me for quality excellence.',
  keywords: ['QA Engineer', 'Quality Assurance', 'Manual Testing', 'ERP Testing', 'Software Testing', 'Muhammad Usama', 'ERPX', 'AI Testing', 'Freelance QA', 'Pakistan', 'Remote QA Engineer', 'Bug Testing', 'Test Case Design'],
  authors: [{ name: 'Muhammad Usama', url: 'https://hmusama.vercel.app' }],
  creator: 'Muhammad Usama',
  publisher: 'Muhammad Usama',
  metadataBase: new URL('https://hmusama.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Muhammad Usama | QA Engineer & ERP Testing Specialist',
    description: 'Breaking software professionally to make it unbreakable. Expert QA Engineer with deep expertise in ERP systems, AI-powered testing, and 500+ bugs found.',
    url: 'https://hmusama.vercel.app',
    siteName: 'Muhammad Usama - QA Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Usama - QA Engineer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Usama | QA Engineer',
    description: 'Breaking software professionally to make it unbreakable. Expert in ERP Testing & AI-Powered QA.',
    images: ['/og-image.png'],
    creator: '@hmusamaofficial',
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
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FF6B6B" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
