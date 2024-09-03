/* eslint-disable no-multi-str */
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BsFiletypeSql } from "react-icons/bs";

export const skills = [
  {
    id: 1,
    name: "Javascript",
    level: "Intermediate",
    description:
      "Proficient in using JavaScript applied in frameworks like React, \
         with a solid understanding of its syntax, data types, and control structures. \
         Experienced in working with popular libraries and frameworks, and skilled in using \
         JavaScript to solve real-world problems.",
    icon: <IoLogoJavascript size={32} />,
  },
  {
    id: 2,
    name: "React",
    level: "Intermediate",
    description:
      "Experienced in building reusable UI components with React. Skilled in managing state and props,\
        and familiar with popular libraries like Redux and React Router. Able to build scalable \
         and maintainable applications with React.",
    icon: <FaReact size={32} />,
  },
  {
    id: 3,
    name: "SQL",
    level: "Intermediate",
    description:
      "Proficient in writing efficient SQL queries to retrieve and manipulate data in \
         relational databases. Experienced in designing and implementing database schemas, and \
         skilled in using SQL to solve data analysis problems. Familiar with popular \
         database management systems like Oracle SQL and SQLServer.",
    icon: <BsFiletypeSql size={32} />,
  },
];
