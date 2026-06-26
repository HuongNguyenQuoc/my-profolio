import Link from "next/link";
import { FaGithub, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa6";

import { SiteHeader } from "@/components/site-header";
import { siteContent } from "@/content/site-content";

import styles from "./page.module.css";

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
  tiktok: FaTiktok,
} as const;

export default function HomePage() {
  const { home, socialLinks } = siteContent;

  return (
    <div className={styles.page}>
      <SiteHeader activePath="/" />

      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="home-heading">
          <p className={styles.eyebrow}>{home.eyebrow}</p>

          <h1
            id="home-heading"
            className={styles.nameFrame}
            data-text={home.name.toUpperCase()}
          >
            {home.name.toUpperCase()}
          </h1>

          <p className={styles.description}>
            <span>{home.introduction}</span>
            <span>{home.education}</span>
          </p>

          <div className={styles.actions}>
            <Link href={home.contactHref} className={styles.contactButton}>
              {home.contactLabel}

              <span className={styles.buttonArrow} aria-hidden="true">
                ↗
              </span>
            </Link>

            <div className={styles.socialLinks} aria-label="Social media links">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.platform];

                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    className={styles.socialLink}
                    data-platform={social.platform}
                    aria-label={social.label}
                    title={social.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
