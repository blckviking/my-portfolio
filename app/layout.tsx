export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Vikas Vasudevan - Engineer & Product Manager</title>
        <meta name="description" content="Portfolio of Vikas Vasudevan showcasing expertise in product management, launching scalable solution and Engineering." />
        <meta name="keywords" content="Vikas Vasudevan, Lead Product Manager, Roadmap Development, Cross-functional Team Leadership, Agile Methodology" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Vikas Vasudevan" />
        <meta property="og:title" content="Vikas Vasudevan - Portfolio" />
        <meta property="og:description" content="Explore my projects, skills and experience in product development." />
        <meta property="og:url" content="https://www.vikasvasudevan.in" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/coding.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
      </head>
      <body className='text-white'>{children}</body>
    </html>
  )
}



import '../styles/globals.css'