const tailwind = require("../tailwind");

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Shawn Hansen - Front End Developer", // Navigation and Site Title
  siteTitleAlt: "Shawn Hansen", // Alternative Site title for SEO
  siteTitleShort: "Shawn", // short_name for manifest
  siteHeadline: "Front end developer", // Headline for schema.org JSONLD
  siteUrl: "https://shawnhansen.dev", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/logo.png", // Used for SEO and manifest
  siteDescription: "Playful & Colorful One-Page website with Parallax effect",
  author: "Shawn Hansen", // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@geekles", // Twitter Username
  ogSiteName: "Shawn Hansen - Front End Developer", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language
  googleAnalyticsID: "UA-377508-13",

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
