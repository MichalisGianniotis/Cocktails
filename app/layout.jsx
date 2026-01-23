import { Montserrat, Poppins } from 'next/font/google';
import "./globals.css";

const montserrat = Montserrat({
  variable:"--font-montserrat",
  subsets: ['latin'],
  weight: ['700'] 
});
const poppins = Poppins({
  variable:"--font-poppins",
  subsets: ['latin'],
  weight: ['400','600'] 
});

export const metadata = {
  metadataBase: new URL('https://shakermap.vercel.app'),
  title: {
    default: "ShakerMap – Cocktail Recipes",
    template: "%s | ShakerMap",
  },
  description: "Ανακάλυψε εύκολες και γρήγορες συνταγές για cocktails όπως Mojito, Margarita, Daiquiri και άλλα. Ιδανικό για bartenders & λάτρεις των ποτών!",
  keywords: ["cocktails", "συνταγές κοκτέιλ", "mojito", "margarita", "daiquiri", "ρούμι", "λάιμ", "ποτά", "bar", "bartending"],
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
    title: "🍹 Cocktail Recipes | Συνταγές για Mojito & άλλα",
    description: "Δες πώς να φτιάξεις Mojito, Margarita και άλλα αγαπημένα cocktails βήμα-βήμα.",
    url: "https://shakermap.vercel.app/",
    images: ["/cocktails.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    // icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🍹</text></svg>",
    icon: "/favicon.ico",
    // shortcut: "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3E%3Ctext%20y='0.9em'%20font-size='90'%3E%F0%9F%8D%B9%3C/text%3E%3C/svg%3E",
    // apple: "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3E%3Ctext%20y='0.9em'%20font-size='90'%3E%F0%9F%8D%B9%3C/text%3E%3C/svg%3E",
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
        className={`${montserrat.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
