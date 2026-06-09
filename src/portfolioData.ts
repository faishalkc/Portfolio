export interface Project {
  id: string;
  year: string;
  category: "web" | "iot" | "mobile" | "data";
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  description: string;
  descriptionEn: string;
  tech: string[];
  link?: string;
  impact?: string;
  impactEn?: string;
}

export interface Certification {
  year: string;
  title: string;
  provider: string;
}

export const certifications: Certification[] = [
  // 2026
  { year: "2026", title: "Modern JavaScript Fundamentals & Full-Stack Architecture", provider: "Course-Net Indonesia" },
  { year: "2026", title: "JavaScript Algorithm Fundamentals", provider: "Course-Net Indonesia" },
  { year: "2026", title: "Basic Back-End Web Development", provider: "Course-Net Indonesia" },
  { year: "2026", title: "Basic Front-End Web Development", provider: "Course-Net Indonesia" },
  // 2024
  { year: "2024", title: "Cyber Security Advanced", provider: "Course-Net Indonesia" },
  { year: "2024", title: "Cyber Security Intermediate", provider: "Course-Net Indonesia" },
  { year: "2024", title: "Cyber Security Basic", provider: "Course-Net Indonesia" },
  { year: "2024", title: "Network Engineering Advanced", provider: "Course-Net Indonesia" },
  { year: "2024", title: "Network Engineering Intermediate", provider: "Course-Net Indonesia" },
  { year: "2024", title: "Network Engineering Basic", provider: "Course-Net Indonesia" },
  { year: "2024", title: "Basic Computer Network", provider: "Course-Net Indonesia" },
  { year: "2024", title: "Microsoft SQL Server Database", provider: "Course-Net Indonesia" },
  { year: "2024", title: "Java Programming Language (OOP)", provider: "Course-Net Indonesia" },
  { year: "2024", title: "C Programming Language", provider: "Course-Net Indonesia" },
];

