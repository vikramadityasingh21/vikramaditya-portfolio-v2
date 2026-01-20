import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata = {
  title: 'Vikramaditya Singh | AI-First Product Leader',
  description: 'Turning ambiguity into outcomes using AI as a force multiplier. 10+ years building high-impact products from government transformation to enterprise innovation.',
  keywords: 'Product Management, AI Product Leader, Product Strategy, AI Integration, Technical Product Manager, Government Tech, Enterprise Products',
  authors: [{ name: 'Vikramaditya Singh' }],
  creator: 'Vikramaditya Singh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vikramadityasingh.tech',
    title: 'Vikramaditya Singh | AI-First Product Leader',
    description: 'Turning ambiguity into outcomes using AI as a force multiplier',
    siteName: 'Vikramaditya Singh',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vikramaditya Singh | AI-First Product Leader',
    description: 'Turning ambiguity into outcomes using AI as a force multiplier',
  },
};

export default function RootLayout({ children }) {
  // Get analytics IDs from environment variables
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics - only load if ID is provided */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Microsoft Clarity - only load if ID is provided */}
        {CLARITY_ID && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_ID}");
            `}
          </Script>
        )}
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}