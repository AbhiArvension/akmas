"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ml";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const dictionaries: Record<Language, any> = {
  en: {
    collegeName: "Ayyankali Memorial Arts & Science College",
    collegeNameShort: "AMAS College",
    location: "Kuryottumala, Vettithitta P.O, Pathapuram, Kollam, Pin–689696",
    tagline: "Educate · Excel · Empower",
    heroSubtitle: "Where Knowledge Meets Excellence",
    aboutSubtitle: "A legacy of academic excellence, rooted in the vision of Mahatma Ayyankali.",
    established: "Estab: 2015, Government Aided College",
    affiliation: "Affiliated to University of Kerala, Managed by Ayyankali Cultural Trust",
    home: "Home",
    about: "About Us",
    courses: "Courses",
    contact: "Contact",
    admissions: "Admissions Open",
    applyNow: "Apply Now",
    exploreCourses: "Explore Courses",
    ourLegacy: "Our Legacy",
    whyChooseUs: "Why Choose Us?",
    fyugpTitle: "Four Year Under Graduate Programme (FYUGP)",
    fyugpDesc: "The Four-Year Undergraduate Programme (FYUGP), introduced by the University of Kerala in accordance with the National Education Policy (NEP) 2020, offers students a flexible, multidisciplinary, and outcome-based learning experience. The programme enables students to pursue a three-year degree, four-year honours degree, or fast-track options. FYUGP emphasizes skill development, research orientation, experiential learning, internships, community engagement, and industry exposure.",
    coursesOfferedTitle: "Courses Offered (Durations)",
    durations: [
      "3 Year Degree",
      "2.5 Year Fast Track Degree",
      "4 Year Honours Degree",
      "3.5 Year Fast Track Honours Degree"
    ],
    majorDisciplines: "Major Disciplines",
    majors: [
      { name: "B.Sc. Mathematics", desc: "FYUGP Honours in Mathematics" },
      { name: "B.A. English", desc: "FYUGP Honours in English" },
      { name: "B.A. Economics", desc: "FYUGP Honours in Economics" },
      { name: "B.Com Co-operation", desc: "FYUGP Honour in B.Com Co-operation" },
      { name: "B.Com Accounts & Data Science", desc: "FYUGP Honours in B.Com Accounts & Data Science" }
    ],
    minorDisciplines: "Minor Disciplines",
    minors: [
      "English", "Economics", "B.Com Co-operation",
      "B.Sc. Mathematics", "B.Com Accounts and Data Science",
      "Physics", "Statistics", "Journalism"
    ],
    highlightsTitle: "College Highlights",
    highlights: [
      "University of Kerala Affiliated Government Aided Institution",
      "Academic Excellence with Consistent Outstanding Results",
      "Continuous University Ranks for B.Com Accounts & Data Science",
      "Award Winning NSS Unit with Outstanding Community Outreach Programmes",
      "Dynamic Career Guidance, Placement and Entrepreneurship Development Cell",
      "Chief Minister's Prathibha Scholarship Award Winners",
      "Quality Education in a Serene and Student-Friendly Atmosphere"
    ],
    locationTitle: "Location Details",
    locationPoints: [
      "4 KM from Punalur KSRTC Bus Station",
      "5 KM from Punalur Railway Station",
      "200 M away from State Highway",
      "200 M away from Punalur – Muvattupuzha State Highway– 08"
    ],
    enquiryTitle: "Enquiry Contacts",
    enquiries: [
      { name: "Dr. Remyasree. S", role: "Principal In Charge", phone: "8606144316" },
      { name: "Mr. Anish Chandran", role: "FYUGP Co-ordinator", phone: "9539042693" },
      { name: "Mrs. Seethal. S", role: "Admission Co-ordinator", phone: "9947864504" },
      { name: "Dr. Santhosh. T. R", role: "IQAC Co-ordinator", phone: "9846444636" }
    ],
    email: "akmasprincipal@gmail.com",
    website: "akmascollege.in",
    send: "Send Message",
    quickLinks: "Quick Links",
    getInTouch: "Get in Touch",
    officeHours: "Office Hours: Mon-Sat 9:00 AM - 4:30 PM",
    universityRank: "University Ranks",
    nssUnit: "NSS Unit",
    greenCampus: "Green Campus",
    faculty: "Experienced Faculty",
    principalDeskTitle: "Principal's Desk",
    principalName: "Dr. Remyasree S.",
    principalRole: "Principal In-Charge",
    principalMessage: "Ayyankali Memorial Arts and Science College is an institution that draws its spirit from the vision of the great social reformer Mahatma Ayyankali. We stand guided by our motto — Educate, Excel, Empower. As we commemorate the legacy of this great leader, we are reminded that education is not merely a privilege, but a powerful tool for transformation. It is in this spirit that our college strives to nurture young minds into confident, capable, and compassionate citizens. We currently offer five undergraduate degree programmes under FYUGP, designed to provide academic depth, skill-based learning, and holistic development. Our focus is to ensure that every student who walks through our gates not only gains knowledge, but also the courage to excel in their chosen field and the strength to empower themselves and society. I invite you to be part of this journey of learning and growth. Together, let us build a future rooted in values and driven by excellence.",
    chairmanDeskTitle: "Chairman's Message",
  },
  ml: {
    collegeName: "അയ്യങ്കാളി മെമ്മോറിയൽ ആർട്സ് & സയൻസ് കോളേജ്",
    collegeNameShort: "AMAS കോളേജ്",
    location: "കുര്യോട്ടുമല, വെട്ടിത്തിട്ട പി.ഒ, പത്തനാപുരം, കൊല്ലം, പിൻ–689696",
    tagline: "വിദ്യ · മികവ് · ശക്തി",
    heroSubtitle: "അറിവും മികവും ഒത്തുചേരുന്ന ഇടം",
    aboutSubtitle: "മഹാത്മ അയ്യങ്കാളിയുടെ ദർശനത്തിൽ വേരൂന്നിയ അക്കാദമിക് മികവിന്റെ പൈതൃകം.",
    established: "സ്ഥാപിതം: 2015, ഗവൺമെന്റ് എയ്ഡഡ് കോളേജ്",
    affiliation: "കേരള സർവ്വകലാശാലയോട് അഫിലിയേറ്റ് ചെയ്തത്, അയ്യങ്കാളി കൾച്ചറൽ ട്രസ്റ്റ് നടത്തിപ്പ്",
    home: "ഹോം",
    about: "ഞങ്ങളെക്കുറിച്ച്",
    courses: "കോഴ്സുകൾ",
    contact: "കോൺടാക്ട്",
    admissions: "അഡ്മിഷൻ ആരംഭിച്ചു",
    applyNow: "അപേക്ഷിക്കൂ",
    exploreCourses: "കോഴ്സുകൾ കാണുക",
    ourLegacy: "ഞങ്ങളുടെ പാരമ്പര്യം",
    whyChooseUs: "എന്തുകൊണ്ട് ഞങ്ങളെ തിരഞ്ഞെടുക്കണം?",
    fyugpTitle: "നാല് വർഷത്തെ അണ്ടർഗ്രാജുവേറ്റ് പ്രോഗ്രാം (FYUGP)",
    fyugpDesc: "നാഷണൽ എഡ്യൂക്കേഷൻ പോളിസി (NEP) 2020 ന് അനുസൃതമായി കേരള സർവ്വകലാശാല അവതരിപ്പിച്ച FYUGP, വിദ്യാർത്ഥികൾക്ക് ഫ്ലെക്സിബിൾ, മൾട്ടി ഡിസിപ്ലിനറി, ഔട്ട്കം ബേസ്ഡ് ലേണിംഗ് എക്സ്പീരിയൻസ് നൽകുന്നു. 3 വർഷ ഡിഗ്രി, 4 വർഷ ഓണേഴ്സ് ഡിഗ്രി, അല്ലെങ്കിൽ ഫാസ്റ്റ് ട്രാക്ക് ഓപ്ഷനുകൾ ഇതിലൂടെ ലഭ്യമാണ്.",
    coursesOfferedTitle: "ലഭ്യമായ കോഴ്സുകൾ (കാലാവധി)",
    durations: [
      "3 വർഷ ഡിഗ്രി",
      "2.5 വർഷ ഫാസ്റ്റ് ട്രാക്ക് ഡിഗ്രി",
      "4 വർഷ ഓണേഴ്സ് ഡിഗ്രി",
      "3.5 വർഷ ഫാസ്റ്റ് ട്രാക്ക് ഓണേഴ്സ് ഡിഗ്രി"
    ],
    majorDisciplines: "മേജർ ഡിസിപ്ലിൻസ്",
    majors: [
      { name: "B.Sc. മാത്തമാറ്റിക്സ്", desc: "FYUGP ഓണേഴ്സ് ഇൻ മാത്തമാറ്റിക്സ്" },
      { name: "B.A. ഇംഗ്ലീഷ്", desc: "FYUGP ഓണേഴ്സ് ഇൻ ഇംഗ്ലീഷ്" },
      { name: "B.A. ഇക്കണോമിക്സ്", desc: "FYUGP ഓണേഴ്സ് ഇൻ ഇക്കണോമിക്സ്" },
      { name: "B.Com കോ-ഓപ്പറേഷൻ", desc: "FYUGP ഓണേഴ്സ് ഇൻ B.Com കോ-ഓപ്പറേഷൻ" },
      { name: "B.Com അക്കൗണ്ട്സ് & ഡേറ്റാ സയൻസ്", desc: "FYUGP ഓണേഴ്സ് ഇൻ B.Com അക്കൗണ്ട്സ് & ഡേറ്റാ സയൻസ്" }
    ],
    minorDisciplines: "മൈനർ ഡിസിപ്ലിൻസ്",
    minors: [
      "ഇംഗ്ലീഷ്", "ഇക്കണോമിക്സ്", "B.Com കോ-ഓപ്പറേഷൻ",
      "B.Sc. മാത്തമാറ്റിക്സ്", "B.Com അക്കൗണ്ട്സ് & ഡേറ്റാ സയൻസ്",
      "ഫിസിക്സ്", "സ്റ്റാറ്റിസ്റ്റിക്സ്", "ജേർണലിസം"
    ],
    highlightsTitle: "കോളേജ് ഹൈലൈറ്റ്സ്",
    highlights: [
      "കേരള സർവ്വകലാശാലയോട് അഫിലിയേറ്റ് ചെയ്ത ഗവൺമെന്റ് എയ്ഡഡ് ഇൻസ്റ്റിറ്റ്യൂഷൻ",
      "തുടർച്ചയായ മികച്ച അക്കാദമിക് റിസൾട്ടുകൾ",
      "B.Com അക്കൗണ്ട്സ് & ഡേറ്റാ സയൻസിൽ തുടർച്ചയായ യൂണിവേഴ്സിറ്റി റാങ്കുകൾ",
      "അവാർഡ് വിജയിയായ NSS യൂണിറ്റ്, മികച്ച കമ്മ്യൂണിറ്റി ഔട്ട്റീച്ച് പ്രോഗ്രാമുകൾ",
      "ഡൈനാമിക് കരിയർ ഗൈഡൻസ്, പ്ലേസ്മെന്റ് & എന്റർപ്രണർഷിപ്പ് ഡെവലപ്മെന്റ് സെൽ",
      "ചീഫ് മിനിസ്റ്ററുടെ പ്രതിഭ സ്കോളർഷിപ്പ് അവാർഡ് വിജയികൾ",
      "സ്റ്റുഡന്റ് ഫ്രണ്ട്ലി ക്യാംപസിൽ ക്വാളിറ്റി എഡ്യൂക്കേഷൻ"
    ],
    locationTitle: "ലൊക്കേഷൻ",
    locationPoints: [
      "പുനലൂർ KSRTC ബസ് സ്റ്റാൻഡിൽ നിന്ന് 4 കി.മീ",
      "പുനലൂർ റെയിൽവേ സ്റ്റേഷനിൽ നിന്ന് 5 കി.മീ",
      "സ്റ്റേറ്റ് ഹൈവേയിൽ നിന്ന് 200 മീ",
      "പുനലൂർ – മൂവാറ്റുപുഴ സ്റ്റേറ്റ് ഹൈവേ–08 ൽ നിന്ന് 200 മീ"
    ],
    enquiryTitle: "അന്വേഷണങ്ങൾക്ക്",
    enquiries: [
      { name: "ഡോ. രമ്യശ്രീ. എസ്", role: "പ്രിൻസിപ്പൽ ഇൻ ചാർജ്", phone: "8606144316" },
      { name: "ശ്രീ. അനീഷ് ചന്ദ്രൻ", role: "FYUGP കോ-ഓർഡിനേറ്റർ", phone: "9539042693" },
      { name: "ശ്രീമതി. ശീതൾ. എസ്", role: "അഡ്മിഷൻ കോ-ഓർഡിനേറ്റർ", phone: "9947864504" },
      { name: "ഡോ. സന്തോഷ്. ടി. ആർ", role: "IQAC കോ-ഓർഡിനേറ്റർ", phone: "9846444636" }
    ],
    email: "akmasprincipal@gmail.com",
    website: "akmascollege.in",
    send: "മെസ്സേജ് അയക്കുക",
    quickLinks: "ക്വിക്ക് ലിങ്കുകൾ",
    getInTouch: "ബന്ധപ്പെടുക",
    officeHours: "ഓഫീസ് സമയം: തിങ്കൾ–ശനി 9:00 AM – 4:30 PM",
    universityRank: "യൂണിവേഴ്സിറ്റി റാങ്കുകൾ",
    nssUnit: "NSS യൂണിറ്റ്",
    greenCampus: "ഗ്രീൻ ക്യാംപസ്",
    faculty: "എക്സ്പീരിയൻസ്ഡ് ഫാക്കൽറ്റി",
    principalDeskTitle: "പ്രിൻസിപ്പലിന്റെ ഡെസ്ക്",
    principalName: "ഡോ. രമ്യശ്രീ എസ്.",
    principalRole: "പ്രിൻസിപ്പൽ ഇൻ ചാർജ്",
    principalMessage: "അയ്യങ്കാളി മെമ്മോറിയൽ ആർട്സ് & സയൻസ് കോളേജ്, മഹാത്മ അയ്യങ്കാളിയുടെ ദർശനത്തിൽ നിന്ന് പ്രചോദനം ഉൾക്കൊണ്ട് പ്രവർത്തിക്കുന്ന ഒരു ഇൻസ്റ്റിറ്റ്യൂഷനാണ്. Educate, Excel, Empower എന്ന മോട്ടോ ഞങ്ങളെ നയിക്കുന്നു. ആ മഹാനേതാവിന്റെ പൈതൃകം ആദരിക്കുമ്പോൾ, വിദ്യാഭ്യാസം വെറുമൊരു ആനുകൂല്യമല്ല, മറിച്ച് ട്രാൻസ്ഫോർമേഷന്റെ ഒരു ശക്തമായ ടൂൾ ആണ് എന്ന് ഞങ്ങൾ ഓർക്കുന്നു. FYUGP ഫ്രെയിംവർക്കിൽ അഞ്ച് അണ്ടർഗ്രാജുവേറ്റ് ഡിഗ്രി പ്രോഗ്രാമുകൾ ഞങ്ങൾ ഓഫർ ചെയ്യുന്നു. ഞങ്ങളുടെ ഗേറ്റ്സിലൂടെ കടന്നുവരുന്ന ഓരോ സ്റ്റുഡന്റും അറിവ് മാത്രമല്ല, അവരുടെ ഫീൽഡിൽ Excel ചെയ്യാനുള്ള ആത്മവിശ്വാസവും സൊസൈറ്റിയെ Empower ചെയ്യാനുള്ള ശക്തിയും നേടണം. ഈ ലേണിംഗ് ജേർണിയുടെ ഭാഗമാകാൻ നിങ്ങളെ ഞാൻ ക്ഷണിക്കുന്നു.",
    chairmanDeskTitle: "ചെയർമാന്റെ സന്ദേശം",
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string) => {
    return dictionaries[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
