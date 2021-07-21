export default {
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://unbreak.tech/",
    site_name: "UNBREAK.TECH",
    images: [
      {
        url: "https://unbreak.tech/unbreak_tech_og_image.png",
        width: 1200,
        height: 627,
        alt: "UNBREAK.TECH logo on black background",
      },
    ],
  },
  twitter: {
    handle: "@whitep4nth3r",
    site: "https://unbreak.tech",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "monetization",
      content: "$ilp.uphold.com/J7y7wkRezRYL",
    },
    {
      name: "msapplication-TileColor",
      content: "#000000",
    },
    {
      name: "theme-color",
      content: "#000000",
    },
  ],
  additionalLinkTags: [
    {
      rel: "alternate",
      type: "application/rss+xml",
      title: "RSS Feed for unbreak.tech",
      href: "https://unbreak.tech/feed.xml",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#000000",
    },
    {
      rel: "icon",
      href: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      rel: "icon",
      href: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  ],
};
