import type {Metadata} from 'next';
import './globals.css';
import { Poppins as FontSans } from "next/font/google"
 
const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Adarsh Raj Gautam | Software Engineer',
  description: "Adarsh Raj Gautam's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`min-h-screen bg-background font-sans antialiased ${fontSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
