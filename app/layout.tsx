import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: "Schwartz Cosmetics | שוורץ קוסמטיקה",
  description: "Dead Sea Products & Luxurious Cosmetics | מוצרי ים המלח וקוסמטיקה איכותית",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${heebo.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
