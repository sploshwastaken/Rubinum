import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { i18n, type Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rubinum.com"),
  title: {
    default: "Rubinum | Digital Solutions & Neural Infrastructure",
    template: "%s | Rubinum",
  },
  description: "Rubinum is a collective of engineers and strategists building the digital infrastructure of tomorrow. We specialize in Next.js, AI, and high-performance web systems.",
  keywords: ["Rubinum", "Digital Solutions", "Web Development", "AI", "Next.js", "React", "Software Engineering", "Neural Infrastructure", "Tech Agency"],
  authors: [{ name: "Rubinum Team" }],
  creator: "Rubinum",
  publisher: "Rubinum",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rubinum.com",
    title: "Rubinum | Digital Solutions & Neural Infrastructure",
    description: "Architecting the future of digital transformation with precision engineering and visionary thinking.",
    siteName: "Rubinum",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rubinum Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rubinum | Digital Solutions",
    description: "Architecting the future of digital transformation.",
    images: ["/og-image.jpg"],
    creator: "@rubinum",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rubinum",
              url: "https://rubinum.com",
              logo: "https://rubinum.com/logo.png",
              sameAs: [
                "https://twitter.com/rubinum",
                "https://linkedin.com/company/rubinum",
                "https://github.com/rubinum"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service"
              }
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Navbar lang={lang} dict={dict} />
        <div className="relative z-10 mb-0 md:mb-125 shadow-2xl rounded-b-3xl bg-background">
          <main className="min-h-screen relative">
            {children}
          </main>
        </div>
        <Footer lang={lang} dict={dict} />
        <ScrollToTop />
      </body>
    </html>
  );
}
