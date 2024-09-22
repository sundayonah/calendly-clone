import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
   title: 'Schedular',
   description: 'Meeting ascheduling App.',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <ClerkProvider>
         <html lang="en">
            <body className={inter.className}>
               <Header />
               <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
                  {children}
               </main>
               {/* Footer */}
               <footer className="bg-blue-100 py-12">
                  <div className="container mx-auto px-4 text-center text-gray-600">
                     <p>Made with 💌 by xhunteQ.</p>
                  </div>
               </footer>
            </body>
         </html>
      </ClerkProvider>
   );
}