export const projects: Project[] = [
  {
    id: "gas-metana-coap",
    year: "2025",
    category: "iot",
    title: "Sistem Pemantauan Gas Metana Lahan Gambut CoAP",
    titleEn: "CoAP-Based Peatland Methane Gas Monitoring System",
    subtitle: "Situs IoT Pemantauan Gas Metana Skala Real-time",
    subtitleEn: "Real-time Methane Gas IoT Monitoring Dashboard",
    description: "Membuat sistem pemantauan gas metana pada lahan gambut di Desa Sepuk Laut berbasis IoT. Perangkat keras dilengkapi dengan sensor gas metana yang terhubung ke web server menggunakan protokol CoAP (Constrained Application Protocol). Sistem ini mengirimkan data konsentrasi gas secara efisien pada jaringan berdaya rendah, mempermudah mitigasi bahaya kebakaran lahan gambut.",
    descriptionEn: "Designed and built an IoT-based methane gas monitoring system for peatlands in Sepuk Laut village. Connected physical methane sensors to a custom web dashboard utilizing the CoAP (Constrained Application Protocol) for optimal low-power data transmission. It enables environment researchers to monitor peatland hazard conditions in real-time.",
    tech: ["Internet of Things", "CoAP Protocol", "Arduino IDE", "HTML & CSS", "JavaScript", "PHP", "MySQL"],
    impact: "Efisien dalam pengiriman data hemat daya pada area minim sinyal.",
    impactEn: "Outstanding low-power telemetry performance in remote peatlands with weak cellular networks."
  },
  {
    id: "punggur-kecil",
    year: "2024",
    category: "web",
    title: "Sistem Informasi Desa Punggur Kecil",
    titleEn: "Punggur Kecil Village Information System",
    subtitle: "Website Layanan Publik & Digitalisasi Desa",
    subtitleEn: "Public Service Website & Village Digitalization",
    description: "Mengembangkan situs web Sistem Informasi Desa untuk Punggur Kecil guna mendukung digitalisasi layanan publik desa dan meningkatkan akses masyarakat terhadap informasi. Menyediakan fitur profil desa, pembaruan berita, pengumuman publik, serta data kependudukan masyarakat dengan antarmuka yang sangat ramah pengguna (user-friendly). Membantu meningkatkan transparansi pemerintahan desa serta mempermudah komunikasi timbale balik antar warga.",
    descriptionEn: "Developed a comprehensive Village Information System website for Punggur Kecil village to support digital public services and improve information accessibility. The system streamlines profile dissemination, community announcements, village news, and data organization with a user-friendly layout. It helps enhance village administrative transparency and citizens' engagement.",
    tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
    impact: "Sukses diimplementasikan dan meningkatkan efisiensi administrasi desa.",
    impactEn: "Successfully deployed, accelerating village service requests and transparency."
  },
  {
    id: "gas-suhu-pisang",
    year: "2023",
    category: "iot",
    title: "Sistem Monitoring Gas dan Suhu Buah Pisang",
    titleEn: "Banana Ripening Gas & Temperature Monitoring System",
    subtitle: "Sistem Monitoring IoT untuk Kematangan Pisang",
    subtitleEn: "IoT Tracker for Closed Chamber Ripening Process",
    description: "Membuat situs monitoring kadar gas (etilen) dan suhu buah pisang berbasis Internet of Things. Sensor terintegrasi ke dalam wadah penyimpanan tertutup berisi pisang, sehingga perubahan kimiawi selama proses pematangan pisang dapat terpantau secara real-time demi mengontrol kualitas optimal buah.",
    descriptionEn: "Developed an IoT-based gas and temperature telemetry system to monitor banana ripening processes. Physical sensors are enclosed inside tight storage containers to record gas concentration changes and temperature dynamically, preventing premature decay and preserving product quality.",
    tech: ["Internet of Things", "Arduino IDE", "Gas & Temp Sensors", "PHP", "MySQL", "Chart.js"],
    impact: "Mempermudah distibusi pangan dalam mengontrol kematangan buah.",
    impactEn: "Ensures precise ripening controls for food distribution industries."
  },
  {
    id: "tokopedia-scraping",
    year: "2023",
    category: "data",
    title: "Tokopedia Product Web Scraper",
    titleEn: "Tokopedia Product Intelligence Web Scraper",
    subtitle: "Aplikasi Scraping Data Produk Otomatis",
    subtitleEn: "Automated Corporate Data Scraper",
    description: "Membuat aplikasi otomatisasi untuk mengambil data produk secara massal dari situs e-commerce Tokopedia berdasarkan kata kunci pencarian. Dilengkapi dengan filter harga, rating, ulasan, serta otomatis mengumpulkan tautan aktif produk secara terstruktur.",
    descriptionEn: "Programmed a scraping script and GUI to capture mass product data from Tokopedia marketplace. Users can input any product keyword and specify filter options like rating, price, and location, outputting a structured dataset containing links and pricing trends.",
    tech: ["Python", "BeautifulSoup", "Selenium", "Pandas", "CSV Export"],
    impact: "Menghemat waktu riset kompetitor hingga 95% secara otomatis.",
    impactEn: "Saves up to 95% of manual market competitor analysis time."
  },
  {
    id: "quiz-mobile",
    year: "2023",
    category: "mobile",
    title: "Quiz Mobile App",
    titleEn: "Database-Driven Mobile Quiz App",
    subtitle: "Aplikasi Android Kuis Interaktif dengan Soal Acak",
    subtitleEn: "Android Interactive Game with Random Questions Engine",
    description: "Membuat aplikasi mobile quiz interaktif berbasis Android. Aplikasi ini melayani pengacakan soal kuis secara instan dan dinamis, yang secara langsung terhubung ke database cloud untuk menyinkronkan pertanyaan kuis, riwayat skor, serta profil user.",
    descriptionEn: "Created a robust mobile quiz application for Android. Features a server-connected random question generator that pulls data dynamically from a centralized database. Supports scoring analytics, user login profiles, and smooth question transit screens.",
    tech: ["Flutter", "Dart", "PHP API", "MySQL Database", "Android Studio"],
    impact: "Sangat interaktif untuk digunakan sebagai media edukasi instan.",
    impactEn: "Great engagement rates when tested for online educational matches."
  },
  {
    id: "covid-tracker",
    year: "2022",
    category: "web",
    title: "Covid-19 Tracker",
    titleEn: "Global Covid-19 Analytics Tracker",
    subtitle: "Sistem Pemantauan Kasus Covid-19 Global",
    subtitleEn: "Worldwide Pandemic Information portal",
    description: "Mengembangkan aplikasi web berbasis Python yang responsif untuk mencatat dan memantau status persebaran pasien positif, aktif, sembuh, dan meninggal akibat Covid-19 dari berbagai penjuru negara serta wilayah lokal di dunia menggunakan integrasi API data publik.",
    descriptionEn: "Coded a fully responsive Python-based tracking dashboard using public health APIs to display, analyze, and map positive, active, recovered, and fatal pandemic patient demographics across worldwide countries and local states.",
    tech: ["Python", "HTML5", "CSS3", "Fetch API", "AmCharts"],
    impact: "Menyediakan informasi visual darurat yang cepat dipahami.",
    impactEn: "Provided quick visual statistics about pandemic hot spots during academic reviews."
  },
  {
    id: "coffee-toffee",
    year: "2022",
    category: "web",
    title: "Coffee Toffee Landing Page",
    titleEn: "Coffee Toffee Premium Landing Page",
    subtitle: "Visual Web Pengenalan Franchise & Menu Kopinya",
    subtitleEn: "Franchise Introduction and Interactive Menu Showcase",
    description: "Membuat halaman landing page interaktif dengan desain visual premium untuk mengenalkan brand franchise kopi 'Coffee Toffee'. Dilengkapi dengan menu andalan, galeri foto suasana estetik, ulasan pelanggan, serta peta kontak lokasi interaktif.",
    descriptionEn: "Designed and built an attractive, conversion-oriented landing page for the coffee franchise 'Coffee Toffee' showcasing its signature menu, high-resolution aesthetic galleries, reviews, and interactive contact forms.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "AOS Library"],
    impact: "Desain visual modern dan interaktif meningkatkan ketertarikan brand.",
    impactEn: "High-fidelity modern design that boosts brand aesthetic value of franchise assets."
  }
];

