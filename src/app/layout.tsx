import React from 'react';
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { sharedMetadata } from './metadata'
import PageTransitionLayout from '@/components/PageTransitionLayout'

export const metadata: Metadata = {
  ...sharedMetadata,
  icons: {
    icon: [
      {
        url: '/brand/zen-logo.png',
        type: 'image/png',
      },
    ],
    shortcut: '/brand/zen-logo.png',
    apple: '/brand/zen-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Outfit:wght@200;300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black text-film font-sans font-light overflow-x-hidden">
        <Navbar />
        <div className="relative">
          <PageTransitionLayout>
            {children}
          </PageTransitionLayout>
        </div>
        <Footer />
      </body>
    </html>
  );
}