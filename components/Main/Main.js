import "./Main.css";
import AboutMe from "../AboutMe/AboutMe";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";

const template = () => {
  return `
  <main>
    ${AboutMe()}
    ${Education()}
    ${Experience()}
    ${Projects()}
  </main>
  `;
};

const Main = () => {
  return template();
};

export default Main;
