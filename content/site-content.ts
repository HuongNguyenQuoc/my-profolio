export const siteContent = {
  brand: {
    firstLine: "HUONG",
    secondLine: "PORTFOLIO.",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ],

  home: {
    eyebrow: "Hi, I'm",
    name: "Huong",
    introduction:
      "An aspiring software engineer and Information Technology student",
    education:
      "at the Academy of Cryptography Techniques, expected to graduate in 2028.",
    contactLabel: "CONTACT ME",
    contactHref: "/contact",
  },

  socialLinks: [
    {
      label: "GitHub",
      platform: "github",
      href: "https://github.com/HuongNguyenQuoc",
    },
    {
      label: "LinkedIn",
      platform: "linkedin",
      href: "https://www.linkedin.com/in/nqhcodes/",
    },
    {
      label: "YouTube",
      platform: "youtube",
      href: "https://www.youtube.com/@codewithnqh",
    },
    {
      label: "TikTok",
      platform: "tiktok",
      href: "https://www.tiktok.com/@nqhcodes",
    },
  ],
} as const;
