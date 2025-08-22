import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700", "900"], // Including all weights for flexibility
})

export const metadata: Metadata = {
  title: {
    default: "Nishant Srivastava - Software Developer Portfolio",
    template: "%s | Nishant Srivastava",
  },
  description:
    "Aspiring Software Developer with expertise in Full-Stack Development, Data Structures & Algorithms, AI/ML, and modern web technologies. Explore my projects, skills, and achievements.",
  keywords: [
    "Nishant Srivastava",
    "Software Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Python Developer",
    "AI/ML Engineer",
    "Data Structures",
    "Algorithms",
    "LeetCode",
    "Portfolio",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "Gorakhpur",
    "Uttar Pradesh",
    "India",
    "Computer Science",
    "Software Engineering",
  ],
  authors: [{ name: "Nishant Srivastava", url: "https://nishant-portfolio.vercel.app" }],
  creator: "Nishant Srivastava",
  publisher: "Nishant Srivastava",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nishant-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nishant-portfolio.vercel.app",
    title: "Nishant Srivastava - Software Developer Portfolio",
    description:
      "Aspiring Software Developer with expertise in Full-Stack Development, Data Structures & Algorithms, AI/ML, and modern web technologies. Explore my projects, skills, and achievements.",
    siteName: "Nishant Srivastava Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nishant Srivastava - Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishant Srivastava - Software Developer Portfolio",
    description:
      "Aspiring Software Developer with expertise in Full-Stack Development, Data Structures & Algorithms, AI/ML, and modern web technologies.",
    images: ["/og-image.png"],
    creator: "@nishant_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nishant Srivastava",
              url: "https://nishant-portfolio.vercel.app",
              image: "https://nishant-portfolio.vercel.app/professional-developer-headshot.png",
              sameAs: ["https://linkedin.com/in/nishant-srivastava", "https://github.com/nishant-srivastava"],
              jobTitle: "Software Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              alumniOf: {
                "@type": "Organization",
                name: "Pranveer Singh Institute of Technology",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Kanpur",
                  addressRegion: "Uttar Pradesh",
                  addressCountry: "India",
                },
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Gorakhpur",
                addressRegion: "Uttar Pradesh",
                addressCountry: "India",
              },
              email: "nishantgenius03@gmail.com",
              telephone: "+91-8423233242",
              knowsAbout: [
                "JavaScript",
                "Python",
                "React.js",
                "Node.js",
                "Data Structures",
                "Algorithms",
                "Machine Learning",
                "Artificial Intelligence",
                "Full Stack Development",
                "Web Development",
              ],
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "AWS Cloud Practitioner Essentials",
                  credentialCategory: "Certification",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "Amazon Web Services",
                  },
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "Python Gold Badge",
                  credentialCategory: "Badge",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "HackerRank",
                  },
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "Agentblazer Champion 2025",
                  credentialCategory: "Recognition",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "Salesforce",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
