import Link from "next/link";
import { FaGithub, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa6";

import { AnimatedLetters } from "@/components/animated-letters";
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
  const name = home.name.toUpperCase();

  return (
    <div className={styles.page}>
      <SiteHeader activePath="/" />

      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="home-heading">
          <p className={styles.eyebrow} aria-label={home.eyebrow}>
            <AnimatedLetters
              text={home.eyebrow}
              letterClassName={styles.eyebrowLetter}
              innerClassName={styles.eyebrowLetterInner}
              animationClassName={styles.letterHop}
              startDelayMs={120}
              stepDelayMs={55}
            />
          </p>

          <h1 id="home-heading" className={styles.name} aria-label={name}>
            <AnimatedLetters
              text={name}
              letterClassName={styles.nameLetter}
              innerClassName={styles.nameLetterInner}
              animationClassName={styles.letterHop}
              startDelayMs={430}
              stepDelayMs={65}
            />
          </h1>

          <p className={styles.description}>
            <span>{home.introduction}</span>
            <span>{home.education}</span>
          </p>

          <div className={styles.actions}>
            <Link href={home.contactHref} className={styles.contactButton}>
              <span className={styles.buttonText}>{home.contactLabel}</span>

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
