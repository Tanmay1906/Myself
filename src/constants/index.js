import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Blockchain",
    icon: mobile,
  },
  {
    title: "Cyber Security",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: " Cyber Security & Ethical Hacking",
    company_name: "Coincent",
    icon: tesla,
    iconBg: "#383E56",
    date: "Feb 2024 - April 2024",
    points: [
      "Designed and developed web applications leveraging HTML, CSS, and JavaScript, effectively creating interactive and user-friendly interfaces while demonstrating strong proficiency in front-end technologies to meet client specifications and improve overall user engagement.",
      "Created a responsive and efficient HTML layout for a Netflix landing page, utilizing best practices in web design and development to optimize user experience across various devices, thereby showcasing strong design sensibilities and coding skills.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "TOPPER WORLD",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2024 - March 2024",
    points: [
      "Designed and developed web applications leveraging HTML, CSS, and JavaScript, effectively creating interactive and user-friendly interfaces while demonstrating strong proficiency in front-end technologies to meet client specifications and improve overall user engagement.",
      "Created a responsive and efficient HTML layout for a Netflix landing page, utilizing best practices in web design and development to optimize user experience across various devices, thereby showcasing strong design sensibilities and coding skills.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Zidio Development",
    icon: shopify,
    iconBg: "#383E56",
    date: "Oct 2024 - Dec 2024",
    points: [
      " Developed a fully responsive website for Zidio Development Company using the MERN stack, implementing modern web development practices that improved user experience, functionality, and performance, while collaborating with cross-functional teams to deliver high-quality results.",
      "Created a full-stack web-based task manager, demonstrating expertise in end-to-end application development",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Url - Shortener",
    description:
      "A powerful tool for creating shortened URLs with advanced tracking features, including click counts, device analytics, and geographical insights. Generate user-friendly QR codes for seamless sharing and enhanced accessibility.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Shoe Company",
    description:
      "Created a responsive and efficient HTML layout for a Shoe Company landing page, utilizing best practices in web design and development to optimize user experience across various devices, thereby showcasing strong design sensibilities and coding skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, while offering curated recommendations for popular destinations to enhance their travel experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
