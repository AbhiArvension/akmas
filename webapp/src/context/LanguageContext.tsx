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
    tagline: "Education for Empowerment",
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
      { name: "B.Sc. Mathematics", desc: "FYUGP Honour in Mathematics" },
      { name: "B.A. English", desc: "FYUGP Honours in English" },
      { name: "B.A. Economics", desc: "FYUGP Honour in Economics" },
      { name: "B.Com Co-operation", desc: "FYUGP Honour in B.Com Co-operation" },
      { name: "B.Com Accounts & Data Science", desc: "FYUGP Honour in B.Com Co-operation" }
    ],
    minorDisciplines: "Minor Disciplines",
    minors: [
      "English", "Economics", "B.Com Co-operation", 
      "B.Sc. Mathematics", "B.Com Accounts and Data Science", "Physics", 
      "Statistics", "Journalism"
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
  },
  ml: {
    collegeName: "അയ്യങ്കാളി മെമ്മോറിയൽ ആർട്സ് & സയൻസ് കോളേജ്",
    collegeNameShort: "എ.എം.എ.എസ് കോളേജ്",
    location: "കുര്യോട്ടുമല, വെട്ടിത്തിട്ട പി.ഒ, പത്തനാപുരം, കൊല്ലം, പിൻ-689696",
    tagline: "ശാക്തീകരണത്തിനായി വിദ്യാഭ്യാസം",
    established: "സ്ഥാപനം: 2015, ഗവൺമെന്റ് എയ്ഡഡ് കോളേജ്",
    affiliation: "കേരള സർവ്വകലാശാല അഫിലിയേറ്റഡ്, അയ്യങ്കാളി കൾച്ചറൽ ട്രസ്റ്റ് നിയന്ത്രിക്കുന്നു",
    home: "ഹോം",
    about: "ഞങ്ങളെക്കുറിച്ച്",
    courses: "കോഴ്സുകൾ",
    contact: "കോൺടാക്ട്",
    admissions: "അഡ്മിഷൻ ആരംഭിച്ചു",
    applyNow: "അപേക്ഷിക്കൂ",
    exploreCourses: "കോഴ്സുകൾ കാണുക",
    ourLegacy: "ഞങ്ങളുടെ പാരമ്പര്യം",
    whyChooseUs: "എന്തുകൊണ്ട് ഞങ്ങളെ തിരഞ്ഞെടുക്കണം?",
    fyugpTitle: "നാല് വർഷത്തെ ബിരുദ പ്രോഗ്രാം (FYUGP)",
    fyugpDesc: "ദേശീയ വിദ്യാഭ്യാസ നയം (NEP) 2020 ന് അനുസൃതമായി കേരള സർവ്വകലാശാല അവതരിപ്പിച്ച നാല് വർഷത്തെ ബിരുദ പ്രോഗ്രാം (FYUGP), വിദ്യാർത്ഥികൾക്ക് വഴക്കമുള്ളതും മൾട്ടി ഡിസിപ്ലിനറിയും ഔട്ട്‌കം അധിഷ്ഠിതവുമായ പഠന അനുഭവം നൽകുന്നു. 3 വർഷത്തെ ബിരുദം, 4 വർഷത്തെ ഓണേഴ്സ് അല്ലെങ്കിൽ ഫാസ്റ്റ് ട്രാക്ക് ഓപ്ഷനുകൾ ഇതിലൂടെ സാധ്യമാണ്.",
    coursesOfferedTitle: "ലഭ്യമായ കോഴ്സുകൾ (കാലാവധി)",
    durations: [
      "3 വർഷത്തെ ബിരുദം",
      "2.5 വർഷത്തെ ഫാസ്റ്റ് ട്രാക്ക് ബിരുദം",
      "4 വർഷത്തെ ഓണേഴ്സ് ബിരുദം",
      "3.5 വർഷത്തെ ഫാസ്റ്റ് ട്രാക്ക് ഓണേഴ്സ് ബിരുദം"
    ],
    majorDisciplines: "പ്രധാന വിഷയങ്ങൾ (Majors)",
    majors: [
      { name: "ബി.എസ്.സി മാത്തമാറ്റിക്സ്", desc: "ഗണിതശാസ്ത്രത്തിൽ FYUGP ഓണേഴ്സ്" },
      { name: "ബി.എ ഇംഗ്ലീഷ്", desc: "ഇംഗ്ലീഷ് ഭാഷയിലും സാഹിത്യത്തിലും FYUGP ഓണേഴ്സ്" },
      { name: "ബി.എ ഇക്കണോമിക്സ്", desc: "സാമ്പത്തിക ശാസ്ത്രത്തിൽ FYUGP ഓണേഴ്സ്" },
      { name: "ബി.കോം കോ-ഓപ്പറേഷൻ", desc: "കോ-ഓപ്പറേഷനിൽ FYUGP ഓണേഴ്സ്" },
      { name: "ബി.കോം അക്കൗണ്ട്സ് & ഡാറ്റാ സയൻസ്", desc: "കോ-ഓപ്പറേഷനിൽ FYUGP ഓണേഴ്സ്" }
    ],
    minorDisciplines: "മൈനർ വിഷയങ്ങൾ (Minors)",
    minors: [
      "ഇംഗ്ലീഷ്", "ഇക്കണോമിക്സ്", "കോ-ഓപ്പറേഷൻ", 
      "മാത്തമാറ്റിക്സ്", "അക്കൗണ്ട്സ് & ഡാറ്റാ സയൻസ്", "ഫിസിക്സ്", 
      "സ്റ്റാറ്റിസ്റ്റിക്സ്", "ജേർണലിസം"
    ],
    highlightsTitle: "കോളേജിന്റെ പ്രത്യേകതകൾ",
    highlights: [
      "കേരള സർവ്വകലാശാലയുമായി അഫിലിയേറ്റ് ചെയ്ത ഗവൺമെന്റ് എയ്ഡഡ് സ്ഥാപനം",
      "തുടർച്ചയായ മികച്ച വിജയശതമാനം",
      "ബി.കോം അക്കൗണ്ട്സ് & ഡാറ്റാ സയൻസിൽ തുടർച്ചയായ യൂണിവേഴ്സിറ്റി റാങ്കുകൾ",
      "അവാർഡ് നേടിയ എൻഎസ്എസ് യൂണിറ്റ്",
      "സജീവമായ കരിയർ ഗൈഡൻസ്, പ്ലേസ്മെന്റ് സെൽ",
      "മുഖ്യമന്ത്രിയുടെ പ്രതിഭാ സ്കോളർഷിപ്പ് നേടിയ വിദ്യാർത്ഥികൾ",
      "വിദ്യാർത്ഥി സൗഹൃദ ക്യാമ്പസിൽ മികച്ച വിദ്യാഭ്യാസം"
    ],
    locationTitle: "ലൊക്കേഷൻ",
    locationPoints: [
      "പുനലൂർ KSRTC ബസ് സ്റ്റാൻഡിൽ നിന്ന് 4 കി.മീ",
      "പുനലൂർ റെയിൽവേ സ്റ്റേഷനിൽ നിന്ന് 5 കി.മീ",
      "സംസ്ഥാന പാതയിൽ നിന്ന് 200 മീറ്റർ",
      "പുനലൂർ - മൂവാറ്റുപുഴ സ്റ്റേറ്റ് ഹൈവേയിൽ നിന്ന് 200 മീറ്റർ"
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
    send: "സന്ദേശം അയക്കുക",
    quickLinks: "പ്രധാന ലിങ്കുകൾ",
    getInTouch: "ബന്ധപ്പെടുക",
    officeHours: "ഓഫീസ് സമയം: തിങ്കൾ-ശനി 9:00 AM - 4:30 PM",
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
