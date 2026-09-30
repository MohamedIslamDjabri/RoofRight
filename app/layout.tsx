import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileCTA from '@/components/layout/MobileCTA';
import AIAssistantModal from '@/components/ai/AIAssistantModal';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'RoofRight Exteriors | Roofing, Gutters & Siding',
  description: 'Roofing, gutters, and siding from one master exterior team in Austin & Central Texas. GAF Master Elite & James Hardie certified craftsmanship with 50-year non-prorated warranties.',
  openGraph: {
    title: 'RoofRight Exteriors | Roofing, Gutters & Siding',
    description: 'One company. Complete exterior protection. Residential roofing, seamless gutters, and architectural fiber cement siding.',
    type: 'website',
    url: 'https://roofrightexteriors.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RoofRight Exteriors | Roofing, Gutters & Siding',
    description: 'Protect your home from the top down. Single-point contractor reliability for roofing, gutters, and siding.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body
        className="bg-background text-on-surface antialiased min-h-screen flex flex-col pb-16 lg:pb-0 font-body-md text-body-md"
        suppressHydrationWarning
      >
        <Header />
        <main className="w-full pt-20 flex-1">{children}</main>
        <Footer />
        <MobileCTA />
        <AIAssistantModal />
      </body>
    </html>
  );
}
