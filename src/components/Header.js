import { useEffect } from "react";
import { useState } from "react"
import Logo from "../assets/logo.png"

export const Header = () => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "medium");
  console.log("conflict should come here", theme);
  console.log(24);
  console.log("hello world");
  console.log(22);
  console.log(1);
  console.log("main", 1);
  console.log(2);
  console.log("main", 2);
  console.log(3);
  console.log("main", 3);
  console.log(4);
  console.log("main", 4);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="Taskmate Logo" />
            <span>Taskmate</span>
        </div>
        <div className="themeSelector">
            <span onClick={() => setTheme("light")} className={ theme === "light" ? "light activeTheme" : "light"}></span>
            <span onClick={() => setTheme("medium")} className={ theme === "medium" ? "medium activeTheme" : "medium"}></span>
            <span onClick={() => setTheme("dark")} className={ theme === "dark" ? "dark activeTheme" : "dark"}></span>
            <span onClick={() => setTheme("gOne")} className={ theme === "gOne" ? "gOne activeTheme" : "gOne"}></span>
            <span onClick={() => setTheme("gTwo")} className={ theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}></span>
            <span onClick={() => setTheme("gThree")} className={ theme === "gThree" ? "gThree activeTheme" : "gThree"}></span>
        </div>
    </header>
  )
}
