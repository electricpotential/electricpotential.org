import { Navbar } from "@/components/core"
import "./globals.css"

export const metadata = {
  title: "Electric Potential: Gen Z-powered social change",
  description: `Electric Potential (EP) is Gen Z's digital community and information hub for powering social change.`,
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
