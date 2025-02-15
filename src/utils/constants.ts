import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import vijayaMavuru from "../assets/Images/projects/VijayaMavuru.png";
import bookStore from "../assets/Images/projects/BookStore.png";
import catWiki from "../assets/Images/projects/CatWiki.png";
import socialMedia from "../assets/Images/projects/SocializeMedia.png";

interface IProjects {
  id: number;
  title: string;
  image: string;
  description: string;
  websiteLink?: string;
  githubLink?: string;
  skills: string[];
}

const profiles = [
  {
    id: 1,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/leela-krishna-mohan",
    icon: LinkedInIcon,
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://github.com/lkm14001",
    icon: GitHubIcon,
  },
  {
    id: 3,
    name: "Contact",
    url: "mailto:krishnaleela35@gmail.com",
    icon: EmailIcon,
  },
];

const projects: IProjects[] = [
  {
    id: 1,
    image: vijayaMavuru,
    title: "Content Creator Portfolio & Blog Platform",
    description:
      "Developed a full-stack web application for a content creator and voice artist to showcase their blogs and portfolio. The platform features a dynamic content management system, allowing seamless updates to articles and projects. Built with the MERN stack, it ensures a responsive, user-friendly experience with efficient backend performance.",
    websiteLink: "https://vijaya-mavuru.web.app",
    githubLink: "",
    skills: [
      "React.js",
      "Redux-Toolkit",
      "Typescript",
      "Material UI",
      "Firebase",
      "Firestore",
      "GraphQL",
      "MongoDB",
      "Express.js",
    ],
  },
  {
    id: 2,
    image: socialMedia,
    title: "Social Media Platform with Secure Authentication",
    description:
      "Designed and developed a full-stack social media platform using the MERN stack. The application features JWT-based authentication and authorization, enabling secure user access. Implemented CRUD REST APIs for seamless post creation, updates, and interactions. Integrated MongoDB for efficient data storage and React with Material UI for a responsive and modern user experience.",
    websiteLink: "https://socializemedia.web.app/",
    githubLink: "https://github.com/lkm14001/Social-Media-Frontend",
    skills: [
      "React.js",
      "Redux-Toolkit",
      "Typescript",
      "Material UI",
      "Express.js",
      "MongoDB",
      "JWT",
      "Postman API Testing",
    ],
  },
  {
    id: 3,
    title: "Cat Wiki",
    image: catWiki,
    description:
      "Developed a frontend Cat Wiki website as part of a DevChallenges.io challenge, using React, Material UI, and Redux. The application fetches and displays detailed information about various cat breeds using a Cat API. Features include breed search, filtering, and an intuitive UI for a seamless browsing experience.",
    websiteLink: "https://lkm14001.github.io/cat-wiki-react-app/",
    githubLink: "https://github.com/lkm14001/cat-wiki-react-app",
    skills: ["React.js", "Redux-Toolkit", "Typescript", "Material UI"],
  },
  {
    id: 4,
    title: "Mobile Bookstore App – Seamless Reading Experience",
    image: bookStore,
    description:
      "Developed a cross-platform bookstore app using React Native, allowing users to read, purchase, and favorite books. Implemented authentication and authorization for secure access, with Realm MongoDB handling efficient data storage. Designed a visually appealing and user-friendly interface using UI Kitten, ensuring a seamless reading and shopping experience.",
    websiteLink: "",
    githubLink:
      "https://github.com/lkm14001/Book-Store-React-Native-Mobile-App",
    skills: [
      "React Native",
      "UI-kitten",
      "Realm Database",
      "Typescript",
      "Redux-Toolkit",
    ],
  },
];

export { profiles, projects };
