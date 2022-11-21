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
