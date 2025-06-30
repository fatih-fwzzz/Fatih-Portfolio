import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Full Stack Developer',
  description: 'Full Stack Developer specializing in web and mobile development with React, Node.js, and React Native.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-sf">{children}</body>
    </html>
  );
}