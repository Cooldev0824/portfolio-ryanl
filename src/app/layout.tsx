import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Geist_Mono, Inter } from "next/font/google";
import { profile } from "@/content/profile";
import { Nav } from "@/components/layout/Nav";
import { skillGroups } from "@/content/expertise";
import { experience } from "@/content/experience";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

const title = `${profile.name} · ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: title, template: `%s · ${profile.name}` },
  description: profile.description,
  authors: [{ name: profile.name }],
  alternates: { canonical: "/" },
  openGraph: { type: "website", title, description: profile.description, siteName: profile.name },
  twitter: { card: "summary_large_image", title, description: profile.description },
};

export const viewport: Viewport = {
  themeColor: "#0b1424",
  colorScheme: "dark",
};

const sameAs = [profile.links.linkedin.href, profile.links.github.href].filter(Boolean);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: profile.description,
  url: profile.siteUrl,
  image: `${profile.siteUrl}${profile.photo.src}`,
  alumniOf: { "@type": "CollegeOrUniversity", name: profile.education.school },
  hasOccupation: experience.map((r) => ({ "@type": "Role", roleName: r.title, startDate: r.period.slice(0, 4), memberOf: { "@type": "Organization", name: r.company, ...(r.url ? { url: r.url } : {}) } })),
  ...(sameAs.length ? { sameAs } : {}),
  ...(profile.links.email.href ? { email: profile.links.email.href } : {}),
  knowsAbout: skillGroups.flatMap((g) => g.items).slice(0, 30),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable} ${dmSerif.variable}`}
    >
      <head>
        {/* Enables scroll-reveal styles only when JS runs, so content is never hidden without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only z-[100] rounded-md bg-human px-4 py-2 text-sm text-bg focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
