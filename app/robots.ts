import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/_next/", "/scripts/"],
    },
    sitemap: "https://nishant-portfolio.vercel.app/sitemap.xml",
  }
}
