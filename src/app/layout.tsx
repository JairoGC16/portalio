import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Jairo Gonzalez | Portafolio Profesional de Desarrollador Web",
  description:
    "Portafolio profesional de Jairo Gonzalez, desarrollador web especializado en Next.js, TypeScript, Tailwind CSS, UI/UX y animaciones modernas.",
  keywords: [
    "portafolio",
    "desarrollador web",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "UI/UX",
    "SEO",
    "motion.dev",
    "shadcn/ui",
  ],
  authors: [{ name: "Jairo Gonzalez" }],
  openGraph: {
    title: "Jairo Gonzalez | Portafolio Profesional de Desarrollador Web",
    description:
      "Portafolio profesional de Jairo Gonzalez, desarrollador web especializado en Next.js, TypeScript, Tailwind CSS, UI/UX y animaciones modernas.",
    url: "https://tusitio.com",
    siteName: "Jairo Gonzalez Portafolio",
    images: [
      {
        url: "https://res.cloudinary.com/dnbftqck9/image/upload/v1755276785/IMG-20250328-WA0115_gchnjt.jpg",
        width: 400,
        height: 400,
        alt: "Foto de Jairo Gonzalez",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          src="https://www.google.com/recaptcha/enterprise.js"
          async
          defer
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
