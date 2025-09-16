import React from 'react';
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
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
      <body className="bg-zen-olive text-zen-cream overflow-x-hidden">
        <Navbar />
        <div className="relative">
          <PageTransitionLayout>
            {children}
          </PageTransitionLayout>
        </div>
      </body>
    </html>
  );
} 