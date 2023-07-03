import { Navbar } from "@/components/core"
import "./globals.css"

export const metadata = {
  title: "Electric Potential",
  description: "",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
