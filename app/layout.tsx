import '../styles/fonts.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Vikas Vasudevan - Engineer & Product Manager</title>
        <meta name="description" content="Portfolio of Gunpreet Singh showcasing expertise in full stack development, cloud solutions, and project management." />
        <meta name="keywords" content="Gunpreet Singh, Full Stack Developer, Tech Lead, Portfolio, Web Development, React.js, Node.js, Next.js" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Gunpreet Singh" />
        <meta property="og:title" content="Gunpreet Singh - Portfolio" />
        <meta property="og:description" content="Explore my projects, skills, and experience in tech development." />
        <meta property="og:url" content="https://www.vikasvasudevan.in" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/coding.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
      </head>
      <body className="font-migra">{children}</body>
    </html>
  )
}



import './globals.css'