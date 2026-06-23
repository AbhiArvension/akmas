"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Award, Landmark, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/campus1.jpg"
            alt="Campus"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white mt-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {t("collegeName")}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gold-400 font-medium tracking-wide">
              {t("heroSubtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/courses"
                className="bg-gold-500 text-navy-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-400 transition-all flex items-center group shadow-lg"
              >
                {t("exploreCourses")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                {t("ourLegacy")}
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-navy-900 dark:bg-zinc-950 text-white relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-gold-500">2015</h3>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Established</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-gold-500">FYUGP</h3>
              <p className="text-sm text-gray-400 uppercase tracking-widest">NEP 2020 Aligned</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-gold-500">Aided</h3>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Government</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-gold-500">A+</h3>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Highlights (From Real Data) */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">{t("whyChooseUs")}</h2>
            <p className="text-gray-600 dark:text-gray-400">{t("highlights")}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-zinc-900 hover:bg-navy-50 dark:hover:bg-zinc-700 border border-gray-100 dark:border-zinc-800 transition-all group text-center">
              <div className="w-14 h-14 bg-navy-100 dark:bg-zinc-950 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                <Award className="h-7 w-7 text-navy-900 dark:text-white group-hover:text-navy-950" />
              </div>
              <h3 className="font-bold mb-2 text-navy-900 dark:text-white">{t("universityRank")}</h3>
            </div>
            
            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-zinc-900 hover:bg-navy-50 dark:hover:bg-zinc-700 border border-gray-100 dark:border-zinc-800 transition-all group text-center">
              <div className="w-14 h-14 bg-navy-100 dark:bg-zinc-950 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                <Users className="h-7 w-7 text-navy-900 dark:text-white group-hover:text-navy-950" />
              </div>
              <h3 className="font-bold mb-2 text-navy-900 dark:text-white">{t("nssUnit")}</h3>
            </div>
            
            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-zinc-900 hover:bg-navy-50 dark:hover:bg-zinc-700 border border-gray-100 dark:border-zinc-800 transition-all group text-center">
              <div className="w-14 h-14 bg-navy-100 dark:bg-zinc-950 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                <Landmark className="h-7 w-7 text-navy-900 dark:text-white group-hover:text-navy-950" />
              </div>
              <h3 className="font-bold mb-2 text-navy-900 dark:text-white">{t("greenCampus")}</h3>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-zinc-900 hover:bg-navy-50 dark:hover:bg-zinc-700 border border-gray-100 dark:border-zinc-800 transition-all group text-center">
              <div className="w-14 h-14 bg-navy-100 dark:bg-zinc-950 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                <GraduationCap className="h-7 w-7 text-navy-900 dark:text-white group-hover:text-navy-950" />
              </div>
              <h3 className="font-bold mb-2 text-navy-900 dark:text-white">{t("faculty")}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & FYUGP Sneak Peek */}
      <section className="py-24 bg-navy-50 dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/campus2.jpg"
                  alt="Chairman Punnala Sreekumar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold-500 p-8 rounded-2xl text-navy-950 max-w-xs shadow-xl hidden md:block">
                <p className="font-bold text-lg mb-1">"Education is the most powerful weapon which you can use to change the world."</p>
                <p className="text-sm opacity-80">— Mahatma Ayyankali Vision</p>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-bold leading-tight text-navy-900 dark:text-white">
                {t("fyugpTitle")}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Introduced by the University of Kerala in accordance with NEP 2020, offering students a flexible, multidisciplinary, and outcome-based learning experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <BookOpen className="h-6 w-6 text-gold-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl text-navy-900 dark:text-white">Flexible Learning Paths</h4>
                    <p className="text-gray-600 dark:text-gray-400">Pursue a 3-year degree, 4-year honours degree, or fast-track options based on your aspirations.</p>
                  </div>
                </div>
              </div>
              <Link
                href="/courses"
                className="inline-flex items-center text-gold-600 dark:text-gold-500 font-bold hover:text-gold-500 transition-colors mt-4"
              >
                {t("exploreCourses")} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}