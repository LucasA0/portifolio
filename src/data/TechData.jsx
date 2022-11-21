import {
  SiTypescript,
  SiCss3,
  SiJavascript,
  SiReact,
  SiStyledcomponents,
} from "react-icons/si";

import { DiHtml5 } from "react-icons/di";

export const technologies = [
  {
    id: "html",
    name: "HTML5",
    icon: <DiHtml5 />,
    knowledge: "Emmet, Forms, Semantic HTML, SEO Basics ",
  },
  {
    id: "css",
    name: "CSS3",
    icon: <SiCss3 />,
    knowledge:
      "Flex Box, Grid, Media Queries, Animations, Display, Selectors, Specificity",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <SiJavascript />,
    knowledge:
      "Promisses, Classes, Array Methods, ES6 + JavaScript, Fetch API / Ajax, DOM",
  },
  {
    id: "react",
    name: "React",
    icon: <SiReact />,
    knowledge:
      "Props, State, Events, Conditional Rendering, React Hooks, Context Api's",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: <SiTypescript />,
    knowledge:
      "Basic Types, Classes, Interfaces, Types, Advanced Types, Generic Types, Types Decorators, Namespaces, Modules",
  },
  {
    id: "styledcomponents",
    name: "StyledComponents",
    icon: <SiStyledcomponents />,
    knowledge:
      "Adapting based on props, Extending styles, Attaching additional props, Animations",
  },
];

export const Projects = [
  {
    id: "dashboard",
    name: "Dashboard",
    image: "../assets/images/dashboard.PNG",
    tech: "React.Js, Tailwind, Syncfusion UI, React Icons, React Router",
    source: "https://github.com/LucasA0/professional-dashboard",
    demo: "https://grand-melba-05e51c.netlify.app",
  },
  {
    id: "cryptoapp",
    name: "Crypto News",
    image: "../assets/images/CryptoNews.PNG",
    tech: "React.Js, Ant Design, Chart.js, Millify, Redux, Moment",
    source: "https://github.com/LucasA0/CryptoNews",
    demo: "https://cryptoappnews.netlify.app",
  },
  {
    id: "pomodoro",
    name: "Pomodoro App",
    image: "../assets/images/Pomodoro.PNG",
    tech: "React.Ts, TypeScript",
    source: "https://github.com/LucasA0/pomodoro-app",
    demo: "https://pomodoro-app-76ab.netlify.app/",
  },
];