export const hardSkills = [
  "Web Development",
  "JavaScript",
  "Python",
  "PHP",
  "MySQL",
  "Microsoft SQL Server",
  "Network Infrastructure",
  "Cyber Security",
  "Internet of Things (IoT)",
  "Java",
  "C",
  "Flutter",
  "Design"
];

export const softSkills = [
  "Problem Solving",
  "Adaptability",
  "Teamwork",
  "Time Management",
  "Communication",
  "Multitasking"
];

export const tools = [
  "Visual Studio Code",
  "Android Studio",
  "Arduino IDE",
  "GitHub",
  "GNS3",
  "Cisco Packet Tracer",
  "PhpMyAdmin",
  "Microsoft SQL Server Manager",
  "Linux OS",
  "Windows OS",
  "Canva",
  "Microsoft Office"
];

export const translations = {
  id: {
    navAbout: "Tentang Saya",
    navCert: "Layanan",
    navProject: "Proyek",
    navSkill: "Keahlian",
    navContact: "Hubungi",
    navButton: "Hubungi Saya",
    flag: "ID",
    heroBadge: "Tersedia untuk Freelance & Full-time",
    heroTitle1: "Solusi IT",
    heroTitle2: "untuk Segala",
    heroTitle3: "Kebutuhan",
    heroBody: "Lulusan Sistem Komputer di Universitas Tanjungpura dengan minat dan kompetensi di bidang Pengembangan Web, Infrastruktur Jaringan, teknologi Internet of Things (IoT), dan Keamanan Siber.",
    ctaCall: "Hubungi via WhatsApp",
    ctaPortfolio: "Lihat Proyek Pilihan",
    badgeFloatTitle: "Sistem IoT Lahan Gambut",
    badgeFloatSub: "Metana Telemetri CoAP",
    badgeFloatValue: "Real-time",
    statCert: "Sertifikasi Profesional",
    statProject: "Proyek Rekayasa",
    statLanguage: "Bahasa Pemrograman",
    statTools: "Alat Kerja & Simulator",
    aboutHeader: "Tentang Saya",
    aboutSub: "Sarjana Sistem Komputer dengan Pola Pikir Solusi Terintegrasi",
    aboutQuote: "\"Latar belakang sistem komputer membentuk cara berpikir saya: menyelaraskan pembuatan aplikasi web, keandalan infrastruktur jaringan, kepraktisan sensor Internet of Things (IoT), dan kekuatan perlindungan keamanan siber.\"",
    aboutBody1: "Halo! Saya Muhammad Faishal Hady. Sebagai lulusan baru Sistem Komputer dari Universitas Tanjungpura, saya mendalami pembuatan aplikasi web yang fungsional dan konfigurasi infrastruktur teknologi sejak masa kuliah.",
    aboutBody2: "Melalui berbagai sertifikasi Course-Net Indonesia dan proyek nyata, saya telah merancang sistem terintegrasi yang siap mendukung kelancaran operasional teknologi informasi di organisasi Anda.",
    cvButton: "Unduh Riwayat Hidup / CV",
    howHeader: "Bagaimana Saya Bekerja",
    howSub: "Pendekatan sistematis dan terstruktur dalam merancang, membangun, dan mengamankan solusi infrastruktur IT serta aplikasi terintegrasi.",
    howStep1Title: "1. Analisis & Perencanaan",
    howStep1Desc: "Mengidentifikasi kebutuhan bisnis, merancang alur kerja aplikasi, skema basis data, serta memetakan skenario instalasi yang aman.",
    howStep2Title: "2. Pengembangan & Integrasi",
    howStep2Desc: "Menyusun baris kode program yang bersih, mengonfigurasi komponen server atau infrastruktur jaringan, dan menghubungkan seluruh elemen sistem.",
    howStep3Title: "3. Pengujian & Keamanan",
    howStep3Desc: "Melacak kegagalan (debugging), menguji keandalan perangkat lunak/perangkat keras, serta memastikan konfigurasi terlindungi dari celah kerentanan.",
    howStep4Title: "4. Penerapan & Pemeliharaan",
    howStep4Desc: "Meluncurkan sistem ke lingkungan operasional langsung, menjamin prosedur pencadangan data otomatis, serta memantau kinerja secara konsisten.",
    projectHeader: "Proyek & Hasil Karya",
    projectSub: "Studi kasus rekayasa, rancangan IoT, dan integrasi perangkat lunak.",
    tabAll: "Semua Kategori",
    tabWeb: "Web Development",
    tabIot: "Internet of Things & Embedded",
    tabMobile: "Aplikasi Mobile",
    tabData: "Riset Data & Scraping",
    projTarget: "Tujuan Sistem",
    projStrategy: "Metodologi & Strategi",
    projImpact: "Dampak & Hasil",
    skillsHeader: "Peta Keahlian & Teknologi",
    skillsSub: "Rangkaian hard skill, soft skill, serta peralatan/simulator yang dikuasai untuk mendukung ekosistem kerja IT modern.",
    faqHeader: "Pertanyaan Rekruter",
    faqSub: "Hal yang sering ditanyakan oleh HR & Tech Recruiter mengenai kompetensi kerja saya.",
    faqQ1: "Apakah Anda menguasai Hardware dan Software sekaligus?",
    faqA1: "Ya. Sebagai lulusan Sistem Komputer, saya menguasai hardware (seperti mikrokontroler Arduino/ESP32 dan sistem sensor IoT) sekaligus software (pemrograman web dengan PHP/Node.js dan database MySQL) untuk membangun sistem pemantauan yang terintegrasi.",
    faqQ2: "Bagaimana keterampilan Anda di bidang Jaringan dan Keamanan Siber?",
    faqA2: "Saya memiliki sertifikasi profesional dari Course-Net Indonesia untuk Jaringan dan Keamanan Siber (tingkat dasar hingga mahir). Saya menguasai dasar pengelolaan jaringan lokal (routing, gateway), simulasi topologi Cisco Packet Tracer, serta dasar pengamanan database dan server dari serangan siber.",
    faqQ3: "Seberapa jauh penguasaan pemrograman web Full-Stack Anda?",
    faqA3: "Sangat siap untuk kebutuhan digital. Saya menguasai HTML, CSS, Tailwind, dan React di sisi Front-End, serta PHP, Node.js/Express, dan database MySQL/SQL Server di sisi Back-End untuk membangun aplikasi web yang fungsional dan aman.",
    faqQ4: "Apakah Anda siap bekerja on-site di luar kota Pontianak?",
    faqA4: "Sangat siap. Meskipun berdomisili di Pontianak, saya sangat fleksibel untuk merelokasi diri dan siap ditenpatkan bekerja secara langsung (on-site) di kota mana pun sesuai kebutuhan perusahaan.",
    recruiterTitle: "Tertarik Merekrut Faishal?",
    recruiterSub: "Saya siap dihubungi kapan saja untuk wawancara teknis, diskusi peluang kerja full-time, maupun proyek lepas (freelance). Hubungi saya sekarang!",
    btnEmail: "Kirim Surat Elektronik / Email",
    btnWhatsapp: "Hubungi via WhatsApp",
    rights: "Muhammad Faishal Hady. Hak Cipta Dilindungi.",
    viewFile: "Lihat Kode Proyek",
    sourceCode: "Kode Sumber Terbuka"
  },
  en: {
    navAbout: "About Me",
    navCert: "Services",
    navProject: "Projects",
    navSkill: "Skills Map",
    navContact: "Hire",
    navButton: "Let's Connect",
    flag: "EN",
    heroBadge: "Available for Freelance & Full-time",
    heroTitle1: "IT Solutions",
    heroTitle2: "for Every",
    heroTitle3: "Need",
    heroBody: "A Computer Systems graduate from Tanjungpura University, focused on Web Development, Network Infrastructure, Internet of Things (IoT) technology, and Cyber Security.",
    ctaCall: "Chat on WhatsApp",
    ctaPortfolio: "View Featured Systems",
    badgeFloatTitle: "Peatland Methane IoT",
    badgeFloatSub: "Low-Power CoAP Protocol",
    badgeFloatValue: "Real-time",
    statCert: "Professional Certifications",
    statProject: "Engineering Projects",
    statLanguage: "Coding Languages",
    statTools: "Simulators & Tools",
    aboutHeader: "About Me",
    aboutSub: "Computer Systems Graduate with an Integrated Solutions Mindset",
    aboutQuote: "\"My computer systems background shapes my way of thinking: aligning web applications, reliable network infrastructures, practical Internet of Things (IoT) sensors, and strong cyber security defenses.\"",
    aboutBody1: "Hello! I am Muhammad Faishal Hady. As a Computer Systems fresh graduate from Tanjungpura University, I have focused on building functional web applications and configuring core technology infrastructures since college.",
    aboutBody2: "Through professional Course-Net Indonesia certifications and hand-on projects, I have designed integrated systems prepared to support seamless information technology workflows in your organization.",
    cvButton: "Download Resume / Curriculum Vitae",
    howHeader: "How I Work",
    howSub: "A systematic and structured approach to designing, building, and securing IT infrastructure and integrated applications.",
    howStep1Title: "1. Analysis & Planning",
    howStep1Desc: "Identifying key requirements, structuring user workflows, drafting data models, and mapping out secure installation plans.",
    howStep2Title: "2. Development & Integration",
    howStep2Desc: "Writing clean and modular code, configuring server nodes or network components, and binding all elements into a unified system.",
    howStep3Title: "3. Testing & Security",
    howStep3Desc: "Conducting systematic debugging, validating operational reliability, and running vulnerability checks on configurations.",
    howStep4Title: "4. Deployment & Maintenance",
    howStep4Desc: "Deploying solutions to production environments, setting up secure data backups, and performing proactive diagnostic monitoring.",
    projectHeader: "Engineering Cases & Portfolio",
    projectSub: "Demonstrated real projects in IoT prototyping, responsive interfaces, and digital automation.",
    tabAll: "All Fields",
    tabWeb: "Web Interfaces",
    tabIot: "IoT & Embedded Prototyping",
    tabMobile: "Mobile Apps",
    tabData: "Data Scraping & Analysis",
    projTarget: "System Objective",
    projStrategy: "Methodology & Tech",
    projImpact: "System Impact & Result",
    skillsHeader: "Skills & Toolbox Map",
    skillsSub: "My hard skills, analytical capabilities, and hardware simulators tailored for modern corporate IT setups.",
    faqHeader: "HR & Tech Recruiter FAQs",
    faqSub: "Answering critical questions about my background, work readiness, and core technical competencies.",
    faqQ1: "Do you master both hardware systems and software architectures?",
    faqA1: "Yes. As a Computer Systems graduate, I handle both hardware (microcontrollers like Arduino/ESP32 and integrated IoT sensors) and software (web development with PHP/Node.js and MySQL) to build fully cohesive monitoring systems.",
    faqQ2: "How are your skills in computer networking and cybersecurity?",
    faqA2: "I hold professional credentials from Course-Net Indonesia in both fields. I am skilled in local network management (routing, gateway setups), Cisco Packet Tracer simulation, and basic security defenses for database and web server environments.",
    faqQ3: "How proficient are you in Full-Stack Web Development?",
    faqA3: "Highly prepared for web demands. I master HTML, CSS, Tailwind, and React on the Front-End, paired with PHP, Node.js/Express, and MySQL/SQL Server databases on the Back-End to build safe and fully functional applications.",
    faqQ4: "Are you ready to relocate or work on-site outside of Pontianak?",
    faqA4: "Absolutely ready. Although currently based in Pontianak, I am highly flexible and prepared to relocate or work on-site in any city to support your company's operational requirements.",
    recruiterTitle: "Interested in hiring Faishal?",
    recruiterSub: "I am available immediately for professional inquiries, technical interviews, full-time engineering placements, or custom IoT/Web development contracts. Let's build together!",
    btnEmail: "Send Inquiries via Email",
    btnWhatsapp: "Direct WhatsApp Message",
    rights: "Muhammad Faishal Hady. All Rights Reserved.",
    viewFile: "Inspect Project Scope",
    sourceCode: "Open Source Code"
  }
};
