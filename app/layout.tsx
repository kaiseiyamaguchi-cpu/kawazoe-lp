import type React from "react"
import type { Metadata, Viewport } from "next"
import { Noto_Sans_JP } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "TSUZUKU - 「続く」を科学した習慣化アプリ",
  description:
    "ランキング機能とコミュニティの力で、あなたの努力を「継続」に変えるアプリです。仲間と競い合い、励まし合うことで、自然と机に向かう習慣が身につきます。",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#22c55e",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
