"use client";

import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const majors = t("majors") || [];
  
  return (
    <footer className="bg-navy-900 dark:bg-zinc-950 text-white pt-16 pb-8 border-t border-navy-800 dark:border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="p-2 bg-gold-500 rounded-full text-navy-950 shrink-0">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold tracking-tight leading-tight">{t("collegeName")}</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("established")}. {t("affiliation")}.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              {t("quickLinks")}
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gold-500"></span>
            </h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-gold-500 transition-colors">{t("about")}</Link></li>
              <li><Link href="/courses" className="text-gray-400 hover:text-gold-500 transition-colors">{t("courses")}</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-gold-500 transition-colors">{t("contact")}</Link></li>
              <li><Link href="/contact" className="text-gold-500 hover:text-gold-400 transition-colors font-bold">{t("admissions")}</Link></li>
            </ul>
          </div>

          {/* Majors */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              {t("majorDisciplines")}
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gold-500"></span>
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {majors.map((major: { name: string }, i: number) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                  <span>{major.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              {t("getInTouch")}
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gold-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-sm">{t("location")}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5 text-gold-500 shrink-0" />
                <span className="text-sm">8606144316 / 9539042693</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5 text-gold-500 shrink-0" />
                <span className="text-sm">{t("email")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-navy-800 dark:border-zinc-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {t("collegeName")}. {t("tagline")}.</p>
        </div>
      </div>
    </footer>
  );
}