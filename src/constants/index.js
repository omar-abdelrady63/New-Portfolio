import {
  FaReact, FaNodeJs, FaPython, FaPhp, FaLaptopCode, FaDatabase, FaDocker, FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiTypescript, SiCplusplus, SiLaravel, SiFlask, SiMysql, SiPostgresql,
  SiPostman, SiGit, SiBootstrap, SiVercel, SiSocketdotio, SiVite, SiHtml5, SiCss3, SiNextdotjs
} from "react-icons/si";
import cychess from "../assets/projects/cychess.jpg";
import MovieTheater from "../assets/projects/MovieTheater.png";
import PHP from "../assets/projects/PHP.png";
import EDUKATE from "../assets/projects/EDUKATE.png";
import RKGN from "../assets/projects/rkgn.png";

export const PROFILE = {
  name: "Omar Aly Abd-Elrady",
  role: "Software Engineer",
  subRoles: ["Full Stack Developer", "Backend Developer", "Web Designer"],
  age: 20,
  gender: "Male",
  location: "Egypt",
  timezone: "GMT+2",
  university: "Suez Canal University",
  faculty: "Computers and Information",
  department: "Computer Science",
  level: "Third Year",
  grade: "C+",
  graduationYear: 2027,
  email: "abdelradyomar7@gmail.com",
  phone: "+2010123457731",
  linkedin: "https://www.linkedin.com/in/omar-aly-7271252b1/",
  github: "https://github.com/omar-abdelrady63",
  whatsapp: "https://wa.me/201212914537",
  summary: "Computer Science Student at SCU. I engineer high-performance web applications. Passionate about solving complex problems and learning new technologies.",
  logo: "/logog.png",
  image: "/my-photo.png"
};

export const SKILLS = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "Flask", icon: SiFlask, color: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap 5", icon: SiBootstrap, color: "#7952B3" },
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ]
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
    ]
  }
];

export const PROJECTS = [
  {
    title: "CyChess",
    description: "A modern, real-time chess platform built for playing with friends. Create games, challenge opponents, and track your chess journey.",
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
    ],
    link: "https://cychess.vercel.app/",
    github: "https://github.com/omar-abdelrady63/cychess",
    image: cychess,
    problemSolved: "Solves real-time synchronization in competitive play using Socket.io and authoritative server-side time management. Integrates Stockfish via WASM/Web Workers."
  },
  {
    title: "RKGN",
    description: "Powerful AI-enhanced code generation platform that accelerates software development by generating fully functional project templates with customizable architectures, tech stacks, and database schemas.",
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "ImageKit", icon: SiNextdotjs, color: "#000000" },
      { name: "gemeni API", icon: SiNextdotjs, color: "#000000" },
    ],
    link: "https://rkgn.vercel.app/",
    github: "https://github.com/omar-abdelrady63/RKGN",
    image: RKGN,
    problemSolved: "That project helps backend devs a lot. If you are a backend dev you may like to try it."
  },
  {
    title: "Movie Theater",
    description: "A simple React application to display and search movies using the TMDB API.",
    techStack: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "TMDB API", icon: FaDatabase, color: "#01B4E4" },
    ],
    link: "https://movie-theater-9esm-nine.vercel.app/",
    github: "https://github.com/omar-abdelrady63/Movie-Theater",
    image: MovieTheater,
    problemSolved: "First project using React/Vite, dealing with API calling and Vercel deployment."
  },
  {
    title: "CRUD Node.js Auth",
    description: "REST API with Authentication, CRUD operations, and File Uploads.",
    techStack: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "JWT", icon: FaLaptopCode, color: "#FB015B" },
    ],
    link: "https://crud-nodejs-with-authentication-and.vercel.app/",
    github: "https://github.com/omar-abdelrady63/CRUD-NODEJS-with-authentication-and-authorization",
    image: null,
    problemSolved: "First time handling Authentication, Authorization, File Uploads, and complex backend logic."
  },
  {
    title: "Laravel CRUD",
    description: "Beginner-level Laravel 12 project for blog posts.",
    techStack: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ],
    link: "#",
    github: "https://github.com/omar-abdelrady63/CRUD-Operations-using-PHP-laravel",
    image: PHP,
    problemSolved: "Built in ITI summer training camp."
  },
  {
    title: "EDUKATE",
    description: "Modern education landing page.",
    techStack: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "JS", icon: SiJavascript, color: "#F7DF1E" },
    ],
    link: "https://omar-abdelrady63.github.io/EDUKATE/",
    github: "https://github.com/omar-abdelrady63/EDUKATE",
    image: EDUKATE,
    problemSolved: "First project built without any help during NTI camp."
  }
];


export const EDUCATION_TIMELINE = [
  {
    year: "2023 - 2027",
    title: "Faculty of Computer Science",
    institution: "Suez Canal University",
    description: "Studying Computer Science. Expected graduation in 2027. Grade: C+."
  },
  {
    year: "2024",
    title: "Full Stack PHP Camp",
    institution: "ITI Port Said",
    description: "120 hours intensive course on PHP and Full Stack development."
  },
  {
    year: "July 2025",
    title: "Full Stack PHP Camp (Again)",
    institution: "ITI Port Said",
    description: "Advanced consolidation of PHP skills."
  },
  {
    year: "Mid July 2025",
    title: "Web Designer Course",
    institution: "NTI",
    description: "Focus on UI/UX and Frontend Design."
  },
  {
    year: "August 2025",
    title: "Backend Node.js Camp",
    institution: "ITI Ismailia",
    description: "163 hours course mastering Node.js backend development."
  },
  {
    year: "Oct 2025 - Present",
    title: "Media Team Member",
    institution: "Mesh Hackers (Student Activity)",
    description: "Contributing to media and content creation."
  },
  {
    year: "Oct 2025 - Present",
    title: "IT Team Member",
    institution: "TROSC (Student Activity)",
    description: "Technical support and IT operations."
  },
];

export const CERTIFICATES = [
  {
    title: "Backend Node.js",
    image: "/certificates/2025ITInodejscourse.jpg",
    description: "ITI Ismailia - 163 Hours"
  },
  {
    title: "Full Stack PHP (2025)",
    image: "/certificates/2025ITIPHPcourse.jpg",
    description: "ITI Port Said - Advanced Course"
  },
  {
    title: "Full Stack PHP (2024)",
    image: "/certificates/2024ITIPHPcourse.jpg",
    description: "ITI Port Said - Summer Camp"
  },
  {
    title: "Web Designer",
    image: "/certificates/2025NTIWDcourse.jpg",
    description: "NTI - UI/UX & Frontend"
  }
];

export const SOCIAL_LINKS = [
  { name: "GitHub", icon: FaGithub, link: PROFILE.github },
  { name: "LinkedIn", icon: FaLinkedin, link: PROFILE.linkedin },
  { name: "Email", icon: FaEnvelope, link: `mailto:${PROFILE.email}` },
  { name: "WhatsApp", icon: FaWhatsapp, link: PROFILE.whatsapp },
  { name: "Phone", icon: FaPhone, link: `tel:${PROFILE.phone}` },
];
