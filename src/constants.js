// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import bubtLogo from './assets/education_logo/bubt.png';
import accLogo from './assets/education_logo/acc.png';
import programinngHeroLogo from './assets/education_logo/programminghero_logo.jpg';

// Project Section Logo's
import equisportsLogo from './assets/work_logo/equisports.jpg';
import dineBoardLogo from './assets/work_logo/dineBoard.jpg';
import careerClimbLogo from './assets/work_logo/careerClimb.jpg';
import gadgetHeavensLogo from './assets/work_logo/gadgetHeavens.jpg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
            { name: 'JavaScript', logo: javascriptLogo },
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
  {
    id: 0,
    img: programinngHeroLogo,
    school: "Programming Hero - Web Development Course",
    date: "2024 - Present",
    grade: "Ongoing",
    desc: "Currently enrolled in the Programming Hero Web Development course, where I’ve learned the fundamentals of frontend and backend development. I've worked with HTML, CSS, JavaScript, React for the frontend, and Node.js, Express, and MongoDB for backend CRUD operations. I'm actively involved in hands-on projects and improving my full-stack development skills with the Programming Hero community.",
    degree: "Web Development - Full Stack (MERN)",
  },
  {
    id: 1,
    img: bubtLogo,
    school: "Bangladesh University of Business and Technology (BUBT)",
    date: "2022 - 2026 (Expected)",
    grade: "CGPA: 3.71 (Current)",
    desc: "Pursuing a Bachelor of Science in Computer Science and Engineering (B.Sc. in CSE) at BUBT. The program covers core areas like Data Structures, Algorithms, Object-Oriented Programming, Operating Systems, Database Systems, and Web Technologies. Actively participating in projects, academic activities, and technical workshops to enhance my problem-solving and software engineering skills.",
    degree: "Bachelor of Science - B.Sc. in Computer Science & Engineering",
  },
  {
    id: 2,
    img: accLogo,
    school: "Adamjee Cantonment College",
    date: "2019 - 2021",
    grade: "GPA: 5.00",
    desc: "Completed Higher Secondary Certificate (HSC) from Adamjee Cantonment College under the Dhaka Board. Major subjects included Physics, Chemistry, Mathematics, and ICT. My strong academic background during this period helped build a solid foundation for pursuing computer science.",
    degree: "HSC - Science",
  }

  ];
  
  export const projects = [
    {
      id: 0,
      title: "EquiSports - A Sports Equipment Store",
      description:
        "Built a fully responsive , user friendly and light weight e-commerce site with product sorting, authentication, and dark/light theme toggle.",
      image: equisportsLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/Asif-Abdullah01/Equi-Sports-Client",
      webapp: "https://equisports24.netlify.app/",
    },
    {
      id: 1,
      title: "DineBoard - A Restaurant Management System",
      description:
        "Developed a responsive and user-friendly restaurant management system with protected routing to ensure secure access for staff and managers.",
      image: dineBoardLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/Asif-Abdullah01/DineBoard-client-side",
      webapp: "https://phero-assignment.web.app/",
    },
    {
      id: 2,
      title: "Career Climb - A Career Counselling Platform",
      description:
        "Developed a responsive and user-focused career counselling platform with protected routing,   authentication, and interactive UI elements.",
      image: careerClimbLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/Asif-Abdullah01/career-climb",
      webapp: "https://careerclimb2024.netlify.app/",
    },
    {
      id: 3,
      title: "Gadget Heavens - A Gadget Store",
      description:
        "Gadget Heavens is a user-friendly site to browse gadgets, view details with ratings, and easily add items to cart or wishlist. It offers a personalized dashboard, smooth checkout, and smart filtering by category and price.",
      image: gadgetHeavensLogo,
      tags: ["React JS", "Firebase", "HTML", "CSS", "Javascript"],
      github: "https://github.com/Asif-Abdullah01/Gadget-Heavens-Website",
      webapp: "https://gadgetheavens2143.surge.sh/",
    },
  ];  