import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Arbion Business | Crecimiento para clínicas dentales",
    template: "%s | Arbion Business",
  },
  description:
    "Arbion Business ayuda a clínicas dentales a captar más pacientes, automatizar procesos y convertir crecimiento en un sistema predecible.",
  keywords: [
    "marketing para clínicas dentales",
    "captación de pacientes",
    "automatización dental",
    "software para clínicas dentales",
  ],
  openGraph: {
    title: "Arbion Business | Growth para clínicas dentales",
    description:
      "Un sistema de crecimiento diseñado para clínicas dentales que quieren dejar de depender de la improvisación.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
