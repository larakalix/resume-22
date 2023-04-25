/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import clsx from "clsx";
import { links } from "../../data/data";
import { Brand } from "./Brand";
import { ThemeSelector } from "./ThemeSelector";
import { HeaderLink } from "./sibblings/HeaderLink";

import styles from "./styles/Nav.module.css";

export const Header = () => {
  const [hide, setHide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollTop = () => {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined")
      if (window.scrollY > 100) setHide(true);
      else setHide(false);

    if (window.scrollY < lastScrollY) setHide(false);

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY]);

  const topBarStyles = clsx({
    ["bg-[rgb(255, 255, 255, .85)] backdrop-blur-sm py-4"]: lastScrollY > 100,
  });

  return (
    <div
      className={`w-full sticky top-0 ${
        hide ? "opacity-0" : "opacity-100"
      } transition-all ${topBarStyles} px-8 py-8 z-10`}
    >
      <nav id="nav" className={styles.nav}>
        <Brand className={styles.nav__logo} />

        <ul className={styles.nav__links}>
          {links.map(({ label, ...props }) => (
            <HeaderLink key={label} {...{ label, ...props }} />
          ))}
          <li className="hidden md:block">
            <ThemeSelector />
          </li>
        </ul>

        <div className="flex justify-end flex-row-reverse md:flex-row">
          <a
            href="#nav"
            onClick={() => scrollTop()}
            className={styles.nav__burger}
          >
            <HiMenuAlt3 className={styles.nav__icon} />
          </a>

          <a href="#" onClick={() => scrollTop()} className={styles.nav__close}>
            <HiX className={styles.nav__icon} />
          </a>

          <div className="block md:hidden">
            <ThemeSelector />
          </div>
        </div>
      </nav>
    </div>
  );
};
