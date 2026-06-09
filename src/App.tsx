import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Cpu,
  Code2,
  Shield,
  Globe,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Check,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Award,
  Search,
  Terminal,
  Wrench,
  Calendar
} from "lucide-react";
import {
  certifications,
  projects,
  hardSkills,
  softSkills,
  tools,
  translations,
  Project
} from "./portfolioData";

const getCategoryBadgeClass = (category: string) => {
  switch (category) {
    case "web":
      return "bg-blue-50 text-blue-700 border-blue-200/60";
    case "iot":
      return "bg-purple-50 text-purple-700 border-purple-200/60";
    case "mobile":
      return "bg-emerald-50 text-emerald-700 border-emerald-200/60";
    case "data":
      return "bg-amber-50 text-amber-700 border-amber-200/60";
    default:
      return "bg-slate-50 text-slate-700 border-slate-200/60";
  }
};

const getCategoryLabel = (category: string) => {
  switch (category) {
    case "web":
      return "🕸️ Web Dev";
    case "iot":
      return "📟 IoT & Systems";
    case "mobile":
      return "📱 Mobile App";
    case "data":
      return "📊 Web Scraping";
    default:
      return "📁 Project";
  }
};

export default function App() {
  const [lang, setLang] = useState<"id" | "en">("id");
  const [activeTab, setActiveTab] = useState<string>("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [showAllCerts, setShowAllCerts] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Handle active section tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      const sections = ["home", "about", "services", "experience", "projects", "skills", "faq"];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const d = translations[lang];

  // Filtering list based on selected category tab
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  // Helper lists of categories
  const categories = [
    { id: "all", label: d.tabAll },
    { id: "web", label: d.tabWeb },
    { id: "iot", label: d.tabIot },
    { id: "mobile", label: d.tabMobile },
    { id: "data", label: d.tabData }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("faishalkc@gmail.com");
    alert(lang === "id" ? "Email telah disalin ke papan klip!" : "Email copied to clipboard!");
  };

  return (
    <div className="font-sans text-slate-800 bg-cream-50 selection:bg-mustard-200 overflow-x-hidden min-h-screen flex flex-col">
      
      {/* Sticky Top Navigation (Navy Theme) */}
      <nav className="fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300 bg-navy-900 py-3 md:py-4 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16 relative">
            
            {/* Logo Brand matching Hanif's template */}
            <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 z-20">
              <a
                href="#home"
                className="font-extrabold text-[#fcfcfc] text-lg tracking-wider text-center leading-none"
              >
                FAISHAL<span className="text-mustard-500">HADY</span>
              </a>
            </div>

            <div className="hidden lg:flex flex-shrink-0 font-extrabold text-2xl tracking-wider text-mustard-500 cursor-pointer">
              <a href="#home">
                FAISHAL<span className="text-white">HADY</span>
              </a>
            </div>

            {/* Desktop Navbar Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-baseline space-x-5">
                <a
                  href="#about"
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                    activeSection === "about" ? "text-mustard-500" : "text-gray-300 hover:text-mustard-500"
                  }`}
                >
                  {lang === "id" ? "Tentang Saya" : "About Me"}
                </a>
                <a
                  href="#services"
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                    activeSection === "services" ? "text-mustard-500" : "text-gray-300 hover:text-mustard-500"
                  }`}
                >
                  {d.navCert}
                </a>
                <a
                  href="#experience"
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                    activeSection === "experience" ? "text-mustard-500" : "text-gray-300 hover:text-mustard-500"
                  }`}
                >
                  {lang === "id" ? "Pengalaman" : "Experience"}
                </a>
                <a
                  href="#projects"
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                    activeSection === "projects" ? "text-mustard-500" : "text-gray-300 hover:text-mustard-500"
                  }`}
                >
                  {d.navProject}
                </a>
                <a
                  href="#skills"
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                    activeSection === "skills" ? "text-mustard-500" : "text-gray-300 hover:text-mustard-500"
                  }`}
                >
                  {d.navSkill}
                </a>
                <a
                  href="#faq"
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                    activeSection === "faq" ? "text-mustard-500" : "text-gray-300 hover:text-mustard-500"
                  }`}
                >
                  FAQ
                </a>
              </div>

              {/* Languages Switch buttons & Call-to-action button */}
              <div className="flex items-center space-x-4 border-l border-navy-800 pl-6 ml-2">
                <button
                  onClick={() => setLang(lang === "id" ? "en" : "id")}
                  className="text-gray-300 flex items-center gap-1.5 text-xs font-bold hover:text-mustard-500 transition-colors"
                  id="desktop-lang-toggle"
                >
                  <Globe className="w-4 h-4 text-mustard-500" />
                  {lang.toUpperCase()}
                </button>
                
                <a
                  href="https://wa.me/6289521356200"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-mustard-500 text-navy-900 hover:bg-mustard-400 px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 shadow-lg hover:shadow-mustard-500/20 transform hover:-translate-y-0.5 whitespace-nowrap"
                >
                  {d.navButton}
                </a>
              </div>
            </div>

            {/* Mobile hamburger menu toggle */}
            <div className="flex lg:hidden items-center ml-auto">
              <button
                onClick={() => setMobileMenuOpen(prev => !prev)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-navy-800 focus:outline-none transition-transform active:scale-95"
                id="mobile-hamburger-btn"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu expanded panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed top-0 right-0 h-screen w-[280px] bg-navy-900 z-50 shadow-2xl border-l border-navy-800 flex flex-col overflow-y-auto"
              id="mobile-drawer"
            >
              <div className="flex justify-between items-center p-5 border-b border-navy-800 bg-navy-900 shrink-0">
                <span className="font-extrabold text-md tracking-wider text-mustard-500">MENU PORTFOLIO</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white p-1 hover:bg-navy-800 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 py-6 px-4 space-y-2">
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-mustard-500 hover:bg-navy-800 px-4 py-3 rounded-xl text-base font-medium transition-all"
                >
                  {lang === "id" ? "Tentang Saya" : "About Me"}
                </a>
                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-mustard-500 hover:bg-navy-800 px-4 py-3 rounded-xl text-base font-medium transition-all"
                >
                  {d.navCert}
                </a>
                <a
                  href="#experience"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-mustard-500 hover:bg-navy-800 px-4 py-3 rounded-xl text-base font-medium transition-all"
                >
                  {lang === "id" ? "Pengalaman" : "Experience"}
                </a>
                <a
                  href="#projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-mustard-500 hover:bg-navy-800 px-4 py-3 rounded-xl text-base font-medium transition-all"
                >
                  {d.navProject}
                </a>
                <a
                  href="#skills"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-mustard-500 hover:bg-navy-800 px-4 py-3 rounded-xl text-base font-medium transition-all"
                >
                  {d.navSkill}
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-mustard-500 hover:bg-navy-800 px-4 py-3 rounded-xl text-base font-medium transition-all"
                >
                  FAQ
                </a>

                <div className="my-6 border-t border-navy-800 mx-2"></div>
                
                <button
                  onClick={() => setLang(lang === "id" ? "en" : "id")}
                  className="w-full text-left text-gray-300 hover:text-white px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-3 hover:bg-navy-800 transition-colors"
                >
                  <Globe className="w-5 h-5 text-mustard-500" />
                  {lang === "id" ? "Switch to English" : "Ubah ke Bahasa Indonesia"}
                </button>
              </div>

              <div className="p-5 border-t border-navy-800 bg-slate-950 shrink-0">
                <a
                  href="https://wa.me/6289521356200"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-full bg-[#25D366] text-slate-900 py-3.5 rounded-xl text-base font-bold hover:bg-[#20ba5a] transition-colors shadow-lg shadow-[#25D366]/10 active:scale-95 transform whitespace-nowrap"
                >
                  <Phone className="w-5 h-5 mr-2 fill-slate-900 text-slate-900 border-none" />
                  {lang === "id" ? "Chat Sekarang" : "Direct WhatsApp"}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero / Home Area (Exact styling, Navy/White/Mustard highlights) */}
      <section
        id="home"
        className="relative bg-navy-900 text-white pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-32 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-2/3 h-full bg-navy-800/30 transform skew-x-12 translate-x-32 pointer-events-none"></div>
        <div className="absolute -bottom-20 left-10 w-64 h-64 bg-mustard-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Left Content column */}
            <div className="lg:w-1/2 space-y-5 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start w-full mt-10 md:mt-14 lg:mt-0">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-navy-800 border border-navy-700 text-mustard-500 font-bold text-[10px] md:text-xs uppercase tracking-wider mb-2 shadow-sm">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-mustard-500 animate-pulse"></span>
                  {d.heroBadge}
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span>{d.heroTitle1} </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mustard-400 to-mustard-600">
                  {d.heroTitle2}
                </span>
                <span> {d.heroTitle3}</span>
              </h1>

              <p className="text-base md:text-xl text-gray-300 max-w-lg leading-relaxed border-l-4 border-mustard-500 pl-4 md:pl-6 mx-auto lg:mx-0 text-left">
                {d.heroBody}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 justify-center lg:justify-start">
                <a
                  href="https://wa.me/6289521356200"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-mustard-500 hover:bg-mustard-400 text-navy-900 font-bold py-3 px-6 md:py-4 md:px-8 rounded-xl flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 shadow-xl shadow-mustard-500/20 text-sm md:text-base"
                >
                  <Phone className="w-5 h-5 select-none" />
                  {d.ctaCall}
                </a>
                <a
                  href="#projects"
                  className="group border border-gray-600 hover:border-mustard-500 bg-navy-800/50 text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-xl flex items-center justify-center gap-2 transition-all hover:bg-navy-800 text-sm md:text-base"
                >
                  <Code2 className="w-5 h-5 group-hover:text-mustard-500 transition-colors" />
                  {d.ctaPortfolio}
                </a>
              </div>
            </div>

            {/* Right Card Column - Elegant professional photograph portrait */}
            <div className="lg:w-1/2 relative mt-4 lg:mt-0 order-1 lg:order-2">
              <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
                {/* Mustard backdrop decoration card matching original */}
                <div className="absolute inset-0 bg-gradient-to-tr from-mustard-600 to-mustard-400 rounded-[2rem] transform rotate-6 translate-x-4 translate-y-4"></div>
                
                {/* Premium high-fidelity graphic card containing the requested portrait photo */}
                <div className="absolute inset-0 bg-white rounded-[2rem] overflow-hidden shadow-2xl ring-4 ring-navy-800/10">
                  <img
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrcj1P4Ljoi_nI8E8SLArxDzKL5t1G9C3q91JpAlI2OMqkCMJefGa7tnkCMlhsqw1YDIYEvKqp6xvdjD5ufQhp_aCo5MjStb9-ddu9dT3vjs_cu8_CvfRowVxX0uz5IsRhQjqVLcCaptIhNt0mH_cYreyvs_EPME6cj2osEsB_ndAYzAKyj-1R3ujadpY/s1600/1767004885126.jpg"
                    alt="Muhammad Faishal Hady"
                    className="w-full h-full object-cover rounded-[2rem] select-none"
                    referrerPolicy="no-referrer"
                    id="hero-portrait"
                  />
                </div>

                {/* Left Side Small Float Badge exactly like "Peak ROAS 20x" */}
                <div className="absolute -bottom-6 -left-10 md:-left-12 bg-white p-3 md:p-5 rounded-2xl shadow-xl border-l-4 border-mustard-500 animate-bounce-slow max-w-[170px] md:max-w-[210px] text-left">
                  <div className="absolute -top-3 -right-3 bg-mustard-500 text-[#1e293b] rounded-full p-2 shadow-lg border-2 border-white transform rotate-12">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="bg-mustard-50 p-1.5 md:p-2.5 rounded-full">
                      <Cpu className="w-5 h-5 text-mustard-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-0.5">
                        <p className="text-[#0f172a] font-extrabold text-base md:text-xl">
                          14+ {lang === "id" ? "Sertifikat" : "Certs"}
                        </p>
                      </div>
                      <p className="text-slate-500 text-[9px] md:text-xs font-bold uppercase tracking-wider">
                        {lang === "id" ? "Sertifikasi Profesional" : "Professional Certifications"}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Specialty Marquee Loop */}
      <div className="bg-navy-950 border-b border-navy-800 py-6 md:py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
          <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
            {lang === "id" ? "Keahlian IT yang Saya Kuasai" : "IT Core Expertise Map"}
          </p>
        </div>
        <div className="flex overflow-hidden relative w-full gradient-mask-l-r">
          <div className="flex whitespace-nowrap animate-scroll">
            {[...hardSkills, ...hardSkills].map((skill, index) => (
              <div
                key={index}
                className="mx-3 md:mx-6 flex items-center gap-2 px-4 py-2 rounded-full border border-transparent hover:bg-navy-800 hover:border-navy-700 hover:text-mustard-500 active:bg-mustard-500 active:text-navy-900 active:scale-95 transition-all cursor-pointer group text-slate-400 font-bold text-base md:text-xl"
              >
                <div className="w-1.5 h-1.5 bg-mustard-500 rounded-full" />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating stats metrics panel overlapping hero matching Hanif's design */}
      <section className="py-10 md:py-12 bg-white relative z-20 shadow-sm mx-4 md:mx-8 -mt-6 md:-mt-8 rounded-xl border border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="flex flex-col items-center text-center gap-2 p-2 hover:transform hover:scale-105 transition-transform duration-300">
              <div className="p-3 bg-mustard-50 rounded-full text-mustard-600 mb-1 ring-1 ring-mustard-100">
                <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-navy-900" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-navy-900">7+ Proyek</h3>
              <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wide">
                {lang === "id" ? "IoT, Web & Aplikasi" : "Core Systems Engineered"}
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-2 p-2 hover:transform hover:scale-105 transition-transform duration-300">
              <div className="p-3 bg-mustard-50 rounded-full text-mustard-600 mb-1 ring-1 ring-mustard-100">
                <Award className="w-5 h-5 md:w-6 md:h-6 text-navy-900" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-navy-900">14 Sertifikat</h3>
              <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wide">
                {lang === "id" ? "Bootcamp Profesional" : "Validated Credentials"}
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-2 p-2 hover:transform hover:scale-105 transition-transform duration-300">
              <div className="p-3 bg-mustard-50 rounded-full text-mustard-600 mb-1 ring-1 ring-mustard-100">
                <Terminal className="w-5 h-5 md:w-6 md:h-6 text-navy-900" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-navy-900">Multi-Bahasa</h3>
              <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wide">
                Python, PHP, Java, JS, C
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-2 p-2 hover:transform hover:scale-105 transition-transform duration-300">
              <div className="p-3 bg-mustard-50 rounded-full text-mustard-600 mb-1 ring-1 ring-mustard-100">
                <Wrench className="w-5 h-5 md:w-6 md:h-6 text-navy-900" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-[#ca8a04]">Lulusan SK</h3>
              <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wide">
                Universitas Tanjungpura
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-10 md:gap-12 lg:gap-20">
            
            {/* Left sidebar card widgets inside About section */}
            <div className="lg:w-5/12 order-2 lg:order-1 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                
                {/* Card 1: Education */}
                <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border-t-4 border-navy-900 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-navy-900 transition-colors">
                    <Award className="w-5 h-5 text-navy-900 group-hover:text-white" />
                  </div>
                  <h3 className="font-bold text-base md:text-lg mb-2 text-navy-900">
                    {lang === "id" ? "Pendidikan" : "Education"}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600">
                    Sistem Komputer, Universitas Tanjungpura
                  </p>
                  <p className="text-[10px] md:text-xs text-[#ca8a04] font-bold mt-2 bg-mustard-50 inline-block px-2 py-1 rounded">
                    {lang === "id" ? "Sarjana Lulusan Baru" : "Fresh Graduate Bachelor"}
                  </p>
                </div>

                {/* Card 2: Core Focus */}
                <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border-t-4 border-mustard-500 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-mustard-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-mustard-500 transition-colors">
                    <Cpu className="w-5 h-5 text-mustard-600 group-hover:text-white" />
                  </div>
                  <h3 className="font-bold text-base md:text-lg mb-2 text-navy-900">
                    {lang === "id" ? "Fokus Utama" : "Specialization"}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600">
                    {lang === "id"
                      ? "Pengembangan Web, Infrastruktur Jaringan, Internet of Things (IoT), Keamanan Siber"
                      : "Web Development, Network Engineering, IoT Systems, Cyber Security"}
                  </p>
                </div>

                {/* Unified full-width timeline certifications card in About */}
                <div className="col-span-1 md:col-span-2 bg-navy-900 text-white p-6 md:p-8 rounded-2xl shadow-xl relative overflow-hidden">
                  <h3 className="font-bold text-base md:text-lg mb-6 flex items-center gap-3 relative z-10 text-mustard-500">
                    <Award className="w-5 h-5 text-mustard-500 animate-pulse" />
                    Sertifikasi Resmi Course-Net Indonesia
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 text-xs text-gray-300">
                    
                    {/* Column 1: Web Development */}
                    <div>
                      <h4 className="text-[11px] font-bold text-mustard-500 uppercase tracking-wide mb-3 flex items-center gap-1 border-b border-navy-800 pb-1.5">
                        <span className="w-1.5 h-1.5 bg-mustard-500 rounded-full"></span>
                        Web Development (2026)
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 leading-tight">
                          <Check className="w-3.5 h-3.5 text-mustard-500 flex-shrink-0 mt-0.5" />
                          <span>Modern JS &amp; Full-Stack Architecture</span>
                        </li>
                        <li className="flex items-start gap-2 leading-tight">
                          <Check className="w-3.5 h-3.5 text-mustard-500 flex-shrink-0 mt-0.5" />
                          <span>JavaScript Algorithms Fundamentals</span>
                        </li>
                        <li className="flex items-start gap-2 leading-tight">
                          <Check className="w-3.5 h-3.5 text-mustard-500 flex-shrink-0 mt-0.5" />
                          <span>Basic Back-End Web Dev</span>
                        </li>
                        <li className="flex items-start gap-2 leading-tight">
                          <Check className="w-3.5 h-3.5 text-mustard-500 flex-shrink-0 mt-0.5" />
                          <span>Basic Front-End Web Dev</span>
                        </li>
                      </ul>
                    </div>

                    {/* Column 2: Network & Security Infrastructure */}
                    <div>
                      <h4 className="text-[11px] font-bold text-mustard-500 uppercase tracking-wide mb-3 flex items-center gap-1 border-b border-navy-800 pb-1.5">
                        <span className="w-1.5 h-1.5 bg-mustard-500 rounded-full"></span>
                        Network &amp; Security (2024)
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 leading-tight">
                          <Check className="w-3.5 h-3.5 text-mustard-500 flex-shrink-0 mt-0.5" />
                          <span>Network Engineering Advanced</span>
                        </li>
                        <li className="flex items-start gap-2 leading-tight">
                          <Check className="w-3.5 h-3.5 text-mustard-500 flex-shrink-0 mt-0.5" />
                          <span>Network Engineering Intermediate</span>
                        </li>
                        <li className="flex items-start gap-2 leading-tight">
                          <Check className="w-3.5 h-3.5 text-mustard-500 flex-shrink-0 mt-0.5" />
                          <span>Network Engineering Basic</span>
                        </li>
                        <li className="flex items-start gap-2 leading-tight">
                          <Check className="w-3.5 h-3.5 text-mustard-500 flex-shrink-0 mt-0.5" />
                          <span>Cyber Security Advanced</span>
                        </li>
                        <li className="flex items-start gap-2 leading-tight">
                          <Check className="w-3.5 h-3.5 text-mustard-500 flex-shrink-0 mt-0.5" />
                          <span>Cyber Security Intermediate</span>
                        </li>
                        <li className="flex items-start gap-2 leading-tight">
                          <Check className="w-3.5 h-3.5 text-mustard-500 flex-shrink-0 mt-0.5" />
                          <span>Cyber Security Basic</span>
                        </li>
                        <li className="flex items-start gap-2 leading-tight">
                          <Check className="w-3.5 h-3.5 text-mustard-500 flex-shrink-0 mt-0.5" />
                          <span>Basic Computer Network</span>
                        </li>
                      </ul>
                    </div>

                    {/* Column 3: Database & Programming */}
                    <div>
                      <h4 className="text-[11px] font-bold text-mustard-500 uppercase tracking-wide mb-3 flex items-center gap-1 border-b border-navy-800 pb-1.5">
                        <span className="w-1.5 h-1.5 bg-mustard-500 rounded-full"></span>
                        Database &amp; Language (2024)
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 leading-tight">
                          <Check className="w-3.5 h-3.5 text-mustard-500 flex-shrink-0 mt-0.5" />
                          <span>Microsoft SQL Server Database</span>
                        </li>
                        <li className="flex items-start gap-2 leading-tight">
                          <Check className="w-3.5 h-3.5 text-mustard-500 flex-shrink-0 mt-0.5" />
                          <span>Java Programming (OOP)</span>
                        </li>
                        <li className="flex items-start gap-2 leading-tight">
                          <Check className="w-3.5 h-3.5 text-mustard-500 flex-shrink-0 mt-0.5" />
                          <span>C Programming Language</span>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* Right column text content */}
            <div className="lg:w-7/12 order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-xs md:text-sm font-extrabold text-mustard-600 tracking-wider uppercase mb-3 md:mb-4">
                {d.aboutHeader}
              </h2>
              <h3 className="text-2xl md:text-4xl font-bold text-navy-900 mb-6 leading-tight">
                {d.aboutSub}
              </h3>
              
              <div className="space-y-4 md:space-y-6 text-slate-600 leading-relaxed text-sm md:text-lg text-left">
                <p>{d.aboutBody1}</p>
                <blockquote className="border-l-4 border-mustard-500 pl-6 italic text-navy-800 font-medium bg-white p-6 rounded-r-xl shadow-sm">
                  {d.aboutQuote}
                </blockquote>
                <p>{d.aboutBody2}</p>
              </div>

              <div className="mt-8 md:mt-10 flex justify-center lg:justify-start gap-4">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 text-white bg-navy-900 px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold hover:bg-navy-800 hover:shadow-lg transition-all transform hover:-translate-y-1 text-sm md:text-base pointer-events-auto cursor-pointer"
                >
                  <Mail className="w-4.5 h-4.5" />
                  {lang === "id" ? d.btnEmail : "Copy Email to Contact"}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Engineering Work Process */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-xl font-bold md:text-4xl tracking-tight text-navy-900 uppercase">
              {d.howHeader}
            </h2>
            <div className="w-16 md:w-24 h-1 md:h-1.5 mx-auto mt-3 md:mt-4 rounded-full bg-mustard-500"></div>
            <p className="mt-3 md:mt-4 text-xs md:text-base max-w-2xl mx-auto leading-relaxed px-4 text-slate-600">
              {d.howSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-mustard-500 group-hover:shadow-lg transition-all duration-300 relative">
                <div className="absolute -top-3 -right-2 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                  1
                </div>
                <div className="text-navy-900 group-hover:text-mustard-600 transition-colors">
                  <Search className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-3">
                {d.howStep1Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed px-2">
                {d.howStep1Desc}
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-mustard-500 group-hover:shadow-lg transition-all duration-300 relative">
                <div className="absolute -top-3 -right-2 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                  2
                </div>
                <div className="text-navy-900 group-hover:text-mustard-600 transition-colors">
                  <Terminal className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-3">
                {d.howStep2Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed px-2">
                {d.howStep2Desc}
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-mustard-500 group-hover:shadow-lg transition-all duration-300 relative">
                <div className="absolute -top-3 -right-2 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                  3
                </div>
                <div className="text-navy-900 group-hover:text-mustard-600 transition-colors">
                  <Code2 className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-3">
                {d.howStep3Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed px-2">
                {d.howStep3Desc}
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-mustard-500 group-hover:shadow-lg transition-all duration-300 relative">
                <div className="absolute -top-3 -right-2 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                  4
                </div>
                <div className="text-navy-900 group-hover:text-mustard-600 transition-colors">
                  <Wrench className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-3">
                {d.howStep4Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed px-2">
                {d.howStep4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (Dark Navy palette from Hanif's design) */}
      <section id="services" className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-xs md:text-sm font-extrabold text-mustard-500 tracking-wider uppercase mb-2">
              IT SKILLS PORTFOLIO
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              {lang === "id" ? "Layanan & Kemampuan Teknis" : "Wide-spectrum Technical Layoffs"}
            </h3>
            <div className="w-16 h-1 bg-mustard-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* Service 1: IoT Development */}
            <div className="bg-navy-800 p-6 md:p-8 rounded-2xl border border-navy-700 hover:border-mustard-500 transition-all duration-300 group h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 md:w-14 md:h-14 bg-navy-700 group-hover:bg-mustard-500 transition-colors duration-300 rounded-xl flex items-center justify-center mb-5">
                  <Cpu className="w-6 h-6 md:w-7 md:h-7 text-mustard-500 group-hover:text-navy-900 transition-colors" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-mustard-500 transition-colors">
                  Internet of Things (IoT) Prototyping
                </h3>
                <p className="text-gray-300 mb-6 text-xs md:text-sm leading-relaxed">
                  {lang === "id"
                    ? "Membangun ekosistem sirkuit pintar dengan sensor fisik, mikrokontroler, dan protokol komunikasi data untuk mengirimkan informasi sensor secara nirkabel."
                    : "Designing smart hardware solutions by integrating microcontrollers, physical sensors, and wireless communication protocols for telemetry data transmission."}
                </p>
              </div>
              <div className="border-t border-navy-700 pt-4 space-y-2 text-xs md:text-sm text-gray-400">
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-mustard-500 shrink-0" /> {lang === "id" ? "Integrasi sirkuit & sensor fisik" : "Hardware & physical sensor integration"}</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-mustard-500 shrink-0" /> {lang === "id" ? "Konfigurasi protokol komunikasi data" : "Data communication protocol setup"}</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-mustard-500 shrink-0" /> {lang === "id" ? "Visualisasi data sensor real-time" : "Real-time sensor data visualization"}</p>
              </div>
            </div>

            {/* Service 2: Web Development */}
            <div className="bg-navy-800 p-6 md:p-8 rounded-2xl border border-navy-700 hover:border-mustard-500 transition-all duration-300 group h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 md:w-14 md:h-14 bg-navy-700 group-hover:bg-mustard-500 transition-colors duration-300 rounded-xl flex items-center justify-center mb-5">
                  <Code2 className="w-6 h-6 md:w-7 md:h-7 text-mustard-500 group-hover:text-navy-900 transition-colors" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-mustard-500 transition-colors">
                  Full-Stack Web Development
                </h3>
                <p className="text-gray-300 mb-6 text-xs md:text-sm leading-relaxed">
                  {lang === "id"
                    ? "Mengembangkan website interaktif berskala responsif menggunakan modern HTML5, CSS3, JavaScript, PHP, dan Bootstrap."
                    : "Assembling reactive web layout systems using HTML/CSS, JavaScript, PHP, and Bootstrap frameworks."}
                </p>
              </div>
              <div className="border-t border-navy-700 pt-4 space-y-2 text-xs md:text-sm text-gray-400">
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-mustard-500 shrink-0" /> {lang === "id" ? "Responsive Frontend (Bootstrap)" : "Bootstrap responsive layout designs"}</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-mustard-500 shrink-0" /> {lang === "id" ? "Dashboard pemrosesan dinamis PHP/JS" : "Dynamic server controllers & routing logic"}</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-mustard-500 shrink-0" /> {lang === "id" ? "Integrasi database terstruktur relational MySQL" : "Relational MySQL database integration"}</p>
              </div>
            </div>

            {/* Service 3: Networks & Security */}
            <div className="bg-navy-800 p-6 md:p-8 rounded-2xl border border-navy-700 hover:border-mustard-500 transition-all duration-300 group h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 md:w-14 md:h-14 bg-navy-700 group-hover:bg-mustard-500 transition-colors duration-300 rounded-xl flex items-center justify-center mb-5">
                  <Shield className="w-6 h-6 md:w-7 md:h-7 text-mustard-500 group-hover:text-navy-900 transition-colors" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-mustard-500 transition-colors">
                  Network & Cyber Security
                </h3>
                <p className="text-gray-300 mb-6 text-xs md:text-sm leading-relaxed">
                  {lang === "id"
                    ? "Merancang topologi infrastruktur jaringan lokal, simulasi dengan Cisco/GNS3, serta evaluasi kematangan keamanan siber server."
                    : "Drafting local secure networks, configuring routers/switches inside simulators, and reinforcing server defensive hardening."}
                </p>
              </div>
              <div className="border-t border-navy-700 pt-4 space-y-2 text-xs md:text-sm text-gray-400">
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-mustard-500 shrink-0" /> {lang === "id" ? "Audit celah & pengamanan server database" : "Database server vulnerability defensive audit"}</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-mustard-500 shrink-0" /> {lang === "id" ? "Simulator Cisco Packet Tracer & GNS3" : "Advanced simulation with Packet Tracer & GNS3"}</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-mustard-500 shrink-0" /> {lang === "id" ? "Sertifikasi Cyber Security Advanced Course-Net" : "Network subnetting & gateway controls verified"}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-24 bg-white text-slate-800 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 text-center">
            <h2 className="text-xs md:text-sm font-extrabold text-[#ca8a04] tracking-wider uppercase mb-2">
              {lang === "id" ? "PENGALAMAN KERJA" : "WORK CHRONICLES"}
            </h2>
            <h3 className="text-2xl md:text-4xl font-extrabold text-navy-900 leading-tight">
              {lang === "id" ? "Pengalaman Profesional" : "Professional Experience"}
            </h3>
            <div className="w-16 h-1 bg-mustard-500 mx-auto mt-4 rounded-full" />
            <p className="mt-3 text-sm text-slate-500 max-w-xl mx-auto">
              {lang === "id"
                ? "Jejak praktik kerja dan kontribusi rekayasa teknologi dalam memecahkan masalah operasional."
                : "Real-world engineering contributions and software delivery track record."}
            </p>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-slate-200 ml-4 md:ml-6 mt-12 space-y-12">
            
            {/* Timeline marker */}
            <div className="absolute -left-[6px] top-1.5 w-3 h-3 bg-mustard-500 rounded-full ring-4 ring-white animate-pulse" />

            <div className="bg-slate-50 flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-2xl border border-slate-200 hover:border-mustard-500/50 hover:shadow-xl transition-all duration-300">
              {/* Left Column: Organization & Period info */}
              <div className="md:w-1/3 flex-shrink-0">
                <span className="inline-block px-3 py-1 bg-mustard-100 text-[#ca8a04] rounded-full text-[10px] font-bold uppercase tracking-wider mb-2">
                  {lang === "id" ? "Kerja Praktek (Magang)" : "Practical Work / Intern"}
                </span>
                <h4 className="text-lg font-bold text-navy-900">
                  Balai Desa Punggur Kecil
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-1">
                  <Calendar className="w-3.5 h-3.5 text-mustard-600" />
                  <span>Jul 2024 – Sep 2024</span>
                </div>
              </div>

              {/* Right Column: Roles, projects & details */}
              <div className="flex-grow space-y-4">
                <h5 className="text-base md:text-lg font-bold text-navy-900 flex items-center gap-2">
                  <div className="p-2 bg-white rounded-lg text-mustard-600 border border-slate-200">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  Web Developer
                </h5>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {lang === "id"
                    ? "Berperan aktif dalam merancang dan mengembangkan purwarupa Sistem Informasi Desa Punggur Kecil untuk membantu digitalisasi pelayanan publik, mempermudah pengurusan berkas masyarakat, serta meningkatkan kecepatan akses informasi bagi warga desa."
                    : "Actively designed and engineered the Punggur Kecil Village Information System portal to streamline public administrative services, automate citizen paperwork requests, and boost informational coverage."}
                </p>

                <ul className="space-y-2.5 text-xs md:text-sm text-slate-600 pt-2 border-t border-slate-200">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-mustard-500 mr-1.5 mt-1.5 flex-shrink-0" />
                    <span>
                      {lang === "id"
                        ? "Merancang dan membangun Sistem Informasi Desa Punggur Kecil secara end-to-end sebagai platform digitalisasi administrasi desa."
                        : "Designed and built the Punggur Kecil Village Information System from scratch as a central public service portal."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-mustard-500 mr-1.5 mt-1.5 flex-shrink-0" />
                    <span>
                      {lang === "id"
                        ? "Implementasi fitur pelayanan publik, portal berita desa, pengumuman, dan integrasi pangkalan data kependudukan berbasis web."
                        : "Implemented database-driven modules for citizen documentation, village news, and announcement systems."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-mustard-500 mr-1.5 mt-1.5 flex-shrink-0" />
                    <span>
                      {lang === "id"
                        ? "Meningkatkan efisiensi waktu pemrosesan berkas warga dan mempermudah akses informasi publik desa secara transparan."
                        : "Optimized internal administrative filing speed and enabled high public transparency for village residents."}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Showcase section */}
      <section id="projects" className="py-16 md:py-24 bg-slate-50 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 text-center">
            <h2 className="text-xs md:text-sm font-extrabold text-[#ca8a04] tracking-wider uppercase mb-2">
              {d.projectHeader}
            </h2>
            <h3 className="text-2xl md:text-4xl font-extrabold text-navy-900">
              {lang === "id" ? "Hasil Karya & Studi Kasus" : d.projectSub}
            </h3>
            <div className="w-16 h-1 bg-mustard-500 mx-auto mt-4 rounded-full" />
            <p className="mt-3 text-sm text-slate-500 max-w-xl mx-auto">
              {lang === "id"
                ? "Kumpulan proyek pilihan yang telah saya kembangkan untuk memberikan solusi digital yang fungsional dan terintegrasi."
                : "Real systems and products successfully compiled from scratch."}
            </p>
          </div>

          {/* Filtering category tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 h-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-200 active:scale-95 cursor-pointer ${
                  activeTab === cat.id
                    ? "bg-navy-900 text-white font-extrabold shadow-md scale-105"
                    : "bg-white text-slate-500 border border-slate-200 hover:bg-slate-100"
                }`}
                id={`filter-tab-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-200 p-6 flex flex-col h-full group hover:border-[#ca8a04]/40 hover:-translate-y-2 transition-all duration-300 justify-between"
                id={`project-card-${project.id}`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className={`text-[10px] md:text-xs font-mono font-bold px-3 py-1 rounded-full border ${getCategoryBadgeClass(project.category)}`}>
                      {getCategoryLabel(project.category)}
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-bold">{project.year}</span>
                  </div>

                  <h4 className="text-lg md:text-xl font-bold text-navy-900 group-hover:text-mustard-600 transition-colors">
                    {lang === "id" ? project.title : project.titleEn}
                  </h4>

                  <p className="text-xs md:text-sm text-slate-500 italic border-l-2 border-mustard-500 pl-3 leading-relaxed">
                    "{lang === "id" ? project.subtitle : project.subtitleEn}"
                  </p>

                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed text-left line-clamp-4">
                    {lang === "id" ? project.description : project.descriptionEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 space-y-4">
                  {/* Target & Strategy specs inside card */}
                  <div className="text-[11px] grid grid-cols-2 gap-2 text-slate-500">
                    <div>
                      <span className="block font-bold text-[9px] uppercase tracking-wide text-slate-400">{d.projImpact}</span>
                      <span className="text-navy-900 font-bold block truncate">
                        {lang === "id" ? project.impact : project.impactEn}
                      </span>
                    </div>
                    <div>
                      <span className="block font-bold text-[9px] uppercase tracking-wide text-slate-400">Tech Stack</span>
                      <span className="text-mustard-600 font-semibold block truncate">{project.tech.slice(0, 3).join(", ")}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="flex-1 inline-flex justify-center items-center gap-1 bg-navy-900 hover:bg-navy-800 text-white py-2.5 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                      id={`read-more-${project.id}`}
                    >
                      <Search className="w-3.5 h-3.5" />
                      {lang === "id" ? "Spesifikasi Sistem" : "Inspect System Spec"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills list section */}
      <section id="skills" className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 text-center">
            <h2 className="text-xs md:text-sm font-extrabold text-mustard-500 tracking-wider uppercase mb-2">
              KNOWLEDGE MATRICES
            </h2>
            <h3 className="text-2xl md:text-4xl font-extrabold text-white mt-1">
              {d.skillsHeader}
            </h3>
            <div className="w-16 h-1 bg-mustard-500 mx-auto mt-4 rounded-full" />
            <p className="mt-3 text-sm text-gray-400 max-w-xl mx-auto">
              {lang === "id"
                ? "Daftar keahlian teknis, bahasa pemrograman, database, serta alat bantu yang saya gunakan untuk membangun solusi IT."
                : "A verified list of skills and tools supporting professional delivery."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
            
            {/* Category 1: Hard Skills */}
            <div className="bg-navy-800 p-6 rounded-2xl border border-navy-700 hover:border-mustard-500/50 transition-colors">
              <h4 className="text-lg font-extrabold text-mustard-500 mb-6 flex items-center gap-2.5">
                <div className="p-2 bg-navy-900 rounded-xl text-mustard-500">
                  <Cpu className="w-5 h-5" />
                </div>
                Hard Skills
              </h4>
              <div className="flex flex-wrap gap-2 text-left justify-start">
                {hardSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs md:text-sm text-gray-300 bg-navy-900 px-3.5 py-2 rounded-xl border border-navy-700 hover:border-mustard-500 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 2: Soft Skills */}
            <div className="bg-navy-800 p-6 rounded-2xl border border-navy-700 hover:border-[#14b8a6]/50 transition-colors">
              <h4 className="text-lg font-extrabold text-mustard-500 mb-6 flex items-center gap-2.5">
                <div className="p-2 bg-navy-900 rounded-xl text-mustard-500">
                  <Award className="w-5 h-5" />
                </div>
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-2 text-left justify-start">
                {softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs md:text-sm text-gray-300 bg-navy-900 px-3.5 py-2 rounded-xl border border-navy-700 hover:border-mustard-500 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 3: Simulators & Tools */}
            <div className="bg-navy-800 p-6 rounded-2xl border border-navy-700 hover:border-[#06b6d4]/50 transition-colors">
              <h4 className="text-lg font-extrabold text-mustard-500 mb-6 flex items-center gap-2.5">
                <div className="p-2 bg-navy-900 rounded-xl text-mustard-500">
                  <Wrench className="w-5 h-5" />
                </div>
                Tools
              </h4>
              <div className="flex flex-wrap gap-2 text-left justify-start">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="text-xs md:text-sm text-gray-300 bg-navy-900 px-3.5 py-2 rounded-xl border border-navy-700 hover:border-mustard-500 hover:text-white transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Recruiter Faq / Questions Section */}
      <section id="faq" className="py-16 md:py-24 bg-white text-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          
          <div className="mb-12 text-center">
            <h2 className="text-xs md:text-sm font-extrabold text-[#ca8a04] tracking-wider uppercase mb-2">
              RECRUITMENT FAQ
            </h2>
            <h3 className="text-2xl md:text-4xl font-extrabold text-navy-900 mt-1">
              {d.faqSub}
            </h3>
            <div className="w-16 h-1 bg-mustard-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            {[
              { q: d.faqQ1, a: d.faqA1 },
              { q: d.faqQ2, a: d.faqA2 },
              { q: d.faqQ3, a: d.faqA3 },
              { q: d.faqQ4, a: d.faqA4 },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-5 md:p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className={`font-bold text-base md:text-lg ${expandedFaq === index ? "text-mustard-600" : "text-navy-900"}`}>
                    {faq.q}
                  </span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-mustard-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="p-5 md:p-6 pt-0 text-slate-600 text-sm md:text-base border-t border-slate-200/50 leading-relaxed text-left">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiter Call to Action (Bright yellow/mustard palette background exactly like original) */}
      <section id="recruiter-cta" className="py-20 md:py-28 bg-gradient-to-br from-mustard-500 to-mustard-600 text-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#1e293b 1.5px, transparent 1.5px)", backgroundImageSize: "24px 24px" }} />
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-navy-900 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider shadow-lg border border-[#0f172a]/20">
            💼 OPEN FOR OPPORTUNITIES
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-6 leading-tight drop-shadow-sm">
            {d.recruiterTitle}
          </h2>

          <p className="text-navy-900 text-base md:text-xl max-w-3xl mx-auto mb-10 font-medium leading-relaxed opacity-90">
            {d.recruiterSub}
          </p>

          <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-2xl inline-block w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-white/50 p-4 md:p-6 rounded-xl border border-white/50 shadow-inner">
              <a
                href="mailto:faishalkc@gmail.com"
                className="w-full sm:w-auto bg-navy-900 text-white font-bold py-3.5 px-8 rounded-xl hover:bg-navy-800 transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <Mail className="w-5 h-5 text-white" />
                {d.btnEmail}
              </a>
              <a
                href="https://wa.me/6289521356200?text=Halo%20Faishal,%20saya%20tertarik%20untuk%20merekrut%20Anda."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-white text-navy-900 font-bold py-3.5 px-8 rounded-xl hover:bg-gray-100 transition-all border-2 border-white hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <Phone className="w-5 h-5 text-[#25D366] fill-[#25D366] border-none" />
                {d.btnWhatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Styled Footer */}
      <footer className="bg-[#0b1329] text-white pt-12 pb-8 border-t border-navy-800 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            <div className="space-y-4">
              <h4 className="font-extrabold text-xl md:text-2xl text-white tracking-widest uppercase">
                FAISHAL<span className="text-mustard-500">HADY</span>
              </h4>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-xs">
                {lang === "id"
                  ? "Lulusan Sistem Komputer Universitas Tanjungpura yang siap berkontribusi dalam rekayasa perangkat lunak, sistem IoT, serta infrastruktur IT jaringan."
                  : "Graduate of Computer Systems from Universitas Tanjungpura, prepared to deliver robust software engineering, IoT systems, and network infrastructure solutions."}
              </p>
              
              <div className="pt-2 flex items-center gap-4">
                <a
                  href="mailto:faishalkc@gmail.com"
                  className="w-9 h-9 rounded-full bg-navy-800 border border-navy-700 flex items-center justify-center text-gray-400 hover:bg-mustard-500 hover:text-navy-900 transition-colors"
                  aria-label="Email Me"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/6289521356200"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-navy-800 border border-navy-700 flex items-center justify-center text-gray-400 hover:bg-mustard-500 hover:text-navy-900 transition-colors"
                  aria-label="Contact on WhatsApp"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-sm text-mustard-500 uppercase tracking-widest mb-4">
                {lang === "id" ? "Tautan Pintar" : "Quick Navigation"}
              </h5>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-400">
                <li><a href="#about" className="hover:text-mustard-500 transition-colors">{lang === "id" ? "Tentang Saya" : "About Me"}</a></li>
                <li><a href="#services" className="hover:text-mustard-500 transition-colors">{lang === "id" ? "Layanan" : "Services"}</a></li>
                <li><a href="#experience" className="hover:text-mustard-500 transition-colors">{lang === "id" ? "Pengalaman" : "Experience"}</a></li>
                <li><a href="#projects" className="hover:text-mustard-500 transition-colors">{lang === "id" ? "Proyek" : "Projects"}</a></li>
                <li><a href="#skills" className="hover:text-mustard-500 transition-colors">{lang === "id" ? "Keahlian" : "Skills"}</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-sm text-mustard-500 uppercase tracking-widest mb-4">
                {lang === "id" ? "Kategori Proyek" : "Field Matrix"}
              </h5>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-400">
                <li>{lang === "id" ? "📟 Prototipe Embedded & IoT" : "📟 Embedded & IoT Prototyping"}</li>
                <li>{lang === "id" ? "🕸️ Pengembangan Web Full-Stack" : "🕸️ Fullstack Web Services"}</li>
                <li>{lang === "id" ? "📊 Otomasi Web Scraping Python" : "📊 Python Data Extraction"}</li>
                <li>{lang === "id" ? "📱 Aplikasi Seluler Interaktif" : "📱 Interactive Mobile Apps"}</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-sm text-mustard-500 uppercase tracking-widest mb-4">
                {lang === "id" ? "Hubungi Saya" : "Direct Coordinates"}
              </h5>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-400 font-mono">
                <li className="flex items-center gap-2">
                  <Phone className="w-4.5 h-4.5 text-mustard-500 shrink-0" />
                  +62 895-2135-6200
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4.5 h-4.5 text-mustard-500 shrink-0" />
                  faishalkc@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4.5 h-4.5 text-mustard-500 shrink-0" />
                  Pontianak, Indonesia
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-navy-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-4">
            <p className="text-center">© 2026 {d.rights}</p>
            <p className="text-slate-600">Sistem Komputer, Universitas Tanjungpura</p>
          </div>
        </div>
      </footer>

      {/* Structured Details Modal Overlay */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm p-4 flex items-center justify-center"
            id="specification-modal"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white text-slate-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-slate-200"
            >
              {/* Modal Banner Area */}
              <div className="bg-navy-900 text-white p-6 relative">
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 bg-navy-800 hover:bg-navy-700 text-gray-300 p-1.5 rounded-full transition-colors cursor-pointer"
                  id="close-modal-btn"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="space-y-1">
                  <span className={`inline-block text-[10px] font-mono font-bold px-3 py-1 rounded-full border ${getCategoryBadgeClass(activeProject.category)}`}>
                    {getCategoryLabel(activeProject.category)}
                  </span>
                  <p className="text-xs text-slate-400 font-mono mt-2">
                    {lang === "id" ? `Studi Kasus Proyek • Tahun ${activeProject.year}` : `Project Case Study • Year ${activeProject.year}`}
                  </p>
                  <h3 className="text-2xl font-extrabold text-white mt-1">
                    {lang === "id" ? activeProject.title : activeProject.titleEn}
                  </h3>
                </div>
              </div>

              {/* Modal Body Contents */}
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{d.projTarget}</h4>
                  <p className="text-sm md:text-base font-semibold text-navy-900 leading-relaxed border-l-3 border-mustard-500 pl-3">
                    {lang === "id" ? activeProject.subtitle : activeProject.subtitleEn}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Aspek Sistem &amp; Deskripsi</h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed text-left">
                    {lang === "id" ? activeProject.description : activeProject.descriptionEn}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Teknologi Tersemat (Tech Stack)</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.tech.map((t, idx) => (
                        <span key={idx} className="bg-slate-100 text-navy-900 text-xs font-bold px-2.5 py-1 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Hasil Kunci / Outcomes</h4>
                    <p className="text-xs md:text-sm font-bold text-slate-700 leading-relaxed">
                      {lang === "id" ? activeProject.impact : activeProject.impactEn}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Action Footer */}
              <div className="bg-slate-50 p-5 md:p-6 border-t border-slate-100 flex justify-end gap-3 rounded-b-3xl">
                <button
                  onClick={() => setActiveProject(null)}
                  className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold px-5 py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
                >
                  {lang === "id" ? "Tutup Jendela" : "Close Specs"}
                </button>
                <a
                  href="https://github.com/faishalkc"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Code2 className="w-4 h-4 text-mustard-500" />
                  {lang === "id" ? "Lihat Github" : "Inspect GitHub"}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
