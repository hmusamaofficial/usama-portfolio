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
  title: 'Muhammad Usama | QA Engineer',
  description: 'Professional QA Engineer specializing in Manual Testing, ERP Systems, AI-Powered Testing, and Quality Assurance. Expert in ERPX, Agile methodologies, and comprehensive test strategies.',
  keywords: ['QA Engineer', 'Quality Assurance', 'Manual Testing', 'ERP Testing', 'Software Testing', 'Muhammad Usama', 'ERPX', 'AI Testing'],
  authors: [{ name: 'Muhammad Usama' }],
  openGraph: {
    title: 'Muhammad Usama | QA Engineer',
    description: 'Breaking software professionally to make it unbreakable. Expert QA Engineer with deep expertise in ERP systems and AI-powered testing.',
    url: 'https://usama.vercel.app',
    siteName: 'Muhammad Usama Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Usama - QA Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Usama | QA Engineer',
    description: 'Breaking software professionally to make it unbreakable.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
