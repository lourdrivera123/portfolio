import { Head, Html, Main, NextScript } from 'next/document'

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en" suppressHydrationWarning>
      <Head>
        <meta
          name="title"
          content="Zem - Full Stack Developer/Software Engineer "
        />
        <meta
          name="description"
          content="I'm Zem, full stack developer/software engineer. I left my home @ 21 (🇮🇳-🇨🇦) to become Independent. I am on my journey to exploring the world of Softwares and AI."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zemiel.vercel.app/home" />
        <meta
          property="og:title"
          content="Zem - Full Stack Developer/Software Engineer "
        />
        <meta
          property="og:description"
          content="I'm Zem, full stack developer/software engineer. I left my home @ 21 (🇮🇳-🇨🇦) to become Independent. I am on my journey to exploring the world of Softwares and AI."
        />
        <meta
          property="og:image"
          content="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/Screenshot%202024-07-19%20at%202.36.33%E2%80%AFAM.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://zemiel.vercel.app/home" />
        <meta
          property="twitter:title"
          content="Zem - Full Stack Developer/Software Engineer "
        />
        <meta
          property="twitter:description"
          content="I'm Zem, full stack developer/software engineer. I left my home @ 21 (🇮🇳-🇨🇦) to become Independent. I am on my journey to exploring the world of Softwares and AI."
        />
        <meta
          property="twitter:image"
          content="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/Screenshot%202024-07-19%20at%202.36.33%E2%80%AFAM.png"
        />

        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`}
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`}
        />
        
        {/* Prefetch tsparticles dependencies for better performance */}
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/@tsparticles/slim@3.9.1/tsparticles.slim.min.js" as="script" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
      </Head>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
