"use client";

import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname, Link } from "@/i18n/navigation";

export default function Navbar() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const t = useTranslations();

  const switchTo = locale === "en" ? "ar" : "en";

  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/Environment", label: t("environment.title") },
    { href: "/EnviromentalChallenges", label: t("challenges.title") },
    { href: "/ClimateChanges", label: t("climate.title") },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 ${locale == "en" ? "right-0" : "left-0"} z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-row-reverse m-5">
          <button
            onClick={() => setOpen(!open)}
            className="pr-2 pl-2 pt-1 pb-1 rounded-xl hover:brightness-75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="#D4CDC3"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
          <button
            onClick={() => router.replace(pathname, { locale: switchTo })}
            className="bg-white pr-2 pl-2 pt-1 pb-1 border rounded-xl hover:brightness-75"
          >
            {locale === "en" ? "AR" : "EN"}
          </button>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      />
      <div
        className={`fixed top-0  z-40 h-dvh w-64 bg-[#14281D] text-white transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full rtl:translate-x-full"
        }`}
      >
        <div>
          <div className="flex flex-col gap-6 p-10 pt-20">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </div>
          <p className="fixed bottom-0 pb-5 text-[10px] p-4 text-center">
            © 2026 Youssef Tawfik | Mohammed Naguib School. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
