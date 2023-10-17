import data from "../../data/data";
import "./AboutMe.css";

const template = () => {
  return `
    <section class="aboutme" id="aboutme">
      <h2>About me</h2>
      <img src=${data.avatar} alt=${data.name}/>
      <ul>
      ${data.skills
        .map(
          (skill) => `<li>
      <p>${skill}</p>
      </li>`
        )
        .join("")}
    </ul>
      <p>${data.aboutMe}</p>
      <p>${data.address}</p>
      <a href=${`mailto:${data.email}>Contact me</a>`}
    </section>
  `;
};

const AboutMe = () => {
  return template();
};

export default AboutMe;
