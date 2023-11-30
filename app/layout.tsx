import { ClerkProvider } from "@clerk/nextjs"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { Poppins } from "next/font/google"

import { ToastProvider } from "@/components/providers/toaster-provider"
import { ConfettiProvider } from "@/components/providers/confetti-provider"

import "./globals.css"

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-poppins",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Digikids KE",
  description:
    "Digikids is the leading educational platform that offers fun and interactive courses for kids to learn coding, robotics, and digital skills. Our courses are designed by experts in child development and technology, and are tailored to engage and inspire young minds. Join our community and give your child the tools to thrive in the digital age.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          <ConfettiProvider />
          <ToastProvider />
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  )
}
