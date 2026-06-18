"use client";

import { Mail, Phone, MapPin, Send, User, Building } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const enquiries = t("enquiries") || [];
  const locations = t("locationPoints") || [];

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-navy-900 dark:bg-zinc-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("contact")}</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t("getInTouch")}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Real Data Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-8">{t("enquiryTitle")}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {enquiries.map((person: any, idx: number) => (
                    <div key={idx} className="bg-gray-50 dark:bg-zinc-950 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800">
                      <div className="w-10 h-10 bg-gold-500/20 text-gold-600 dark:text-gold-400 rounded-full flex items-center justify-center mb-4">
                        <User className="h-5 w-5" />
                      </div>
                      <h4 className="font-bold text-lg text-navy-900 dark:text-white mb-1">{person.name}</h4>
                      <p className="text-sm text-gold-600 dark:text-gold-500 font-bold uppercase tracking-wider mb-3">{person.role}</p>
                      <a href={`tel:${person.phone}`} className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-navy-900 dark:hover:text-white">
                        <Phone className="h-4 w-4 shrink-0" />
                        <span className="font-bold tracking-widest">{person.phone}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-8">{t("locationTitle")}</h2>
                <div className="bg-gray-50 dark:bg-zinc-950 p-8 rounded-3xl border border-gray-100 dark:border-zinc-800 space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-gold-500 shrink-0" />
                    <p className="text-lg font-bold text-navy-900 dark:text-white">{t("location")}</p>
                  </div>
                  <ul className="space-y-3 mt-6 border-t border-gray-200 dark:border-zinc-800 pt-6">
                    {locations.map((loc: string, idx: number) => (
                      <li key={idx} className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                        <Building className="h-5 w-5 text-gray-400" />
                        <span>{loc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 pt-2 border-t border-gray-200 dark:border-zinc-800">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <span>{t("email")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 dark:bg-zinc-950 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-sm h-fit">
              <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-8">{t("send")}</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900 dark:text-gray-300 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 focus:border-gold-500 focus:ring-4 focus:ring-gold-500/10 outline-none transition-all text-navy-900 dark:text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900 dark:text-gray-300 ml-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 focus:border-gold-500 focus:ring-4 focus:ring-gold-500/10 outline-none transition-all text-navy-900 dark:text-white"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy-900 dark:text-gray-300 ml-1">{t("subject")}</label>
                  <select className="w-full px-6 py-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 focus:border-gold-500 focus:ring-4 focus:ring-gold-500/10 outline-none transition-all appearance-none text-navy-900 dark:text-white">
                    <option>Admission Enquiry</option>
                    <option>General Information</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy-900 dark:text-gray-300 ml-1">{t("message")}</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="w-full px-6 py-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 focus:border-gold-500 focus:ring-4 focus:ring-gold-500/10 outline-none transition-all resize-none text-navy-900 dark:text-white"
                  ></textarea>
                </div>

                <button className="w-full py-5 bg-navy-900 dark:bg-gold-500 text-white dark:text-zinc-950 rounded-xl font-bold text-lg hover:bg-navy-800 dark:hover:bg-gold-400 transition-all shadow-xl flex items-center justify-center group">
                  {t("send")}
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}