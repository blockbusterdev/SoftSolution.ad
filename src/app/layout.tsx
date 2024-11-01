import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/assets/scss/style.scss"
import Providers from "./providers"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IWDL - Software solution",
  description: "International software company",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en">
    <body className={inter.className}>
      <Providers>
        {children}
      </Providers>
    </body>
  </html>
}
