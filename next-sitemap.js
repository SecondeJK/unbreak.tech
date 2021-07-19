module.exports = {
  siteUrl: "https://unbreak.tech",
  generateRobotsTxt: true,
  exclude: ["/submit/success"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/submit/success"],
      },
    ],
  },
};
