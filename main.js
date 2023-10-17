import "./style.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const render = () => {
  document.querySelector("#app").innerHTML = `
    ${Header()}
    ${Main()}
    ${Footer()}
  `;
};

render();
