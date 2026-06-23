"use client";

import Image from "next/image";
import { Target, ShieldCheck, Award, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  const highlights = t("highlights") || [];

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-navy-900 dark:bg-zinc-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 relative">
              <Image src="/images/logo.png" alt="AKMAS College Logo" fill className="object-contain" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("about")}</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t("aboutSubtitle")}</p>
        </div>
      </section>

      {/* College History & Vision */}
      <section className="py-24 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 text-gold-600 dark:text-gold-500 font-bold tracking-widest uppercase text-sm">
                <div className="w-8 h-px bg-gold-600 dark:bg-gold-500"></div>
                <span>{t("ourLegacy")}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white leading-tight">
                {t("collegeName")}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Established in 2015, Ayyankali Memorial Arts &amp; Science College is a Government Aided institution affiliated to the University of Kerala and managed by the Ayyankali Cultural Trust.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Named after the legendary social reformer Mahatma Ayyankali, the college carries forward his timeless belief that education is the foundation of a just and progressive society — welcoming every student equally, regardless of background.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-gold-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy-900 dark:text-white">Vision</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">To be a center of academic excellence that nurtures every student to reach their fullest potential.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="h-6 w-6 text-gold-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy-900 dark:text-white">Mission</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Providing quality education to every student, nurturing talent and building futures together.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/campus3.jpg"
                  alt="College Building"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="py-24 bg-navy-50 dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 text-gold-600 dark:text-gold-500 font-bold tracking-widest uppercase text-sm mb-4">
              <div className="w-8 h-px bg-gold-600 dark:bg-gold-500"></div>
              <span>{t("chairmanDeskTitle")}</span>
              <div className="w-8 h-px bg-gold-600 dark:bg-gold-500"></div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 max-w-5xl mx-auto">
            <div className="shrink-0 flex flex-col items-center space-y-4">
              <div className="relative w-48 h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-gold-500">
                <Image
                  src="/images/chairman.jpg"
                  alt="Chairman"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="text-center">
                <p className="font-bold text-navy-900 dark:text-white text-lg">Punnala Sreekumar</p>
                <p className="text-gold-600 dark:text-gold-500 text-sm font-medium">Chairman, Ayyankali Cultural Trust</p>
              </div>
            </div>
            <div className="relative bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-zinc-800">
              <Quote className="h-10 w-10 text-gold-200 dark:text-gold-900 absolute top-6 left-6" />
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg relative z-10 pt-4">
                "Education is the most powerful weapon which you can use to change the world. Ayyankali Memorial Arts &amp; Science College was founded to ensure that this weapon reaches every student, without exception. Our doors are open to all — because talent knows no boundary, and every young person deserves the opportunity to rise."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Desk */}
      <section className="py-24 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 text-gold-600 dark:text-gold-500 font-bold tracking-widest uppercase text-sm mb-4">
              <div className="w-8 h-px bg-gold-600 dark:bg-gold-500"></div>
              <span>{t("principalDeskTitle")}</span>
              <div className="w-8 h-px bg-gold-600 dark:bg-gold-500"></div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="shrink-0 flex flex-col items-center space-y-4">
              <div className="relative w-48 h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-gold-500">
                <Image
                  src="/images/principal.jpg"
                  alt="Dr. Remyasree S."
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="text-center">
                <p className="font-bold text-navy-900 dark:text-white text-lg">{t("principalName")}</p>
                <p className="text-gold-600 dark:text-gold-500 text-sm font-medium">{t("principalRole")}</p>
              </div>
            </div>
            <div className="relative bg-navy-50 dark:bg-zinc-950 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-zinc-800">
              <Quote className="h-10 w-10 text-gold-200 dark:text-gold-900 absolute top-6 left-6" />
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg relative z-10 pt-4">
                {t("principalMessage")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* College Highlights */}
      <section className="py-24 bg-gray-50 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-6">{t("highlightsTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight: string, index: number) => (
              <div key={index} className="flex items-start space-x-4 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800">
                <Award className="h-8 w-8 text-gold-500 shrink-0" />
                <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
