import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { ThemeProvider } from "./context/themecontext";

const promptFont = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ฝ่ายประมวลและวิเคราะห์สถานการณ์น้ำ",
  description: "ระบบบริหารจัดการน้ำของกรมชลประทาน",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
<html lang="th">
<body className={`${promptFont.variable} dark:bg-black dark:text-white antialiased`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
