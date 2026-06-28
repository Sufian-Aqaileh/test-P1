import type { Metadata } from "next";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { clinic } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alkarima-clinic.vercel.app"),
  title: {
    default: `${clinic.name} | طب وجراحة الفم والأسنان في كريمة`,
    template: `%s | ${clinic.name}`
  },
  description: "عيادة الكريمة في اربد، الأغوار الشمالية، كريمة. طب الأسنان، جراحة الفم والأسنان، والطب العام مع حجز مواعيد إلكتروني.",
  openGraph: {
    title: clinic.name,
    description: clinic.tagline,
    locale: "ar_JO",
    type: "website"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.name,
    telephone: clinic.phone,
    address: { "@type": "PostalAddress", addressCountry: "JO", addressLocality: clinic.city },
    openingHours: "Sa-Th 09:00-18:00",
    url: "https://alkarima-clinic.vercel.app"
  };

  return (
    <html lang="ar" dir="rtl">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
