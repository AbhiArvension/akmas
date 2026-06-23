"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap, Sun, Moon, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "courses", href: "/courses" },
  { key: "contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-md py-3 border-b border-gray-100 dark:border-zinc-800"
          : "bg-navy-900/80 dark:bg-zinc-950/80 backdrop-blur-sm py-5 text-white"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 lg:space-x-3 shrink-0 min-w-0 mr-4">
            <div className={cn("p-2 rounded-full transition-colors shrink-0", scrolled ? "bg-navy-800 dark:bg-gold-500 text-white dark:text-zinc-950" : "bg-gold-500 text-navy-950")}>
              <GraduationCap className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            {/* Desktop Title */}
            <div className="hidden lg:block truncate">
              <h1 className={cn("text-base xl:text-lg font-bold leading-none tracking-tight truncate", scrolled ? "text-navy-950 dark:text-white" : "text-white")}>
                {t("collegeName")}
              </h1>
              <p className={cn("text-[10px] xl:text-xs font-medium uppercase tracking-wider mt-1 truncate", scrolled ? "text-navy-600 dark:text-gray-400" : "text-gray-300")}>
                {language === "en" ? (
                  <>Educate · Excellent · <span className="text-gold-500 font-bold">Empower</span></>
                ) : (
                  <>വിദ്യ · മികവ് · <span className="text-gold-500 font-bold">ശക്തി</span></>
                )}
              </p>
            </div>
            {/* Mobile Title */}
            <div className="lg:hidden truncate">
              <h1 className={cn("text-sm sm:text-base font-bold leading-none truncate", scrolled ? "text-navy-950 dark:text-white" : "text-white")}>
                {t("collegeNameShort")}
              </h1>
            </div>
          </Link>

          {/* Controls & Nav */}
          <div className="flex items-center space-x-1 sm:space-x-3 xl:space-x-6 shrink-0">
            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center space-x-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold transition-colors hover:text-gold-500",
                    pathname === link.href
                      ? "text-gold-500"
                      : scrolled
                      ? "text-navy-950 dark:text-gray-200"
                      : "text-gray-200"
                  )}
                >
                  {t(link.key)}
                </Link>
              ))}
            </nav>

            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === "en" ? "ml" : "en")}
              className={cn(
                "flex items-center space-x-1 px-2 py-1.5 sm:px-3 rounded-full text-xs font-bold border transition-all shrink-0",
                scrolled
                  ? "border-navy-200 dark:border-zinc-800 text-navy-950 dark:text-white hover:bg-navy-50 dark:hover:bg-zinc-800"
                  : "border-white/20 text-white hover:bg-white/10"
              )}
            >
              <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline-block">{language === "en" ? "മലയാളം" : "English"}</span>
              <span className="sm:hidden">{language === "en" ? "മ" : "EN"}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={cn(
                "p-2 rounded-full transition-all shrink-0",
                scrolled
                  ? "text-navy-950 dark:text-white hover:bg-navy-50 dark:hover:bg-zinc-800"
                  : "text-white hover:bg-white/10"
              )}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className={cn("xl:hidden p-2 rounded-md shrink-0", scrolled ? "text-navy-950 dark:text-white" : "text-white")}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white dark:bg-zinc-950 shadow-xl overflow-hidden border-t border-gray-100 dark:border-zinc-800"
          >
            <nav className="flex flex-col px-4 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium p-2 rounded-lg transition-colors",
                    pathname === link.href
                      ? "bg-navy-50 dark:bg-zinc-900 text-navy-950 dark:text-gold-500"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800 hover:text-navy-950 dark:hover:text-white"
                  )}
                >
                  {t(link.key)}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 dark:border-zinc-800">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-gold-500 text-navy-950 px-5 py-3 rounded-xl text-base font-bold shadow-sm"
                >
                  {t("admissions")}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}