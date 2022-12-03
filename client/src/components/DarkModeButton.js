import React from "react";

export const container = document.getElementsByClassName("theme-container");
export const root = document.querySelector(":root");
function setDark(setBgColor, setTxtColor) {
  const moon =
    "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";
  const img = document.getElementById("theme-icon");
  img.src = moon;
  container[0].classList.remove("shadow-light");
  setTimeout(() => {
    container[0].classList.add("shadow-dark");
  }, 300);
  root.style.setProperty("--bg-color", "black");
  root.style.setProperty("--text-color", "white");
  root.style.setProperty(
    "--box-shadow",
    "0 2px 4px -1px rgba(100, 100, 100, .25)"
  );
  setBgColor("black");
  setTxtColor("white");
}

function setLight(setBgColor, setTxtColor) {
  const sun =
    "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
  const img = document.getElementById("theme-icon");
  img.src = sun;
  container[0].classList.remove("shadow-dark");
  setTimeout(() => {
    container[0].classList.add("shadow-light");
  }, 300);
  root.style.setProperty("--bg-color", "white");
  root.style.setProperty("--text-color", "black");
  root.style.setProperty("--box-shadow", "0 2px 4px -1px rgba(0, 0, 0, 0.25);");
  setBgColor("white");
  setTxtColor("black");
}

function changeTheme(theme, setTheme, setBgColor, setTxtColor) {
  switch (theme) {
    case "light":
      setDark(setBgColor, setTxtColor);
      setTheme("dark");
      break;
    case "dark":
      setLight(setBgColor, setTxtColor);
      setTheme("light");
      break;
  }
}

function DarkModeButton({ setBgColor, setTxtColor }) {
  const [theme, setTheme] = React.useState("light");

  return (
    <div
      class="theme-container shadow-light"
      onClick={() => {
        changeTheme(theme, setTheme, setBgColor, setTxtColor);
      }}
    >
      <img
        id="theme-icon"
        src="https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg"
        alt="ERR"
      />
    </div>
  );
}

export default DarkModeButton;
