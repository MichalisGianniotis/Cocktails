import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://shakermap.vercel.app'),
  title: {
    default: "ShakerMap | Cocktail Recipes",
    template: "%s | ShakerMap",
  },
  description: "Ανακάλυψε εύκολες και γρήγορες συνταγές για cocktails όπως Mojito, Margarita, Daiquiri και άλλα. Ιδανικό για bartenders & λάτρεις των ποτών!",
  keywords: [
    "cocktails", 
    "συνταγές κοκτέιλ", 
    "mojito", 
    "margarita", 
    "daiquiri", 
    "ρούμι", 
    "λάιμ", 
    "ποτά", 
    "bar", 
    "bartending"],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://shakermap.vercel.app/",
  },
  verification: {
    google: 'qZFCnauU7LTRbNyPupI8ZzCluUF4AVpjNiULySKtACQ', // Κωδικός επαλήθευσης της Google
  },
  openGraph: {
    siteName: "ShakerMap",
    title: "Cocktail Recipes | Συνταγές για Mojito & άλλα",
    description: "Δες πώς να φτιάξεις Mojito, Margarita και άλλα αγαπημένα cocktails βήμα-βήμα.",
    url: "https://shakermap.vercel.app/",
    images: ["/cocktails.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon-32x32.ico",
  },
  // manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "name": "ShakerMap",
                  "url": "https://shakermap.vercel.app",
                  "logo": "https://shakermap.vercel.app/cocktails.png",
                },
                {
                  "@type": "WebSite",
                  "name": "ShakerMap",
                  "url": "https://shakermap.vercel.app",
                  "publisher": {
                    "@id": "https://shakermap.vercel.app/#organization"
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
