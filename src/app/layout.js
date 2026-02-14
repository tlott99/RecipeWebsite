import { authClient } from '@/lib/auth/client'; 
import { NeonAuthUIProvider, UserButton } from '@neondatabase/auth/react'; 
import Header from '@/Components/partials/Header';
import Footer from '@/Components/partials/Footer';
import "./globals.css"; // Ensure Tailwind is imported here

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-white text-gray-900">
        <NeonAuthUIProvider
          authClient={authClient} 
          redirectTo="/account/settings"
          emailOTP
        >
        <Header />
        
        {/* Main content area with your 6-column grid */}
        <main className="grid flex-1 grid-cols-6 content-start">
          {/* 'children' is where page.js content will be injected */}
          <div className="col-start-2 col-span-4"> 
            {children}
          </div>
        </main>

        <Footer />
        </NeonAuthUIProvider>
      </body>
    </html>
  );
}