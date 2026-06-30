import React from "react";
import { Icon } from "@iconify/react";
import { Project, ExperienceItem, SkillCategory } from "./types";

export const mascotSpeeches: string[] = [
  "Halo! Selamat datang di portofolio saya! Saya Faishal, senang berkenalan dengan Anda! 🐙✨",
  "Portofolio ini dibangun menggunakan React & Tailwind CSS v4! 💻",
  "Saya berbasis di Pontianak, Indonesia. Mari kita berkolaborasi! 🌏🚀",
  "Butuh IT Support handal, Fullstack Web Engineer, atau Network Engineer? Kontak saya saja! 🛠️",
  "Takodachi power! Semoga hari Anda dipenuhi kebahagiaan dan produktivitas! 🌟"
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Proficient In",
    delay: "0.0s",
    skills: [
      { label: "Ms. Excel", icon: <Icon icon="simple-icons:microsoftexcel" className="text-[#217346] w-5 h-5 shrink-0" /> },
      { label: "Ms. Word", icon: <Icon icon="simple-icons:microsoftword" className="text-[#2B579A] w-5 h-5 shrink-0" /> }
    ]
  },
  {
    title: "Programming Languages",
    delay: "0.08s",
    skills: [
      { label: "C", icon: <Icon icon="devicon:c" className="w-5 h-5 shrink-0" /> },
      { label: "Python", icon: <Icon icon="logos:python" className="w-5 h-5 shrink-0" /> },
      { label: "Java", icon: <Icon icon="logos:java" className="w-5 h-5 shrink-0" /> },
      { label: "Flutter", icon: <Icon icon="logos:flutter" className="w-5 h-5 shrink-0" /> },
      { label: "PHP", icon: <Icon icon="logos:php" className="w-5 h-5 shrink-0" /> },
      { label: "JavaScript", icon: <Icon icon="logos:javascript" className="w-5 h-5 shrink-0" /> },
      { label: "HTML5", icon: <Icon icon="logos:html-5" className="w-5 h-5 shrink-0" /> },
      { label: "CSS3", icon: <Icon icon="logos:css-3" className="w-5 h-5 shrink-0" /> }
    ]
  },
  {
    title: "Web Development Frameworks",
    delay: "0.16s",
    skills: [
      { label: "Laravel", icon: <Icon icon="logos:laravel" className="w-5 h-5 shrink-0" /> },
      { label: "Node.js", icon: <Icon icon="logos:nodejs-icon" className="w-5 h-5 shrink-0" /> },
      { label: "Bootstrap", icon: <Icon icon="logos:bootstrap" className="w-5 h-5 shrink-0" /> },
      { label: "Tailwind", icon: <Icon icon="logos:tailwindcss-icon" className="w-5 h-5 shrink-0" /> }
    ]
  },
  {
    title: "Databases",
    delay: "0.24s",
    skills: [
      { label: "MySQL", icon: <Icon icon="logos:mysql" className="w-5 h-5 shrink-0" /> },
      { label: "MariaDB", icon: <Icon icon="logos:mariadb-icon" className="w-5 h-5 shrink-0" /> },
      { label: "Microsoft SQL Server", icon: <Icon icon="simple-icons:microsoftsqlserver" className="text-[#CC2927] w-5 h-5 shrink-0" /> }
    ]
  },
  {
    title: "Tools & Platforms",
    delay: "0.32s",
    skills: [
      { label: "Visual Studio Code", icon: <Icon icon="logos:visual-studio-code" className="w-5 h-5 shrink-0" /> },
      { label: "Android Studio", icon: <Icon icon="logos:android-icon" className="w-5 h-5 shrink-0" /> },
      { label: "PhpMyAdmin", icon: <Icon icon="simple-icons:phpmyadmin" className="text-[#F0970E] w-5 h-5 shrink-0" /> },
      { label: "Cisco Packet Tracer", icon: <Icon icon="simple-icons:cisco" className="text-[#1BA0D7] w-5 h-5 shrink-0" /> },
      { label: "Arduino IDE", icon: <Icon icon="logos:arduino" className="w-5 h-5 shrink-0" /> },
      { label: "GitHub", icon: <Icon icon="logos:github-icon" className="w-5 h-5 shrink-0" /> },
      { label: "Git", icon: <Icon icon="logos:git-icon" className="w-5 h-5 shrink-0" /> },
      { label: "Canva", icon: <Icon icon="simple-icons:canva" className="text-[#00C4CC] w-5 h-5 shrink-0" /> }
    ]
  },
  {
    title: "Linux & Network Infrastructure",
    delay: "0.4s",
    skills: [
      { label: "Linux CLI", icon: <Icon icon="logos:linux-tux" className="w-5 h-5 shrink-0" /> },
      { label: "Bash Scripting", icon: <Icon icon="logos:bash" className="w-5 h-5 shrink-0" /> }
    ]
  },
  {
    title: "Internet of Things",
    delay: "0.48s",
    skills: [
      { label: "ESP8266", icon: <Icon icon="simple-icons:espressif" className="text-[#E7352C] w-5 h-5 shrink-0" /> },
      { label: "ESP32", icon: <Icon icon="simple-icons:espressif" className="text-[#E7352C] w-5 h-5 shrink-0" /> }
    ]
  },
  {
    title: "Soft Skills",
    delay: "0.56s",
    skills: [
      { label: "Software Troubleshooting", icon: <Icon icon="flat-color-icons:support" className="w-5 h-5 shrink-0" /> },
      { label: "Hardware Troubleshooting", icon: <Icon icon="flat-color-icons:services" className="w-5 h-5 shrink-0" /> },
      { label: "Time Management", icon: <Icon icon="flat-color-icons:clock" className="w-5 h-5 shrink-0" /> },
      { label: "Problem Solving", icon: <Icon icon="flat-color-icons:idea" className="w-5 h-5 shrink-0" /> },
      { label: "Teamwork", icon: <Icon icon="flat-color-icons:conference-call" className="w-5 h-5 shrink-0" /> },
      { label: "Multitasking", icon: <Icon icon="flat-color-icons:workflow" className="w-5 h-5 shrink-0" /> },
      { label: "Adaptability", icon: <Icon icon="flat-color-icons:synchronize" className="w-5 h-5 shrink-0" /> },
      { label: "Communication", icon: <Icon icon="flat-color-icons:sms" className="w-5 h-5 shrink-0" /> }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    period: "2024",
    role: "Full-Stack Web Developer",
    company: "Sistem Informasi Desa Punggur Kecil",
    location: "Pontianak, Indonesia",
    tasks: [
      "Mengembangkan situs web Sistem Informasi Desa untuk Punggur Kecil guna mendukung digitalisasi layanan publik desa dan meningkatkan akses masyarakat terhadap informasi.",
      "Menyediakan fitur-fitur seperti profil desa, pembaruan berita, pengumuman, dan informasi masyarakat dengan antarmuka yang ramah pengguna.",
      "Membantu meningkatkan transparansi dan komunikasi melalui pengelolaan data desa yang terstruktur bagi pejabat desa dan warga."
    ]
  },
  {
    period: "2022 - Present",
    role: "Sistem Komputer Student & Project Engineer",
    company: "Universitas Tanjungpura",
    location: "Pontianak, Indonesia",
    tasks: [
      "Mengembangkan berbagai proyek teknologi perkuliahan di bidang Fullstack Web Development, Mobile Application, Internet of Things (IoT), dan Jaringan.",
      "Melakukan riset dan implementasi sistem pemantauan lingkungan berbasis IoT dengan protokol komunikasi modern seperti CoAP.",
      "Mempelajari integrasi database relasional dan non-relasional serta penulisan algoritma pemrograman yang efisien."
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Sistem Pemantauan Gas Metana Dengan Protokol CoAP",
    category: "IoT & Web Engineering",
    description: "Situs pemantauan gas metana pada lahan gambut di Desa Sepuk Laut terintegrasi IoT dengan pengiriman data hemat daya via protokol CoAP.",
    tags: ["Arduino IDE", "C++", "PHP", "MySQL", "Bootstrap", "HTML", "CSS"],
    metrics: "2025",
    link: "https://github.com/faishalkc/Pemantauan-Gas-Metana",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkcajdR6bur9VSw4TGC_-feuZgWKAAdpyVYlRlEtj5QvZ-N3QubDBHYTbIxeQiUKqygSZwjUOlw7nKhfayuclvYC24zcBGit6KvYAojL4tv_yMdBLsSxQoPK5SIqXgbpgwd82TH2pcEUtf2oN8uSqbAZAGDJ97B5ctrblISDt60P0-M7KAot7Jqb2pWMY/s600/ChatGPT%20Image%2030%20Jun%202026,%2018.05.05.png"
  },
  {
    id: 2,
    title: "Sistem Informasi Desa Punggur Kecil",
    category: "Fullstack Web Engineering",
    description: "Sistem informasi pelayanan administrasi dan transparansi data publik berbasis web untuk warga Desa Punggur Kecil.",
    tags: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS"],
    metrics: "2024",
    link: "https://github.com/faishalkc/Sistem-Informasi-Desa",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh23PDqnZSMv2-ReEWKHXyxnxdoHU7Dh0cFzfxzobK-R7kq733XqLvYMxtsYsLQCbQmCwFvDRwNmCVIsY-FSCtalkg4N485gKDyK2zB0hR3YydrUt_3SBB_IbQYXVbYrHRXoAi85pDM90U7i0-5XJqMeGSAn-JgIsg9utNDPDdSI17XtSevvlOYYQWXTBQ/s600/176404.png"
  },
  {
    id: 3,
    title: "Sistem Monitoring Gas dan Suhu Buah Pisang",
    category: "IoT & Web Engineering",
    description: "Situs monitoring gas dan suhu buah pisang berbasis internet of things terhubung ke wadah tertutup dilengkapi sensor gas dan suhu.",
    tags: ["Arduino IDE", "C++", "PHP", "MySQL", "Bootstrap", "HTML", "CSS"],
    metrics: "2023",
    link: "https://github.com/faishalkc/Monitoring-Pisang",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6uKesU6dTiifFLrS5wzHtZSPVcVna1KBT96gdp6kYl4Qi-Upr2wHTgvw8HzF9RmqwpakDMVAmIqwljhWEKUU_Qu-NmZvH6CgS5jRY-6JHzGlO3pXkmT8qBKysZwtbH64FstHJgmkXiiw9f7kaND7EEdsMD_cjEXo3ocdgF9bzQMFpqJvwNTRGZicGXJY/s600/176390.png"
  },
  {
    id: 4,
    title: "Tokopedia Product Web Scraping",
    category: "Fullstack Web Engineering",
    description: "Aplikasi penarik data produk Tokopedia secara bulk dalam bentuk file Excel berdasarkan keyword, lengkap dengan filter kustom dan tautan produk otomatis.",
    tags: ["Python", "BeautifulSoup", "WebDriver"],
    metrics: "2023",
    link: "https://github.com/faishalkc/Tokopedia-Scraping",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNiw-0b-SSjazq4RHFksX7NM4SLPVrYS-6JlLDfq4dvQBmlsr8sbFtWzhFmfNC8dPvdDoByIYiOQWxKimuM8YXCJQgStyPgSiHNJaDRK-1nlQqBfTShpLOwlaB_CCRmSag4E_0h8FYmysHXPzsQ64QvmDGtZIXkSBM7khdW-2My_7ZLjKCAnNVbFb7Cik/s600/ChatGPT%20Image%2029%20Jun%202026,%2020.10.30.png"
  },
  {
    id: 5,
    title: "Quiz Mobile App",
    category: "Mobile App Development",
    description: "Aplikasi kuis mobile interaktif dengan fitur pengacakan soal (randomizer) dan otentikasi akun (login/register).",
    tags: ["Flutter", "Firebase", "MySQL"],
    metrics: "2023",
    link: "https://github.com/faishalkc/Quiz-Mobile",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikXx9Nz55Huv-W28hQsCYXhaWarxHMIH_jXSKdxvs5J-_VJVQxjPk2bFmZUmb_6dzQfZUQKMp1MK8BRcyR747zf_5faP3zPLNG6_uCJer4qrcx7iAU9rOO8efixS_PPbQFOH1JpBYv463d8sPaHdWhsIT6mMM11dtD_pI23K5Tv7stA_B9Qgq8mDmBkIg/s600/ChatGPT%20Image%2029%20Jun%202026,%2019.58.18.png"
  },
  {
    id: 6,
    title: "Covid-19 Tracker",
    category: "Desktop Application",
    description: "Aplikasi desktop pemantau data pasien aktif, sembuh, dan meninggal akibat Covid-19 dari berbagai wilayah di dunia menggunakan API publik.",
    tags: ["Python", "Tkinter", "BeautifulSoup"],
    metrics: "2022",
    link: "https://github.com/faishalkc/Covid-Tracker",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhz7YVWt9JHm-f4KbkYauga2wdcq2crtPQfixXGgWoOrXbbMs1mAZVdisTCjpYjxBCn9QWIy_rSm4kEuDpzgKJeZ3qV5OsnE7k78OLrVjoCZxOM61EG9jpyUCLhOZCOaClBamUyehaXQ4AS_vwF2JS8x3Qe5HqZh35X0HB4fOw973b7I6zixwcjX7mwXfY/s600/ChatGPT%20Image%2029%20Jun%202026,%2019.39.53.png"
  },
  {
    id: 7,
    title: "Coffee Toffee Landing Page",
    category: "Frontend Development",
    description: "Halaman pendarat responsif dengan visual menarik untuk memperkenalkan franchise Coffee Toffee, menu, galeri foto, dan kontak.",
    tags: ["HTML", "CSS", "Bootstrap"],
    metrics: "2022",
    link: "https://github.com/faishalkc/Coffee-Toffe",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi64OO_O1sUmCZ3B00cJ37gqPI_ZX3fwImdFVO50K2pTlo4byn0PgU7ENzA37kMsgY6Y0f9AtXrHq1yg2G4MnKVPx7U-HLtdYo6Wr_7HgZuRmDStjGeaiblkKOrrUFXvIw4rziq-6c1QR2T5_85DQCceJ2lBqMIkE0f6fA-TL6jwGbm2Fx1vaG2PNO-NTk/s600/ChatGPT%20Image%2029%20Jun%202026,%2020.03.15.png"
  }
];
