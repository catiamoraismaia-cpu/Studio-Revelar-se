import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-heading",
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Studio Revelar-se | Estúdio de Dança Premium",
  description: "Studio Revelar-se - Studio de Dança Premium. Conecte-se com sua elegância, energia e emoção através do movimento. Aulas para jovens e adultos.",
  metadataBase: new URL("https://studiorevelarse.com.br"),
  openGraph: {
    title: "Studio Revelar-se | Estúdio de Dança Premium",
    description: "Desperte sua essência. Revele seu movimento. Um estúdio de dança premium criado para você se desconectar do caos diário, expressar seus sentimentos e resgatar a elegância.",
    url: "https://studiorevelarse.com.br",
    siteName: "Studio Revelar-se",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Studio Revelar-se",
  "image": "https://studiorevelarse.com.br/assets/hero_dance.webp",
  "@id": "https://studiorevelarse.com.br/#inicio",
  "url": "https://studiorevelarse.com.br",
  "telephone": "+5511997755082",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Tertulina de Souza 147",
    "addressLocality": "Parque Jandaia",
    "addressRegion": "Carapicuíba",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.5355,
    "longitude": -46.8354
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "22:00"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg-dark text-white font-body antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
