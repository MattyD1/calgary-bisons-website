import "@/styles/globals.css"
import {
  Arvo,
  Montserrat as FontSans,
  Open_Sans as Heading,
} from "next/font/google"
import {
  GlobalSiteDocument,
  GlobalSiteQuery,
} from "@/src/libs/graphql/generated"
import { request } from "@/src/libs/request"
import { renderMetaTags } from "react-datocms/seo"

import { tw } from "@/libs/utils"
import { Analytics } from "@/components/analytics"
import { TailwindColors } from "@/components/tailwind-colors"
import { TailwindIndicator } from "@/components/tailwind-indicator"

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" })
const heading = Heading({ subsets: ["latin"], variable: "--font-heading" })
const arvo = Arvo({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-arvo",
})

interface IRootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: IRootLayoutProps) {
  const site: GlobalSiteQuery = await request(GlobalSiteDocument)

  return (
    <html lang="en" suppressHydrationWarning>
      {renderMetaTags(site._site.faviconMetaTags)}
      <body
        className={tw(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          heading.variable,
          arvo.variable
        )}
        suppressHydrationWarning={true}
      >
        {children}
        <Analytics />
        <TailwindIndicator />
        <TailwindColors />
      </body>
    </html>
  )
}
