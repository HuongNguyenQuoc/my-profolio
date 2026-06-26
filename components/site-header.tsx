import Link from "next/link";
import { FiBriefcase, FiHome, FiMail, FiMonitor, FiUser } from "react-icons/fi";

import { siteContent } from "@/content/site-content";

import styles from "./site-header.module.css";

type SiteHeaderProps = {
  activePath: string;
};

const navigationIcons = {
  "/": FiHome,
  "/about": FiUser,
  "/experience": FiBriefcase,
  "/portfolio": FiMonitor,
  "/contact": FiMail,
} as const;

export function SiteHeader({ activePath }: SiteHeaderProps) {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Main navigation">
        <Link
          href="/"
          className={styles.brand}
          aria-label="Huong Portfolio home"
        >
          <span>{siteContent.brand.firstLine}</span>
          <span>{siteContent.brand.secondLine}</span>
        </Link>

        <div className={styles.navigation}>
          {siteContent.navigation.map((item) => {
            const Icon = navigationIcons[item.href];
            const isActive = item.href === activePath;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={styles.navigationLink}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                title={item.label}
              >
                <Icon aria-hidden="true" />
              </Link>
            );
          })}
        </div>

        <div className={styles.headerSpacer} aria-hidden="true" />
      </nav>
    </header>
  );
}
