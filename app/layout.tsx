import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import SmoothNavbar from "@/components/navbar/smooth-navbar";
import CursorGradient from "@/components/CursorGradient";
import Footer from "@/components/footer/footer";
import ScrollProgress from "@/components/ui/scroll-progress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohan Gautam - MCA Student | Aspiring Software Developer",
  description:
    "Portfolio of Rohan Gautam - MCA Student at CHRIST University. Showcasing expertise in Machine Learning, Deep Learning, Python, React.js, Next.js, and Full-Stack Development.",
  keywords: [
    "Rohan Gautam",
    "Software Developer",
    "MCA Student", 
    "Machine Learning",
    "Deep Learning",
    "Python",
    "React.js",
    "Next.js",
    "CHRIST University",
    "AI Resume Analyzer",
    "Portfolio"
  ],
  authors: [{ name: "Rohan Gautam" }],
  openGraph: {
    title: "Rohan Gautam - MCA Student | Aspiring Software Developer",
    description: "Turning ideas into impactful digital solutions. Portfolio showcasing AI/ML projects and full-stack development skills.",
    url: "https://rohan-gautam-portfolio.vercel.app",
    siteName: "Rohan Gautam Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohan Gautam - MCA Student | Aspiring Software Developer",
    description: "Turning ideas into impactful digital solutions. Portfolio showcasing AI/ML projects and full-stack development skills.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <CursorGradient
            size="w-[600px] h-[600px]"
            smoothing={0.08}
            colors={{
              light: {
                primary: "rgba(59, 130, 246, 0.05)",
                secondary: "rgba(147, 51, 234, 0.03)",
              },
              dark: {
                primary: "rgba(59, 130, 246, 0.08)",
                secondary: "rgba(147, 51, 234, 0.05)",
              },
            }}
          />
          <SmoothNavbar />
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-base space-y-4 z-10 pt-20">
            <div className="sm:mx-10">
              {/* <Meteors number={30}/> */}
              {children}
            </div>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
