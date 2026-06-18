"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, GraduationCap, Code, Briefcase, Calculator, Layers, Compass, CheckCircle2 } from "lucide-react";

export default function CoursesPage() {
  const { t } = useLanguage();
  
  const majors = t("majors") || [];
  const minors = t("minors") || [];
  const durations = t("durations") || [];

  // Mapping majors to icons and images for the grid
  const courseIcons = [BookOpen, Code, Calculator, Briefcase, Layers];
  const courseImages = [
    "/images/campus4.jpg",
    "/images/campus5.jpg",
    "/images/campus6.jpg",
    "/images/campus1.jpg",
    "/images/campus2.jpg"
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-navy-900 dark:bg-zinc-950 text-white border-b border-navy-800 dark:border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("courses")}</h1>
          <p className="text-xl text-gold-400 max-w-2xl mx-auto font-bold tracking-wide">
            {t("fyugpTitle")}
          </p>
        </div>
      </section>

      {/* Major Disciplines - Image Grid Design First */}
      <section className="py-24 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-6">{t("majorDisciplines")}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Explore our comprehensive FYUGP major disciplines designed for academic and professional excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {majors.map((major: any, index: number) => {
              const Icon = courseIcons[index % courseIcons.length];
              const image = courseImages[index % courseImages.length];

              return (
                <div key={index} className="group bg-white dark:bg-zinc-950 rounded-3xl overflow-hidden border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={image}
                      alt={major.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 dark:from-zinc-950/90 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="p-2 bg-gold-500 rounded-lg text-navy-950 dark:text-zinc-950 mb-3 inline-block">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-bold">{major.name}</h3>
                    </div>
                  </div>
                  
                  <div className="p-8 flex-grow flex flex-col">
                    <span className="text-sm font-bold text-gold-600 dark:text-gold-500 uppercase tracking-widest mb-3 block">
                      {major.desc}
                    </span>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
                      Deep dive into {major.name.toLowerCase()} with a curriculum aligned with the National Education Policy 2020.
                    </p>
                    <button className="w-full py-4 border-2 border-navy-900 dark:border-zinc-700 rounded-xl font-bold text-navy-900 dark:text-white hover:bg-navy-900 hover:text-white dark:hover:bg-zinc-800 transition-all">
                      Course Details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FYUGP Details - Improved UI & Moved Below Majors */}
      <section className="py-24 bg-gray-50 dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Image/Visual side */}
            <div className="lg:w-1/2 w-full relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                 <Image
                    src="/images/campus3.jpg"
                    alt="Students on campus"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-navy-900/20 dark:bg-zinc-950/40 mix-blend-multiply"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-800 max-w-[250px]">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-navy-950">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-navy-900 dark:text-white">NEP 2020</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Fully aligned with the new National Education Policy.</p>
              </div>
            </div>

            {/* Content side */}
            <div className="lg:w-1/2 w-full space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">About the Programme</h2>
                <div className="w-16 h-1.5 bg-gold-500 rounded-full"></div>
              </div>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm border-l-4 border-l-navy-900 dark:border-l-zinc-700">
                {t("fyugpDesc")}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-900 dark:text-white">{t("coursesOfferedTitle")}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {durations.map((duration: string, idx: number) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-gold-500 shrink-0" />
                      <span className="font-bold text-navy-900 dark:text-gray-200 mt-0.5">{duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Minor Disciplines */}
      <section className="py-24 bg-navy-900 dark:bg-zinc-950 border-t border-navy-800 dark:border-zinc-800">
        <div className="container mx-auto px-4 max-w-5xl text-center text-white">
          <div className="inline-flex items-center space-x-3 mb-10">
            <Layers className="h-8 w-8 text-gold-500" />
            <h2 className="text-3xl font-bold">{t("minorDisciplines")}</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {minors.map((minor: string, idx: number) => (
              <div key={idx} className="bg-navy-800/50 dark:bg-zinc-900/50 backdrop-blur-md px-6 py-3 rounded-full border border-navy-800 dark:border-zinc-800 flex items-center space-x-3 hover:border-gold-500 transition-colors">
                <span className="w-2 h-2 rounded-full bg-gold-500 shrink-0"></span>
                <span className="font-bold">{minor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}