import '../styles/fonts.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-migra">{children}</body>
    </html>
  )
}



import './globals.css'