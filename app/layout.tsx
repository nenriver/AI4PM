import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI4PM - A Day in the Life of a Product Manager',
  description: 'Discover how AI tools can support every step of a Product Manager\'s day',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
