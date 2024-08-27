import { TableCellsIcon, CodeBracketIcon, BookOpenIcon, MagnifyingGlassIcon, EllipsisHorizontalIcon } from '@heroicons/react/16/solid';
export const navItems = [
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#techSkills" },
  { name: "MyApproach", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const plItems = [
  {
    id: 1,
    des: "Python",
  },
  {
    id: 2,
    des: "Javascript",
  },
  {
    id: 3,
    des: "SQL",
  },
  {
    id: 4,
    des: "C",
  },
  {
    id: 5,
    des: "C++",
  },
  {
    id: 6,
    des: "C#",
  },
  {
    id: 7,
    des: "TypeScript",
  },
  {
    id: 8,
    des: "Php",
  },
  {
    id: 9,
    des: "nodeJS",
  },
];

export const dbItems = [
  {
    id: 1,
    des: "Postgresql",
  },
  {
    id: 2,
    des: "MySQL",
  },
  {
    id: 3,
    des: "SQL",
  },
];

export const libraryItems = [
  {
    id: 1,
    des: "React",
  },
  {
    id: 2,
    des: "Tailwind",
  },
  {
    id: 3,
    des: "Graphql",
  },
  {
    id: 4,
    des: "Graphene",
  },
  {
    id: 5,
    des: "Sqlalchemy",
  },
  {
    id: 6,
    des: "Alembic",
  },
  {
    id: 7,
    des: "Jinja",
  },
  {
    id: 8,
    des: "Yup",
  },
  {
    id: 9,
    des: "Jquery",
  },
];

export const otherItems = [
  {
    id: 1,
    des: "Framework: NextJs and Flask",
  },
  {
    id: 2,
    des: "API: REST API",
  },
  {
    id: 3,
    des: "Methodology: Agile",
  },
  {
    id: 4,
    des: "Versioning Control: Git",
  },
  {
    id: 5,
    des: "Ticketing: Jira, Clickup and Confluence",
  },
  {
    id: 6,
    des: "IDE: VS Code",
  },
];

export const knowledgableItems  = [
  {
    id: 1,
    des: "NoSql",
  },
  {
    id: 2,
    des: "Docker",
  },
  {
    id: 3,
    des: "AWS EC2",
  },
  {
    id: 4,
    des: "AWS S3",
  },
  {
    id: 5,
    des: "Selenium",
  },
  {
    id: 6,
    des: "Unit Testing",
  },
  {
    id: 7,
    des: "Ingration Testing",
  },
  {
    id: 8,
    des: "Web Scrapping",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];